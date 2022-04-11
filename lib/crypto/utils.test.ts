import { describe, expect, it } from 'vitest';
import { getBigNumberAmount } from './utils';

describe('Utils', () => {
  describe('getBigNumberAmount', () => {
    it('converts the amount to a BigNumber', () => {
      const initialAmount = 1.99;
      const chainDecimals = 12; // KSM

      const bnAmount = getBigNumberAmount(initialAmount, chainDecimals);

      const expectedAmount = 1_990_000_000_000;
      expect(bnAmount).toEqual(expectedAmount);
    });
  });
});
