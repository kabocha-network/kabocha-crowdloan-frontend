import { Button } from '../../button/button';
import { Dropdown } from '../../dropdown/dropdown';
import { Link } from '../../link/link';

import { signMessage } from '../../../lib/crypto/utils';
import { useSubstrate } from '../../../providers/substrate-context';

const defaultOptions = {
  label: '--- Select your account ---',
  value: '',
};

const MESSAGE = 'I am signing this message to prove that I am a human.';

type VerifyStepProps = {
  onStepComplete: () => void;
};

export function VerifyStep({ onStepComplete }: VerifyStepProps) {
  const { accounts, currentAccount, setCurrentAccount } = useSubstrate();

  const handleChange = (value: string) => {
    const account = accounts?.find((a) => a.address === value);
    if (account) {
      setCurrentAccount(account);
    } else {
      setCurrentAccount(null);
    }
  };

  const accountOptions = [
    defaultOptions,
    ...accounts.map((account) => ({
      label: `${account.meta.name} (${account.address})`,
      value: account.address,
    })),
  ];

  const handleVerify = async () => {
    if (!currentAccount) {
      return;
    }

    try {
      const message = await signMessage(MESSAGE, currentAccount);
      if (message) {
        onStepComplete();
      }
    } catch (e) {
      console.error('Error signing message', e);
    }
  };

  return (
    <>
      <div className="prose">
        <h2 className="font-display">Step 3: Choose and verify account</h2>
        <p>
          We ask you to select the <Link href="https://kusama.network/">Kusama</Link> address you
          will use to fund your crowdloan contribution. The KSM you plan to use must be unlocked and
          transferable.
        </p>
        <p>
          We will ask you to sign a message to verify your ownership of the account.
          <br />
          This message is not a transaction, and it doesn&apos;t cost any fees.
        </p>
      </div>
      <div className="my-8 max-w-3xl">
        <div className="rounded bg-gray-50 p-6">
          <div className="my-2">Available accounts:</div>
          {accounts?.length ? (
            <Dropdown
              options={accountOptions}
              onChange={handleChange}
              defaultValue={accountOptions[0].value}
            />
          ) : (
            <div className="text-sm text-gray-600">No accounts available!</div>
          )}
        </div>
      </div>
      <div className="my-8">
        <Button onClick={handleVerify} disabled={!currentAccount}>
          Verify account
        </Button>
      </div>
    </>
  );
}
