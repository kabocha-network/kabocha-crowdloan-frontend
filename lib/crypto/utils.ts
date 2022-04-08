import { decodeAddress, signatureVerify } from '@polkadot/util-crypto';
import { u8aToHex, stringToHex } from '@polkadot/util';
import { web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ApiPromise, WsProvider } from '@polkadot/api';

import BN from 'bn.js';

import { apiProviderConfig } from '../../config';

let api: ApiPromise;

export async function getApi() {
  const wsProvider = new WsProvider(apiProviderConfig.popart.wsProviderUrl);
  if (!api) {
    api = await ApiPromise.create({ provider: wsProvider });
  }

  return api;
}

export function isValidSignature(signedMessage: string, signature: string, address: string) {
  const publicKey = decodeAddress(address);
  const hexPublicKey = u8aToHex(publicKey);

  return signatureVerify(signedMessage, signature, hexPublicKey).isValid;
}

export async function signMessage(message: string, currentAccount: InjectedAccountWithMeta) {
  const injector = await web3FromSource(currentAccount.meta.source);
  const signRaw = injector?.signer?.signRaw;

  try {
    if (!!signRaw) {
      const { signature } = await signRaw({
        address: currentAccount.address,
        data: stringToHex(message),
        type: 'bytes',
      });

      const verification = isValidSignature(message, signature, currentAccount.address);

      if (verification) {
        return signature;
      } else {
        throw new Error('Error while verifying message signature!');
      }
    } else {
      throw new Error('Error while signing message!');
    }
  } finally {
    return null;
  }
}

type EXtrinsicResult = {
  isSuccess: boolean;
  hash: string;
  errorMessage?: string;
};

export async function getSignedApi(currentAccount: InjectedAccountWithMeta) {
  const api = await getApi();
  const injector = await web3FromSource(currentAccount.meta.source);
  api.setSigner(injector.signer);

  return api;
}

export const getBigNumberAmount = (amount: number, chainDecimals: number[]) => {
  const decims = new BN(chainDecimals);
  const factor = new BN(10).pow(decims);
  const bnAmount = new BN(amount).mul(factor);

  return bnAmount;
};
