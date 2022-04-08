import { createContext, useContext, useState } from 'react';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

type WalletContextProps = {
  account: InjectedAccountWithMeta | null;
  setAccount: (account: InjectedAccountWithMeta | null) => void;
};

const WalletContext = createContext<WalletContextProps>({} as WalletContextProps);

type WalletProviderProps = {
  children: React.ReactNode;
};

export function WalletProvider({ children }: WalletProviderProps) {
  const [account, setAccount] = useState<InjectedAccountWithMeta | null>(null);

  return (
    <WalletContext.Provider value={{ account, setAccount }}>{children}</WalletContext.Provider>
  );
}

export const useWallet = () => {
  return useContext(WalletContext);
};
