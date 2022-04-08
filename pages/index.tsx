import type { NextPage } from 'next';

import { Layout } from '../components/layout/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold my-4">
        Welcome to <a href="https://kabocha.network">Kabocha!</a>
      </h1>

      <p>Get started by connecting your wallet.</p>
    </Layout>
  );
};

export default Home;
