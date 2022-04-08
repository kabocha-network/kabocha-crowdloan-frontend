import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePolkadotExtension } from '@substra-hooks/core';

import { Button } from '../../button/button';
import { Link } from '../../link/link';

export function ExtensionStep() {
  const { w3enable, w3Enabled } = usePolkadotExtension();
  const router = useRouter();

  useEffect(() => {
    if (w3Enabled) {
      router.push({
        pathname: '/crowdloan',
        query: { step: 3 },
      });
    }
  }, [router, w3Enabled]);

  const activateExtension = () => {
    if (!w3Enabled) {
      w3enable();
    } else {
      console.log('Extension is already activated');
    }
  };

  return (
    <>
      <div className="prose prose-xl">
        <h2>Step 2: Allow browser extension</h2>
        <p>
          In order to process the crowdloan submission, this application needs to communicate with the{' '}
          <Link href="https://polkadot.js.org/extension/">{'Polkadot{.js}'}</Link> extension in your browser.
        </p>
        <p>
          This step only allows the Kabocha application to connect with the extension.<br />
          You will still have the ability to sign or cancel any transactions.
        </p>
      </div>

      <div className="my-8">
        {w3Enabled ? (
          <p>{'Your wallet is connected!'}</p>
        ) : (
          <Button onClick={activateExtension}>Connect with {'Polkadot{.js}'}</Button>
        )}
      </div>
    </>
  );
}
