import { SubstrateProvider } from '../../providers/substrate-provider';

import { IntroStep } from './steps/1-intro';
import { ExtensionStep } from './steps/2-extension';
import { VerifyStep } from './steps/3-verify';
import { ContributeStep } from './steps/4-contribute';
import { ConfirmationStep } from './steps/5-confirmation';
import { useCrowdloan } from './useCrowdloan';

export function CrowdloanWizard() {
  const { step, setNextStep } = useCrowdloan();

  return (
    <SubstrateProvider>
      {step === 'intro' && <IntroStep onStepComplete={setNextStep} />}
      {step === 'extension' && <ExtensionStep onStepComplete={setNextStep} />}
      {step === 'verify' && <VerifyStep onStepComplete={setNextStep} />}
      {step === 'contribute' && <ContributeStep onStepComplete={setNextStep} />}
      {step === 'success' && <ConfirmationStep />}
    </SubstrateProvider>
  );
}
