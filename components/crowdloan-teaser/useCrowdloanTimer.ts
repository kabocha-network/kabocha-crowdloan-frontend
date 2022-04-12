import { useState, useEffect } from 'react';

const CROWDLOAN_END_DATE = new Date('2022-06-16T22:00:00.000Z');
const PARACHAIN_AUCTION_DATE = new Date('2022-04-17T18:26:00.000Z');

const getRemainingTime = (toDate: Date): number => {
  const now = new Date();
  const diff = toDate.getTime() - now.getTime();
  return diff > 0 ? diff : 0;
};

const formatDuration = (duration: number): string => {
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days} days ${hours} hours and ${minutes} minutes`;
  } else if (hours > 0) {
    return `${hours} hours and ${minutes} minutes`;
  } else if (minutes > 0) {
    return `${minutes} minutes`;
  } else {
    return 'Ended!';
  }
};

export const useCrowdloanTimer = (live: boolean) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(CROWDLOAN_END_DATE));
  const remainingAuctionTime = getRemainingTime(PARACHAIN_AUCTION_DATE);

  useEffect(() => {
    if (!live) {
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(CROWDLOAN_END_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, [live]);

  if (!live) {
    return {
      remainingTime: Infinity,
      remainingTimeText: 'Coming soon...',
    };
  }

  return {
    remainingTime,
    remainingTimeText: remainingTime ? formatDuration(remainingTime) : '0',
    remainingAuctionText: remainingAuctionTime ? formatDuration(remainingAuctionTime) : '0',
  };
};
