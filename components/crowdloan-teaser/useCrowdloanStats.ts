import { useEffect, useState } from 'react';
import { getApi } from '../../lib/crypto/utils';

import type { Option, StorageKey } from '@polkadot/types';
import type { AccountId, BalanceOf, BlockNumber, ParaId } from '@polkadot/types/interfaces';

const fundOpts = {
  transform: (keys: StorageKey<[ParaId]>[]): ParaId[] => keys.map(({ args: [paraId] }) => paraId),
};

export const useCrowdloanStats = () => {
  const [isReady, setIsReady] = useState(false);
  const currentAmount = 0;
  const totalAmount = 1000;
  const progress = (currentAmount / totalAmount) * 100;
  const remainingTime = "When we're done... ;-)";

  useEffect(() => {
    async function fetchData() {
      const api = await getApi();
      console.log('Api initialized');
      setIsReady(true);
    }

    fetchData();
  }, []);

  return {
    isReady,
    progress,
    currentAmount,
    totalAmount,
    remainingTime,
  };
};
