import { usePolkadotExtension } from '@substra-hooks/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Button } from '../../button/button';

export function ExtensionStep() {
  const { accounts, w3enable, w3Enabled } = usePolkadotExtension();
  const router = useRouter();

  const activateExtension = () => {
    if (!w3Enabled) {
      w3enable();
    } else {
      console.log('Extension is already activated');
    }
  };

  useEffect(() => {
    if (w3Enabled) {
      router.push({
        pathname: '/crowdloan',
        query: { step: 3 },
      });
    }
  }, [router, w3Enabled]);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">Step 2: Allow browser extension</h2>
      <p>
        In order to sign the terms and conditions, this application needs access to the{' '}
        <a href="https://polkadot.js.org/extension/">{'Polkadot{.js}'}</a> extension in your browser.
        <br />
        This step only allows the Kabocha application to connect with the browser extension. You will still have the
        ability to sign or cancel any transactions.
      </p>

      <div className="my-4">
        {w3Enabled ? (
          <p>{'Your wallet is connected!'}</p>
        ) : (
          <Button onClick={activateExtension}>Connect with {'Polkadot{.js}'}</Button>
        )}
      </div>
    </>
  );
}
