import { Button } from '../../button/button';
import { Link } from '../../link/link';

const IntroStep = () => {
  return (
    <>
      <div className="prose prose-xl">
        <h2>Step 1: Intro</h2>
        <p>
          Welcome to the Kabocha Crowdloan Campaign.
          <br />
          This wizard will guide you to the steps of contributing to our crowdloan campaign.
        </p>
        <p>
          Before we start, please make sure to familiarize yourself with our{' '}
          <Link href="/terms">Terms and Conditions</Link>.
        </p>
      </div>
      <div className="my-8">
        <Button href="/crowdloan?step=2">Continue</Button>
      </div>
    </>
  );
};

export default IntroStep;
