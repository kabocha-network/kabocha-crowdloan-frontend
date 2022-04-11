import { useState, useEffect } from 'react';

const CROWDLOAN_END_DATE = new Date('2022-06-16T22:00:00.000Z');

const getRemainingTime = (): number => {
  const now = new Date();
  const diff = CROWDLOAN_END_DATE.getTime() - now.getTime();
  return diff > 0 ? diff : 0;
};

const formatDuration = (duration: number): string => {
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  return `${days} days ${hours} hours and ${minutes} minutes`;
};

export const useCrowdloanTimer = (live: boolean) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    if (!live) {
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
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
  };
};
