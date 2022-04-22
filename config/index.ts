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

const apiProviderConfig: Record<string, ApiProviderConfig> = {
  [NETWORKS.popart]: {
    id: NETWORKS.popart,
    parachainId: 2000,
    wsProviderUrl: 'wss://popart1.jelliedowl.com',
  },
  [NETWORKS.kusama]: {
    id: NETWORKS.kusama,
    parachainId: 2113,
    wsProviderUrl: 'wss://kusama-rpc.polkadot.io',
  },
};

// try to determine config based on current url
export const getCurrentApiProviderConfig = (): ApiProviderConfig => {
  if (typeof window !== 'undefined') {
    if (
      window.location.hostname.match(/kabocha.network/) ||
      window.location.search.match(/network=kusama/)
    ) {
      return apiProviderConfig.kusama;
    }
  }

  return apiProviderConfig.popart;
};
