import { decodeAddress, signatureVerify } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';

export function isValidSignature(signedMessage: string, signature: string, address: string) {
  const publicKey = decodeAddress(address);
  const hexPublicKey = u8aToHex(publicKey);

  return signatureVerify(signedMessage, signature, hexPublicKey).isValid;
}
