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
      <div>
        <LayoutHeader />
        <LayoutMain>{props.children}</LayoutMain>
        <LayoutFooter />
      </div>
    </>
  );
}
