import { ReactNode } from 'react';
import { SubstraHooksProvider } from '@substra-hooks/core';

const NETWORKS = {
  kusama: 'kusama',
};

type ApiProviderConfig = {
  id: string;
  wsProviderUrl: string;
};

const apiProviderConfig: Record<string, ApiProviderConfig> = {
  [NETWORKS.kusama]: {
    id: NETWORKS.kusama,
    wsProviderUrl: 'wss://kusama-rpc.polkadot.io',
  },
};

type SubstraHooksProviderProps = {
  // apiProviderConfig: Record<string, ApiProviderConfig>;
  children: ReactNode;
};

function AppSubstraHooksProvider(props: SubstraHooksProviderProps) {
  const { children } = props;

  return (
    <SubstraHooksProvider apiProviderConfig={apiProviderConfig} defaultApiProviderId={NETWORKS.kusama}>
      {children}
    </SubstraHooksProvider>
  );
}

export default AppSubstraHooksProvider;
