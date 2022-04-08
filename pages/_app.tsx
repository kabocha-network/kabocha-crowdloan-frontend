import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import '../styles/globals.css';

const AppSubstraHooksProvider = dynamic(() => import('./../providers/substra-provider'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppSubstraHooksProvider>
      <Component {...pageProps} />
    </AppSubstraHooksProvider>
  );
}

export default MyApp;
