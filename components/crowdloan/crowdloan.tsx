import { useRouter } from 'next/router';

import { IntroStep } from './steps/1-intro';
import { ExtensionStep } from './steps/2-extension';
import { VerifyStep } from './steps/3-verify';

export function Crowdloan() {
  const router = useRouter();
  const step = typeof router.query.step === 'string' ? parseInt(router.query.step) : 1;

  return (
    <>
      {step === 1 && <IntroStep />}
      {step === 2 && <ExtensionStep />}
      {step === 3 && <VerifyStep />}
    </>
  );
}
