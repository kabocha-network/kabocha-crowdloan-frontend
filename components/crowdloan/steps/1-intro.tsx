import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../button/button';
import { TermsAndConditions } from '../terms-and-conditions';

type IntroStepProps = {
  onStepComplete: () => void;
};

export function IntroStep({ onStepComplete }: IntroStepProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleOnAccept = (value: boolean) => {
    setIsAccepted(value);
  };

  const handleContinue = () => {
    if (isAccepted) {
      onStepComplete();
    }
  };

  return (
    <>
      <div className="prose">
        <h2 className="font-display">Step 1: Intro</h2>
        <p>
          Welcome to the Kabocha Crowdloan Campaign.
          <br />
          <br></br>
          To continue, please read the Initial Testimony and agree, you will receive a Kabocha Seed
          (NFT) which will reflect your inital rights in Kabocha Network.
        </p>
      </div>

      <div className="mt-4">
        <TermsAndConditions onAccept={handleOnAccept} />
      </div>

      <div className="my-4">
        <Button disabled={!isAccepted} onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </>
  );
}
