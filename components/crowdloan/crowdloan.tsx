import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { WalletProvider } from './wallet-provider';

import { IntroStep } from './steps/1-intro';
import { ExtensionStep } from './steps/2-extension';
import { ContributeStep } from './steps/4-contribute';
import { ConfirmationStep } from './steps/5-confirmation';

const VerifyStep = dynamic(() => import('./steps/3-verify'), { ssr: false });

export function Crowdloan() {
  const router = useRouter();
  const step = typeof router.query.step === 'string' ? parseInt(router.query.step) : 1;

  return (
    <WalletProvider>
      {step === 1 && <IntroStep />}
      {step === 2 && <ExtensionStep />}
      {step === 3 && <VerifyStep />}
      {step === 4 && <ContributeStep />}
      {step === 5 && <ConfirmationStep />}
    </WalletProvider>
  );
}
