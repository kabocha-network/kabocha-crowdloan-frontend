import { decodeAddress, signatureVerify } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';
import { web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { stringToHex } from '@polkadot/util';
import keyring from '@polkadot/ui-keyring';

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
        type: 'bytes'
      });

      const verification = isValidSignature(message, signature, currentAccount.address);

      if (verification) {
        return signature;
      } else {
        throw new Error('Error while verifying message signature!')
      }
    } else {
      throw new Error('Error while signing message!')
    }
  } finally {
    return null
  }
}
