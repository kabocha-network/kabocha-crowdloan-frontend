import { SubstrateProvider } from '../../providers/substrate-provider';
import { CrowdloanWizard } from './crowdloan-wizard';
import { CrowdloanContextProvider } from './crowdloanProvider';

export function Crowdloan() {
  return (
    <SubstrateProvider>
      <CrowdloanContextProvider>
        <CrowdloanWizard />
      </CrowdloanContextProvider>
    </SubstrateProvider>
  );
}

export default Crowdloan;
