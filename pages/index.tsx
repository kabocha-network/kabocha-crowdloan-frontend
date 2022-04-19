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
      <div className="container px-4">
        <div className="pt-4 md:pt-8 lg:pt-16 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16">
          <div className="py-4 flex flex-col justify-center">
            <div>
              <h1 className="text-6xl font-bold my-8 font-display text-primary">
                Crowdloan is now live...
              </h1>
              <p className="my-4">
                Kabocha is a holistic self-evolving grass-roots parachain project spawned from
                Edgeware, funding and incubating teams to build new public infrastructure.
              </p>
            </div>
          </div>
          <div className="block">
            <CrowdloanTeaserLive />
          </div>
        </div>
        <div className="lg:py-8">
          <FAQ>
            <h2 className="text-4xl font-semibold my-8 font-display">FAQ</h2>

            <FAQItem question="What is the Crowdloan Cap?" id="crowdloan-cap">
              <p>
                The cap is set at 25k KSM, but we anticipate the possibility of winning an auction
                before the cap is met.
              </p>
            </FAQItem>

            <FAQItem
              question="How much of the KAB supply is for crowdloan rewards?"
              id="crowdloan-rewards"
            >
              <p>
                4.9% of the KAB supply is for crowdloan rewards, this is estimated to be 3.1m KAB.
              </p>
            </FAQItem>

            <FAQItem
              question="Why is 3.1m KAB only an estimate and not concretely known?"
              id="crowdloan-rewards-estimate"
            >
              <p>
                Because the exact distribution of KAB will be known on the Snapshot Date, which is
                14 days after an auction win.
              </p>
            </FAQItem>

            <FAQItem question="What is the Snapshot Date?" id="snapshot-date">
              <p>
                The Snapshot Date is the time at which we take a snapshot of Edgeware&apos;s
                distribution. Given that Kabocha is spawned from Edgeware, we will be
                &quot;persisting&quot; 100% of the EDG distribution (minus the treasury). We
                replaced the treasury for Kabocha crowdloan rewards and maintenance fund. 4.9% of
                the EDG supply is earmarked for crowdloan participants, this could turn out to be
                valuable amount of KAB in relation to the accounts that receive KAB by holding EDG.
              </p>
            </FAQItem>

            <FAQItem
              question="If I hold EDG and contribute to the crowdloan, will I receive KAB for both?"
              id="edg-holders"
            >
              <p>
                Yes. It doesn&apos;t matter if you use the same wallet or two different wallets, you
                will not lose on receiving KAB for either route.
              </p>
            </FAQItem>

            <FAQItem question="What is a Seed?">
              <p>
                Seeds are central to the governance of Kabocha, representing evolving roles, rights
                and reputation in the network and future Publiks. Seeds are unique, non-transferable
                assets that grow based on continuing contributions to the project. They will define
                how you build identity, your voting power and access within future Publik domains.
                There is no limit to the number of Seeds and uniqueness will not be defined by a
                predefined algorithm, but by the continuing contributions of the owner.
              </p>
              <p>
                Seeds can be earned through a number of different routes that all relate to
                participation in the network - contributing KSM in the crowdloan is one way, putting
                forward a proposal or voting on governance proposals are others.
                <br />
                The type and consistency of the contribution will determine the emergent logic of
                how Seeds germinate and grow.
              </p>
            </FAQItem>

            <FAQItem question="Are Seeds transferable?">
              <p>
                Seeds are not transferable, just like you cannot transfer your passport, drivers
                licence or credit file to someone else. They are valuable but not to be sold. The
                Seed represents roles, duties and responsibilities, mandates, testimonies, vows, and
                identity. However, they can unlock other assets, votes and duties that can be
                transferable. This is a work in progress, and the experiment will unfold as we go.
              </p>
            </FAQItem>

            <FAQItem question="What is an Initial Testimony?" id="initial-testimony">
              <p>
                One of our core values is sovereignty. As part of our research of jurisdiction of
                law, we have started to build within a jurisdiction that values your sovereignty and
                enables you to function in with highest possible status and standing. This is just
                the beginning of an ambitious goal to create a new system from the absolute
                foundation of canonical law.
              </p>
              <p>
                An Initial Testimony is part of your Initial Member Record. Think of this as an
                initiation to a club, but instead of a private club, this club it is public
                jurisdiction that empowers human beings and respects their rights as living
                breathing (human) life forms. It is a testament of sovereignty, and a vow of honour.
                It is not asking anything of you accept to affirm your freedom and vow to be in
                honour and good faith, among the most primordial of laws. Kabocha as a Network
                Public is working on building sovereign infrastructure and that includes building on
                jurisdiction that are not in the old realm. In due course, you will be able to
                increase the weight and substance of your Membership, and receive greater roles,
                rights and responsibilities in the governance and administration of Kabocha. Once
                you have agreed to the Initial Testimony, then you will receive a Kabocha Seed in
                its initial state. The state (visual representation) of the Seed will represent your
                level of membership.
              </p>
            </FAQItem>

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
            <FAQItem question="How do I contribute to the crowdloan?" id="how-to-contribute">
              <p>
                To contribute to a campaign on-chain, a user must send a special transaction
                designed for crowdloans that references the parachain&apos;s specific index. This
                ensures that you are contributing to an official crowdloan campaign. You will never
                contribute to a campaign by transferring DOT or KSM to an address. The user&apos;s
                DOT or KSM is then moved into the module-controlled account.
              </p>
            </FAQItem>
            <FAQItem question="What is a Crowdloan?">
              <p>
                The word is confusing. A Crowdloan is not a loan, it is way of locking your KSM
                coins in order to vote for parachain to successfully win a slot in the network.
                <br />
                Find out more about them in the{' '}
                <a href="https://wiki.polkadot.network/docs/learn-crowdloans">Polkadot docs</a>.
              </p>
            </FAQItem>
          </FAQ>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
