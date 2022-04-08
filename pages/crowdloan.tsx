import type { NextPage } from 'next';

import { Layout } from '../components/layout/layout';
import { Crowdloan } from '../components/crowdloan/crowdloan';

const CrowdloanPage: NextPage = () => {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-6xl font-bold my-8">Kabocha Crowdloan</h1>
        <Crowdloan />
      </div>
    </Layout>
  );
};

export default CrowdloanPage;
