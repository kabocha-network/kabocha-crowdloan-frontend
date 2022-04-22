import { createContext, useState } from 'react';

export type ContributionState = {
  address: string;
  amount: number;
  tx: string;
};

type ContributionActionProgress = 'initial' | 'loading' | 'completed' | 'error';
type CrowdloanWizardStep = 'intro' | 'extension' | 'verify' | 'contribute' | 'success';

type CrowdloanContextProps = {
  contributionState: ContributionState | null;
  setContributionState: (state: ContributionState | null) => void;
  contributionError: string | null;
  setContributionError: (error: string | null) => void;
  crowdloanWizardStep: CrowdloanWizardStep;
  setCrowdloanWizardStep: (step: CrowdloanWizardStep) => void;
  contributionActionProgress: ContributionActionProgress;
  setContributionActionProgress: (progress: ContributionActionProgress) => void;
  tx: string | null;
  setTx: (tx: string | null) => void;
};

export const CrowdloanContext = createContext<CrowdloanContextProps>({} as CrowdloanContextProps);

type CrowdloanContextProviderProps = {
  children: React.ReactNode;
};

export const CrowdloanContextProvider = ({ children }: CrowdloanContextProviderProps) => {
  const [contributionActionProgress, setContributionActionProgress] =
    useState<ContributionActionProgress>('initial');
  const [crowdloanWizardStep, setCrowdloanWizardStep] = useState<CrowdloanWizardStep>('intro');
  const [tx, setTx] = useState<string | null>(null);
  const [contributionState, setContributionState] = useState<ContributionState | null>(null);
  const [contributionError, setContributionError] = useState<string | null>(null);

  const context: CrowdloanContextProps = {
    contributionState,
    setContributionState,
    contributionError,
    setContributionError,
    crowdloanWizardStep,
    setCrowdloanWizardStep,
    contributionActionProgress,
    setContributionActionProgress,
    tx,
    setTx,
  };

  return <CrowdloanContext.Provider value={context}>{children}</CrowdloanContext.Provider>;
};
