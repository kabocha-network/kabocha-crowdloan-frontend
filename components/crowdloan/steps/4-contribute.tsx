import Identicon from '@polkadot/react-identicon';
import { useEffect, useState } from 'react';

import { Button } from '../../button/button';
import { useCrowdloan } from '../useCrowdloan';

export function ContributeStep() {
  const [amount, setAmount] = useState('');
  const {
    setNextStep,
    currentAccount,
    contributionActionProgress,
    submitContribution,
    contributionError,
  } = useCrowdloan();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    const numericAccount = parseFloat(amount);
    if (!isNaN(numericAccount)) {
      submitContribution(numericAccount);
    }
  };

  useEffect(() => {
    if (contributionActionProgress === 'completed') {
      setNextStep();
    }
  }, [contributionActionProgress, setNextStep]);

  if (!currentAccount?.address) {
    return null;
  }

  return (
    <>
      <div className="prose">
        <h2 className="font-display">Step 4: Contribute</h2>
        <p>Choose the amount of KSM funds you want to contribute to the crowdloan.</p>
      </div>
      <div className="my-8 max-w-4xl">
        <div className="rounded bg-gray-50 p-6">
          <div className="flex flex-row items-center">
            <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <Identicon value={currentAccount.address} size={36} theme="polkadot" />
            </div>
            <div className="pl-2">
              {'Your address: '}
              <span className="text-sm font-bold text-gray-700">{currentAccount?.address}</span>
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              onChange={handleChange}
              value={amount}
              className="w-80 mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter amount KSM to contribute"
            />
          </div>
        </div>
      </div>
      {contributionError && (
        <div className="rounded p-6 bg-red-50 mt-2 text-red-600">{contributionError}</div>
      )}
      <div className="my-8">
        <Button onClick={handleSubmit} disabled={contributionActionProgress === 'loading'}>
          {contributionActionProgress === 'loading' ? 'Submitting...' : 'Sign and send'}
        </Button>
      </div>
    </>
  );
}

export default ContributeStep;
