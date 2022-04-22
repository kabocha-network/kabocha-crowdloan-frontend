import { useCrowdloan } from '../useCrowdloan';

export function ConfirmationStep() {
  const { contributionState } = useCrowdloan();

  return (
    <>
      <div className="prose">
        <h2 className="font-display">Step 5: Confirmation</h2>
        <p>Thank you for contributing to Kabocha Crowdloan!</p>
      </div>

      <div className="my-4 p-4 max-w-3xl bg-gray-200">
        {contributionState ? (
          <>
            <span className="block">Sender: {contributionState.address}</span>
            <span className="block">KSM amount: {contributionState.amount}</span>
            <span className="block">
              {'TX: '}
              <a
                href={`https://kusama.subscan.io/extrinsic/${contributionState.tx}`}
                target="_blank"
                className="underline decoration-primary hover:bg-primary hover:text-white"
                rel="noopener noreferrer"
              >
                {contributionState.tx}
              </a>
            </span>
          </>
        ) : (
          <p>Please verify your transaction on the block explorer.</p>
        )}
      </div>

      <div className="prose">
        <h3 className="font-display">Kabocha seeds</h3>
        <p>
          Kabocha seeds are coming soon!{' '}
          <a href="https://kabocha.network">Learn more on about our upcoming NFTs →</a>
        </p>
      </div>
    </>
  );
}

export default ConfirmationStep;
