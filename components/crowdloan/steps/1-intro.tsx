import Link from 'next/link';

import { Button } from '../../button/button';

export function IntroStep() {
  return (
    <>
      <h2 className="text-2xl font-bold my-4">Step 1: Intro</h2>
      <p>
        Welcome to the Kabocha Crowdloan Campaign. This wizard will guide you to the steps of contributing to our
        crowdloan campaign.
        <br />
        Before we start, please make sure to familiarize yourself with our{' '}
        <Link href="/terms">
          <a>Terms anc Conditions</a>
        </Link>
        .
      </p>
      <div className="my-4">
        <Button href="/crowdloan?step=2">Start</Button>
      </div>
    </>
  );
}
