import Head from 'next/head';

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
        <title>Kabocha Crowdloan App</title>
        <meta name="description" content="Kabocha Crowdloan App" />
        <link rel="icon" href="/icons/kabocha-small-32.png" />
      </Head>
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
