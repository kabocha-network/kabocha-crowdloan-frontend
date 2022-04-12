import { useState } from 'react';
import { getBigNumberAmount, getSignedApi } from '../../lib/crypto/utils';

import { useSubstrate } from '../../providers/substrate-context';
import { useParachainId } from './useParachainId';

type ContributionActionProgress = 'initial' | 'loading' | 'completed' | 'error';
type CrowdloanWizardStep = 'intro' | 'extension' | 'verify' | 'contribute' | 'success';

type ContributionState = {
  address: string;
  amount: string;
  tx: string;
};

export function useCrowdloan() {
  const { currentAccount } = useSubstrate();
  const parachainId = useParachainId();

  const [progress, setProgress] = useState<ContributionActionProgress>('initial');
  const [step, setStep] = useState<CrowdloanWizardStep>('intro');
  const [tx, setTx] = useState<string | null>(null);
  const [contributionState, setContributionState] = useState<ContributionState | null>(null);
  const [contributionError, setContributionError] = useState<string | null>(null);

  const handleError = (error: string) => {
    setProgress('error');
    setContributionError(error);
    console.error(error);
  };

  const submitContribution = async (givenAmount: number) => {
    setProgress('loading');
    setTx(null);

    if (!currentAccount) {
      handleError('No account has been selected!');
      return;
    }

    try {
      const api = await getSignedApi(currentAccount);

      if (!api) {
        handleError('Could not connect to Polkadot API!');
        return;
      }

      // const balance = await api.derive.balances?.all(currentAccount.address);
      // const available = balance.availableBalance.toNumber();
      const decimals = api.registry.chainDecimals;
      const bnAmount = getBigNumberAmount(givenAmount, decimals[0]);

      // create a contribution transaction
      const tx = api.tx.crowdloan.contribute(parachainId, bnAmount, null);

      const unsubscribe = await tx.signAndSend(
        currentAccount.address,
        ({ status, events, dispatchError }) => {
          if (status.isReady) {
            console.log('Waiting...');
          } else if (status.isInBlock || status.isFinalized) {
            events.forEach(({ event }) => {
              if (event.method === 'ExtrinsicSuccess') {
                setTx(tx.hash.toHex());
                setContributionState({
                  amount: givenAmount.toFixed(),
                  address: currentAccount!.address,
                  tx: tx.hash.toHex(),
                });
                setProgress('completed');
              } else if (event.method === 'ExtrinsicFailed') {
                const {
                  data: [error],
                } = event;
                setTx(tx.hash.toHex());
                handleError(error.toString());
              }
            });

            // unsubscribe
            unsubscribe();
          }
        }
      );
    } catch (error: unknown) {
      const errorMessage = (error as Error).toString();
      handleError(errorMessage);
    }
  };

  const setNextStep = () => {
    switch (step) {
      case 'intro':
        setStep('extension');
        break;
      case 'extension':
        setStep('verify');
        break;
      case 'verify':
        setStep('contribute');
        break;
      case 'contribute':
        setStep('success');
        break;
      default:
        setStep('intro');
    }
  };

  return {
    step,
    setNextStep,
    currentAccount,
    contributionState,
    setContributionState,
    tx,
    progress,
    submitContribution,
    contributionError,
  };
}
