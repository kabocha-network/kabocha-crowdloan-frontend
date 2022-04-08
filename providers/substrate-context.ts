import { useContext } from 'react';

import { SubstrateContext } from './substrate-provider';

export const useSubstrate = () => {
  const context = useContext(SubstrateContext);

  if (context === null) {
    throw new Error('useSubstrate must be used within a SubstrateProvider');
  }

  return context;
};
