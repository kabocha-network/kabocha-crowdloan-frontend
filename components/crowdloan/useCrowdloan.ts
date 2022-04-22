import { useContext } from 'react';
import { getBigNumberAmount, getSignedApi } from '../../lib/crypto/utils';

import { useSubstrate } from '../../providers/substrate-context';
import { ContributionState, CrowdloanContext } from './crowdloanProvider';
import { useParachainId } from './useParachainId';

export function useCrowdloan() {
  const { currentAccount } = useSubstrate();
  const parachainId = useParachainId();
  const {
    crowdloanWizardStep,
    setCrowdloanWizardStep,
    contributionState,
    setContributionState,
    contributionError,
    setContributionError,
    contributionActionProgress,
    setContributionActionProgress,
    setTxHash,
    testimonyAcceptance,
    setTestimonyAcceptance,
  } = useContext(CrowdloanContext);

  const handleError = (error: string) => {
    setContributionActionProgress('error');
    setContributionError(error);
    console.error(error);
  };

  async function storeContribution(testimony: string | null, contributionState: ContributionState) {
    const response = await fetch('/api/crowdloan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        testimony,
        ...contributionState,
      }),
    });
  }

  const submitContribution = async (givenAmount: number) => {
    setContributionActionProgress('loading');
    setTxHash(null);

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
      const crowdloanTx = api.tx.crowdloan.contribute(parachainId, bnAmount, null);

      // sign the transaction and wait for it to be included in a block
      const unsubscribe = await crowdloanTx.signAndSend(
        currentAccount.address,
        ({ status, events, dispatchError }) => {
          if (status.isReady) {
            console.log('Waiting...');
          } else if (status.isInBlock || status.isFinalized) {
            events.forEach(({ event }) => {
              if (event.method === 'ExtrinsicSuccess') {
                setTxHash(crowdloanTx.hash.toHex());

                const contributionState = {
                  amount: givenAmount,
                  address: currentAccount!.address,
                  txHash: crowdloanTx.hash.toHex(),
                };
                setContributionState(contributionState);
                setContributionActionProgress('completed');
                storeContribution(testimonyAcceptance, contributionState);
              } else if (event.method === 'ExtrinsicFailed') {
                const {
                  data: [error],
                } = event;
                setTxHash(crowdloanTx.hash.toHex());
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
    switch (crowdloanWizardStep) {
      case 'intro':
        setCrowdloanWizardStep('extension');
        break;
      case 'extension':
        setCrowdloanWizardStep('verify');
        break;
      case 'verify':
        setCrowdloanWizardStep('contribute');
        break;
      case 'contribute':
        setCrowdloanWizardStep('success');
        break;
      default:
        setCrowdloanWizardStep('intro');
        break;
    }
  };

  const acceptTestimony = () => {
    const timestamp = new Date().toISOString();
    setTestimonyAcceptance(timestamp);
  };

  return {
    crowdloanWizardStep,
    setNextStep,
    currentAccount,
    contributionState,
    setContributionState,
    contributionActionProgress,
    setContributionActionProgress,
    submitContribution,
    contributionError,
    testimonyAcceptance,
    acceptTestimony,
  };
}
