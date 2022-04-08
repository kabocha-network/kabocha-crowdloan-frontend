import { useState } from 'react';
import { apiProviderConfig } from '../../config';
import { getBigNumberAmount, getSignedApi } from '../../lib/crypto/utils';

import { useSubstrate } from '../../providers/substrate-context';

type ContributionProgress = 'initial' | 'loading' | 'completed' | 'error';

export function useCrowdloan() {
  const { currentAccount } = useSubstrate();
  const { parachainId } = apiProviderConfig.popart;

  const [progress, setProgress] = useState<ContributionProgress>('initial');
  const [tx, setTx] = useState<string | null>(null);

  const submitContribution = async (givenAmount: number) => {
    setProgress('loading');
    setTx(null);

    if (!currentAccount) {
      setProgress('error');
      console.error('Account not available');
      return;
    }

    const api = await getSignedApi(currentAccount);
    if (!api) {
      setProgress('error');
      console.error('Error while getting signed API');
      return;
    }

    // const balance = await api.derive.balances?.all(currentAccount.address);
    // const available = balance.availableBalance.toNumber();
    const decimals = api.registry.chainDecimals;
    const amount = getBigNumberAmount(givenAmount, decimals);

    // create a contribution transaction
    const tx = api.tx.crowdloan.contribute(parachainId, amount, null);

    const unsubscribe = await tx.signAndSend(currentAccount.address, ({ status, events, dispatchError }) => {
      if (status.isReady) {
        console.log('Waiting...');
      } else if (status.isInBlock || status.isFinalized) {
        events.forEach(({ event }) => {
          if (event.method === 'ExtrinsicSuccess') {
            setTx(tx.hash.toHex());
            setProgress('completed');
          } else if (event.method === 'ExtrinsicFailed') {
            const {
              data: [error],
            } = event;
            console.log(error.toString());
            setTx(tx.hash.toHex());
            setProgress('error');
          }
        });

        // unsubscribe
        unsubscribe();
      }
    });
  };

  return {
    currentAccount,
    tx,
    progress,
    submitContribution,
  };
}
