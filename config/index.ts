export const KABOCHA_APP_NAME = 'Kabocha Crowdloan';

// Pop-Art Relay (Kabocha ID is 2007 for this network).
export const NETWORKS = {
  popart: 'popart',
  kusama: 'kusama',
};

type ApiProviderConfig = {
  id: string;
  parachainId: number;
  wsProviderUrl: string;
};

export const apiProviderConfig: Record<string, ApiProviderConfig> = {
  [NETWORKS.popart]: {
    id: NETWORKS.popart,
    parachainId: 2007,
    wsProviderUrl: 'wss://popart1.jelliedowl.com',
  },
  [NETWORKS.kusama]: {
    id: NETWORKS.kusama,
    parachainId: 2113,
    wsProviderUrl: 'wss://kusama-rpc.polkadot.io',
  },
};
