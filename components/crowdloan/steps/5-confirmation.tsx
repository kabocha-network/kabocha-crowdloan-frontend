
import { Button } from '../../button/button';

export function ConfirmationStep() {
  return (
    <>
      <div className="prose prose-xl">
        <h2>Step 5: Confirmation</h2>
        <p>
          Thank you for contributing to Kabocha Crowdloan!<br/>
        </p>
        <p>You can now claim your unique NFTs!</p>
      </div>
      <div className="my-8">
        <Button href="/">Claim your Kabocha seeds</Button>
      </div>
    </>
  );
}
