import { describe, expect, it } from 'vitest';
import { getAmountFromBigNumber, getBigNumberAmount } from './utils';

describe('Utils', () => {
  const chainDecimals = 12; // KSM

  describe('getBigNumberAmount', () => {
    it('converts the amount to a BigNumber', () => {
      const initialAmount = 1.99;

      const bnAmount = getBigNumberAmount(initialAmount, chainDecimals);

      const expectedAmount = 1_990_000_000_000;
      expect(bnAmount).toEqual(expectedAmount);
    });
  });

  describe('getAmountFromBigNumber', () => {
    it('converts the amount from a BigNumber', () => {
      const initialAmount = 1_990_000_000_000;

      const amount = getAmountFromBigNumber(initialAmount, chainDecimals);

      const expectedAmount = 1.99;
      expect(amount).toEqual(expectedAmount);
    });

    it('converts string amount from a big number', () => {
      const initialAmount = '0x00000000000000000058d15e17628000'; // 25k

      const amount = getAmountFromBigNumber(initialAmount, chainDecimals);

      const expectedAmount = 25_000;
      expect(amount).toEqual(expectedAmount);
    });
  });
});
