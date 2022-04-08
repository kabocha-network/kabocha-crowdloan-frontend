import type { NextPage } from 'next';

import { Button } from '../components/button/button';
import { Layout } from '../components/layout/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-6xl font-bold my-8">
          Welcome to <a href="https://kabocha.network">Kabocha!</a>
        </h1>
        <p className="text-xl max-w-4xl">
          Kabocha is a holistic self-evolving community parachain project spawned from Edgeware, accelerating founders,
          creators and teams building new public infrastructure.
        </p>
        <div className="my-4">
          <Button href="/crowdloan">Contribute</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
