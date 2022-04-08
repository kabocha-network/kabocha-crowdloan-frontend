import { usePolkadotExtension } from '@substra-hooks/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button } from '../../button/button';
import { useCrowdloan } from '../hooks/useCrowdloan';

export function ContributeStep() {
  const router = useRouter();
  const { w3Enabled } = usePolkadotExtension();
  const [amount, setAmount] = useState<number>(0)

  const { progress, account, submitContribution } = useCrowdloan()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value))
  }

  const handleSubmit = () => {
    submitContribution(amount)
  }

  useEffect(() => {
    if (!w3Enabled) {
      router.push({
        pathname: '/crowdloan',
        query: { step: 1 },
      });
    }
  }, [router, w3Enabled]);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">Step 4: Contribute</h2>
      <p className="max-w-2xl mb-2">
        Choose the amount of KSM funds you want to contribute to the crowdloan.
      </p>

      <div className="my-4 max-w-4xl">
        <div className="rounded bg-slate-50 p-4">
          <div>
            {'Your KSM address: '}
            <span className="text-sm font-bold text-gray-700">
              {account?.address}
            </span>
          </div>
          <div className="mt-4">
            <input type="number" onChange={handleChange} value={amount === 0 ? '' : amount}
              className="w-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:text-slate-400"
              placeholder='Enter amount KSM to contribute'
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <Button onClick={handleSubmit}>Sign and send</Button>
      </div>
      <div>
        <pre>
          Current step: {progress}
        </pre>
      </div>
    </>
  );
}
