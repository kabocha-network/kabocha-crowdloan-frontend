import type { NextPage } from 'next';

import { Layout } from '../components/layout/layout';
import { FAQ, FAQItem } from '../components/faq/faq';
import { CrowdloanTeaserLoader } from '../components/crowdloan-teaser/crowdloan-teaser-loader';
import dynamic from 'next/dynamic';

const CrowdloanTeaserLive = dynamic(
  () => import('../components/crowdloan-teaser/crowdloan-teaser'),
  {
    ssr: false,
    loading: () => <CrowdloanTeaserLoader />,
  }
);

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container max-w-7xl mx-8 md:mx-auto px-2">
        <div className="pt-16 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:py-16">
            <h1 className="text-6xl font-bold my-8">Kabocha Crowdloan</h1>
            <p className="text-xl my-4">
              Kabocha is a holistic self-evolving community parachain project spawned from Edgeware,
              accelerating founders, creators and teams building new public infrastructure.
            </p>
            <p className="text-xl my-4">
              Contribute KSM to participate in the Kabocha crowdloan, you can gain Kabocha Seeds
              (NFTs) based on how much KSM you contribute. You can also gain some KAB based on
              holding EDG.
            </p>
          </div>
          <div className="hidden md:block lg:py-16">
            <div>
              <CrowdloanTeaserLive />
            </div>
          </div>
        </div>
        <div className="lg:py-8">
          <FAQ>
            <h2 className="text-4xl font-semibold my-8">FAQ</h2>
            <FAQItem question="What is Kabocha?">
              <p>
                Kabocha is a holistic self-evolving community parachain project spawned from
                Edgeware, accelerating founders, creators and teams building new public
                infrastructure. A decentralised community experiencing itself.
                <br />
                We&apos;re creating a different reality, a new way of collaborating and sharing
                value.
              </p>
            </FAQItem>
            <FAQItem question="How do I contribute to the crowdloan?">
              <p>
                To contribute to a campaign on-chain, a user must send a special transaction
                designed for crowdloans that references the parachain&apos;s specific index. This
                ensures that you are contributing to an official crowdloan campaign. You will never
                contribute to a campaign by transferring DOT or KSM to an address. The user&apos;s
                DOT or KSM is then moved into the module-controlled account.
              </p>
            </FAQItem>
          </FAQ>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
