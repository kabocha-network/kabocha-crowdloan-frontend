import { useApiProvider, usePolkadotExtension } from '@substra-hooks/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Button } from '../../button/button';
import { Dropdown } from '../../dropdown/dropdown';
import { Link } from '../../link/link';

import { useWallet } from '../wallet-provider';
import { signMessage } from '../../../crypto/utils';

const defaultOptions = {
  label: "--- Select your account ---",
  value: "",
}

const MESSAGE = 'I am signing this message to prove that I am a human.';

export default function VerifyStep() {
  const router = useRouter();
  const { accounts, w3Enabled } = usePolkadotExtension();
  const { account, setAccount } = useWallet()

  const handleChange = (value: string) => {
    const account = accounts?.find(a => a.address === value) || null
    setAccount(account)
  };

  const accountOptions = accounts
    ? [defaultOptions, ...accounts.map((account) => ({
        label: `${account.meta.name} (${account.address})`,
        value: account.address,
      }))]
    : [];

  const handleVerify = async () => {
    if (!account) {
      return
    }

    try {
      // TODO: uncomment when ready ;-)
      // await signMessage(MESSAGE, account)
      router.push('/crowdloan/?step=4')
    } catch (e) {
      console.error('Error signing message', e)
    }
  };

  useEffect(() => {
    if (!w3Enabled) {
      router.push({
        pathname: '/crowdloan',
        query: { step: 1 },
      });
    }
  }, [router, w3Enabled]);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">Step 3: Choose and verify account</h2>
      <p className="max-w-2xl mb-2">
        We ask you to select the <Link href="https://kusama.network/">Kusama</Link> address you will use to fund your crowdloan contribution.
        The KSM you plan to use must be unlocked and transferable.
      </p>
      <p className="max-w-2xl mb-2">
        We will ask you to sign a message to verify your ownership of the account.
        This message is not a transaction, and it doesn&apos;t cost any fees.
      </p>

      <div className="my-4 max-w-4xl">
        {accounts?.length && <Dropdown options={accountOptions} onChange={handleChange} />}
      </div>
      <div className="my-4">
        <Button onClick={handleVerify} disabled={!account}>Verify account</Button>
      </div>
    </>
  );
}
