import { createContext, useContext, useState } from 'react'
import dynamic from 'next/dynamic';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'

const AppSubstraHooksProvider = dynamic(() => import('./../../providers/substra-provider'), {
  ssr: false,
});

type WalletContextProps = {
  account: InjectedAccountWithMeta | null,
  setAccount: (account: InjectedAccountWithMeta | null) => void,
}

const WalletContext = createContext<WalletContextProps>({} as WalletContextProps);

type WalletProviderProps = {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [account, setAccount] = useState<InjectedAccountWithMeta | null>(null);

  return (
    <AppSubstraHooksProvider>
      <WalletContext.Provider value={{ account, setAccount }}>
        {children}
      </WalletContext.Provider>
    </AppSubstraHooksProvider>
  )
}

export const useWallet = () => {
  return useContext(WalletContext);
}
