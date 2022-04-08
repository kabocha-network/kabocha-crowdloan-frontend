import { SubstrateProvider } from '../../providers/substrate-provider';
import { CrowdloanWizard } from './crowdloan-wizard';

export type ContributionState = {
  address: string;
  amount: string;
  tx: string;
};

export function Crowdloan() {
  return (
    <SubstrateProvider>
      <CrowdloanWizard />
    </SubstrateProvider>
  );
}

export default Crowdloan;
