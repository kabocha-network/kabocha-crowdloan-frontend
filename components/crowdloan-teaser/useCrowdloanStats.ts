import { useEffect, useState } from 'react';
import { getAmountFromBigNumber, getApi } from '../../lib/crypto/utils';

import { useCrowdloanTimer } from './useCrowdloanTimer';
import { getCurrentApiProviderConfig } from '../../config';

const DEFAULT_CAP = 25_000;

type CrowdloanData = {
  raised: string | number;
  cap: string | string;
};

type CrowdloanStats = {
  currentAmount: number;
  cap: number;
};

export const useCrowdloanStats = () => {
  const [isReady, setIsReady] = useState(false);
  const [stats, setStats] = useState<CrowdloanStats>({ currentAmount: 0, cap: DEFAULT_CAP });
  const { remainingTimeText, remainingAuctionText } = useCrowdloanTimer(isReady);

  useEffect(() => {
    const config = getCurrentApiProviderConfig();
    async function fetchData() {
      const api = await getApi();

      const [decimals] = api.registry.chainDecimals;
      const info = await api.query.crowdloan.funds(config.parachainId);

      const parsedInfo = info.toJSON() as CrowdloanData;
      setStats({
        currentAmount: getAmountFromBigNumber(parsedInfo.raised, decimals),
        cap: getAmountFromBigNumber(parsedInfo.cap, decimals),
      });
      setIsReady(true);
    }

    fetchData();
  }, []);

  const progress = (stats.currentAmount / stats.cap) * 100;

  const formatter = new Intl.NumberFormat();

  return {
    isReady,
    progress,
    currentAmount: formatter.format(stats.currentAmount),
    cap: formatter.format(stats.cap),
    auctionTime: remainingAuctionText,
    crowdloanTime: remainingTimeText,
  };
};
