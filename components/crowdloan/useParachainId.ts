import { getCurrentApiProviderConfig } from '../../config';

export const useParachainId = () => {
  const { parachainId } = getCurrentApiProviderConfig();
  return parachainId;
};
