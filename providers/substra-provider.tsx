import { ReactNode } from 'react';
import { SubstraHooksProvider } from '@substra-hooks/core';

// Pop-Art Relay (Kabocha ID is 2007 for this network).

const NETWORKS = {
  westend: 'westend',
  kusama: 'kusama',
};

type ApiProviderConfig = {
  id: string;
  wsProviderUrl: string;
};

const apiProviderConfig: Record<string, ApiProviderConfig> = {
  [NETWORKS.westend]: {
    id: 'westend',
    wsProviderUrl: 'wss://westend-rpc.polkadot.io',
  },
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
    <SubstraHooksProvider apiProviderConfig={apiProviderConfig} defaultApiProviderId={NETWORKS.westend}>
      {children}
    </SubstraHooksProvider>
  );
}

export default AppSubstraHooksProvider;
