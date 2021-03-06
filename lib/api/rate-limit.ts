import LRU from 'lru-cache';
import type { NextApiResponse } from 'next';

type RateLimitOptions = {
  uniqueTokenPerInterval: number;
  interval: number;
};

const rateLimit = (options: RateLimitOptions) => {
  const tokenCache = new LRU({
    max: options.uniqueTokenPerInterval || 500,
    maxAge: options.interval || 60000,
  });

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise((resolve, reject) => {
        const tokenCount: number[] = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader('X-RateLimit-Limit', limit);
        res.setHeader('X-RateLimit-Remaining', isRateLimited ? 0 : limit - currentUsage);

        return isRateLimited ? reject() : resolve(true);
      }),
  };
};

export default rateLimit;
