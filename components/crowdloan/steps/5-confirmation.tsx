import { Button } from '../../button/button';

import { useCrowdloan } from '../useCrowdloan';

type ConfirmationStepProps = {
  onStepComplete: () => void;
};

export function ConfirmationStep() {
  const { contributionState } = useCrowdloan();

  return (
    <>
      <div className="prose prose-xl">
        <h2>Step 5: Confirmation</h2>
        <p>Thank you for contributing to Kabocha Crowdloan!</p>
      </div>

      <div className="my-4 p-4 max-w-3xl bg-gray-200">
        {contributionState ? (
          <>
            <span className="block">Address: {contributionState.address}</span>
            <span className="block">TX: {contributionState.tx}</span>
            <span className="block">KSM amount: {contributionState.amount}</span>
          </>
        ) : (
          <p>
            Unfortunately we were not able to capture your contribution details!
            <br />
            Please verify your transaction on the block explorer.
          </p>
        )}
      </div>

      <div className="prose">
        <h3>Kabocha seeds</h3>
        <p>
          Kabocha seeds are coming soon!{' '}
          <a href="https://kabocha.network">Learn more on about our upcoming NFTs →</a>
        </p>
      </div>
    </>
  );
}

export default ConfirmationStep;
