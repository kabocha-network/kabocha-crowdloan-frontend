import { useEffect } from 'react';

import { useSubstrate } from '../../../providers/substrate-context';

import { Button } from '../../button/button';
import { Link } from '../../link/link';
import { useCrowdloan } from '../useCrowdloan';

export function ExtensionStep() {
  const { web3enable, web3enabled } = useSubstrate();
  const { setNextStep } = useCrowdloan();

  useEffect(() => {
    if (web3enabled) {
      setNextStep();
    }
  }, [web3enabled, setNextStep]);

  const activateExtension = async () => {
    if (!web3enabled) {
      console.log('Activating Polkadot{.js} extension');
      await web3enable();
    } else {
      console.log('Polkadot{.js} extension is already activated. Skipping to next step.');
    }
  };

  return (
    <>
      <div className="prose">
        <h2 className="font-display">Step 2: Allow browser extension</h2>
        <p>
          In order to process the crowdloan submission, this application needs to communicate with
          the <Link href="https://polkadot.js.org/extension/">{'Polkadot{.js}'}</Link> extension in
          your browser.
        </p>
        <p>
          This step only allows the Kabocha application to connect with the extension.
          <br />
          You will still have the ability to sign or cancel any transactions.
        </p>
      </div>

      <div className="my-8">
        {web3enabled ? (
          <p>{'Your wallet is connected!'}</p>
        ) : (
          <Button onClick={activateExtension}>Connect with {'Polkadot{.js}'}</Button>
        )}
      </div>
    </>
  );
}
