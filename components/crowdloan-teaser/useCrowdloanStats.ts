import { useEffect, useState } from 'react';
import { getApi } from '../../lib/crypto/utils';

import type { Option, StorageKey } from '@polkadot/types';
import type { AccountId, BalanceOf, BlockNumber, ParaId } from '@polkadot/types/interfaces';
import { useCrowdloanTimer } from './useCrowdloanTimer';

const fundOpts = {
  transform: (keys: StorageKey<[ParaId]>[]): ParaId[] => keys.map(({ args: [paraId] }) => paraId),
};

export const useCrowdloanStats = () => {
  const [isReady, setIsReady] = useState(false);
  const { remainingTimeText } = useCrowdloanTimer(isReady);

  const currentAmount = 0;
  const totalAmount = 25000;
  const progress = (currentAmount / totalAmount) * 100;

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
    remainingTime: remainingTimeText,
  };
};
