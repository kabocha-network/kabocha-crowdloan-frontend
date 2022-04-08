
import { Button } from '../../button/button';
import { Link } from '../../link/link';

export function IntroStep() {
  return (
    <>
      <h2 className="text-2xl font-bold my-4">Step 1: Intro</h2>
      <p className="text-xl max-w-4xl mb-4">
        Welcome to the Kabocha Crowdloan Campaign.
        <br/>
        This wizard will guide you to the steps of contributing to our crowdloan campaign.
      </p>
      <p className="text-xl max-w-4xl mb-2">
        Before we start, please make sure to familiarize yourself with our{' '}
        <Link href="/terms">Terms and Conditions</Link>.
      </p>
      <div className="my-4">
        <Button href="/crowdloan?step=2">Start</Button>
      </div>
    </>
  );
}
