import { usePolkadotExtension } from '@substra-hooks/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Button } from '../../button/button';
import { Dropdown } from '../../dropdown/dropdown';

export function VerifyStep() {
  const { accounts, w3Enabled } = usePolkadotExtension();
  const router = useRouter();

  const handleChange = (value: string) => {};

  const accountOptions = accounts
    ? accounts.map((account) => ({
        label: `${account.meta.name} (${account.address})`,
        value: account.address,
      }))
    : [];

  const handleVerify = () => {};

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
      <p>
        We ask you to select the Kusama address you will use to fund your crowdloan contribution. The KSM you plan to
        use must be unlocked and transferable.
      </p>
      <p>
        We will ask you to sign a message to verify your ownership of the account. This message is not a transaction,
        and it doesn&apos;t cost any fees.
      </p>

      <div className="my-4">{accounts?.length && <Dropdown options={accountOptions} onChange={handleChange} />}</div>
      <div className="my-4">
        <Button onClick={handleVerify}>Verify account</Button>
      </div>
    </>
  );
}
