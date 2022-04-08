import { useState } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// import { WalletProvider } from './wallet-provider';

const SubstrateProvider = dynamic(() => import('../../providers/substrate-provider'), {
  ssr: false,
});

const IntroStep = dynamic(() => import('./steps/1-intro'), { ssr: false });
const ExtensionStep = dynamic(() => import('./steps/2-extension'), { ssr: false });
const VerifyStep = dynamic(() => import('./steps/3-verify'), { ssr: false });
const ContributeStep = dynamic(() => import('./steps/4-contribute'), { ssr: false });
const ConfirmationStep = dynamic(() => import('./steps/5-confirmation'), { ssr: false });

export type ContributionState = {
  address: string;
  amount: string;
  tx: string;
};

export function Crowdloan() {
  const router = useRouter();
  const step = typeof router.query.step === 'string' ? parseInt(router.query.step) : 1;

  const [contributionState, setContributionState] = useState<ContributionState | null>(null);

  return (
    <SubstrateProvider>
      {step === 1 && <IntroStep />}
      {step === 2 && <ExtensionStep />}
      {step === 3 && <VerifyStep />}
      {step === 4 && <ContributeStep onContribute={setContributionState} />}
      {step === 5 && <ConfirmationStep contributionState={contributionState} />}
    </SubstrateProvider>
  );
}
