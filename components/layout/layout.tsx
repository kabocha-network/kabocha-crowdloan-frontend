import Head from 'next/head';
import Script from 'next/script';

import { LayoutFooter } from './layout-footer';
import { LayoutHeader } from './layout-header';
import { LayoutMain } from './layout-main';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Kabocha Crowdloan | Playground of possibilities</title>
        <meta
          name="description"
          content="Contribute KSM to participate in the Kabocha crowdloan, you can gain Kabocha Seeds (NFTs) based on how much KSM you contribute."
        />
        <link rel="icon" href="/icons/kabocha-small-32.png" />
      </Head>
      {process.env.NODE_ENV && (
        <Script
          data-domain="crowdloan.kabocha.network"
          src="https://plausible.io/js/plausible.js"
        />
      )}
      <div className="flex flex-col min-h-screen">
        <div>
          <LayoutHeader />
        </div>
        <div className="flex-grow">
          <LayoutMain>{props.children}</LayoutMain>
        </div>
        <div>
          <LayoutFooter />
        </div>
      </div>
    </>
  );
}
