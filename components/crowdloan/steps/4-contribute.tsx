import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Button } from '../../button/button';
import { ContributionState } from '../crowdloan';
import { useCrowdloan } from '../useCrowdloan';

type ContributeStepProps = {
  onContribute: Dispatch<SetStateAction<ContributionState | null>>;
};

const ContributeStep = ({ onContribute }: ContributeStepProps) => {
  const router = useRouter();
  const [amount, setAmount] = useState('');

  const { progress, currentAccount, submitContribution, tx } = useCrowdloan();

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
    if (progress === 'completed') {
      router.push({
        pathname: '/crowdloan',
        query: { step: 5 },
      });
    }
  }, [progress, router]);

  useEffect(() => {
    if (tx) {
      onContribute({
        amount: amount,
        address: currentAccount!.address,
        tx,
      });
    }
  }, [tx, amount, currentAccount, onContribute]);

  return (
    <>
      <div className="prose prose-xl">
        <h2>Step 4: Contribute</h2>
        <p>Choose the amount of KSM funds you want to contribute to the crowdloan.</p>
      </div>
      <div className="my-8 max-w-4xl">
        <div className="rounded bg-gray-50 p-6">
          <div>
            {'Your address: '}
            <span className="text-sm font-bold text-gray-700">{currentAccount?.address}</span>
          </div>
          <div className="mt-4">
            <input
              type="text"
              onChange={handleChange}
              value={amount}
              className="w-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-gray-400"
              placeholder="Enter amount KSM to contribute"
            />
          </div>
        </div>
      </div>
      <div className="my-8">
        <Button onClick={handleSubmit} disabled={progress === 'loading'}>
          {progress === 'loading' ? 'Submitting...' : 'Sign and send'}
        </Button>
      </div>
    </>
  );
};

export default ContributeStep;
