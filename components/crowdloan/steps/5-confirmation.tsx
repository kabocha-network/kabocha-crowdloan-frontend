import { Button } from '../../button/button';

import type { ContributionState } from '../crowdloan';

type ConfirmationStepProps = {
  contributionState: ContributionState | null;
};

const ConfirmationStep = ({ contributionState }: ConfirmationStepProps) => {
  return (
    <>
      <div className="prose prose-xl">
        <h2>Step 5: Confirmation</h2>
        <p>Thank you for contributing to Kabocha Crowdloan!</p>
      </div>

      {contributionState && (
        <div className="my-4 p-4 max-w-3xl bg-gray-200">
          <span className="block">Address: {contributionState.address}</span>
          <span className="block">TX: {contributionState.tx}</span>
          <span className="block">KSM amount: {contributionState.amount}</span>
        </div>
      )}

      <div className="prose prose-xl">
        <h3>Kabocha seeds</h3>
        <p>
          Kabocha seeds are coming soon! <a href="https://kabocha.network">Learn more on about our upcoming NFTs →</a>
        </p>
      </div>
    </>
  );
};

export default ConfirmationStep;
