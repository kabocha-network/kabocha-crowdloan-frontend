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
              <h1 className="text-6xl font-bold my-8">Crowdloan is now live...</h1>
               <p className="text-xl my-4">
                 
                
                
                Kabocha is a holistic self-evolving grass-roots parachain project spawned from
                Edgeware, funding and incubating teams to build new public infrastructure.<br></br>
                Contribute KSM to gain KAB<br></br>

                
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div>
              <CrowdloanTeaserLive />
            </div>
          </div>
        </div>
        <div className="lg:py-8">
          <FAQ>
            <h2 className="text-4xl font-semibold my-8">FAQ</h2>

            
            <FAQItem question="What is the Crowdloan Cap?">
              <p>
                The cap is set at 25k KSM, but we anticipate the possibility of winning an auction
                before the cap is met, so be an early contributor to avoid disappointment!
               
              </p>
            </FAQItem>

            <FAQItem question="How much of the KAB supply is for crowdloan rewards?">
              <p>
                4.9% of the KAB supply is for crowdloan rewards, this is estimated to be 3.1m KAB.
              </p>
            </FAQItem>

            <FAQItem question="Why is 3.1m KAB only an estimate and not concretely known?">
              <p>
                Because the exact distribution of KAB will be known on the Snapshot Date, which is
                14 days after an auction win.
              </p>
            </FAQItem>

            <FAQItem question="What is the Snapshot Date?">
              <p>
                The Snapshot Date is the time at which we take a snapshot of Edgeware&apos;s
                distribution. Given that Kabocha is spawned from Edgeware, we will be
                &quot;persisting&quot; 100% of the EDG distribution (minus the treasury). We
                replaced the treasury for Kabocha crowdloan rewards and maintenance fund. 4.9% of
                the EDG supply is earmarked for crowdloan participants, this could turn out to be
                valuable amount of KAB in relation to the accounts that receive KAB by holding EDG.
              </p>
            </FAQItem>

            <FAQItem question="If I hold EDG and contribute to the crowdloan, will I receive KAB for both?">
              <p>Yes.</p>
            </FAQItem>

            <FAQItem question="What is an Initial Testimony?">
              <p>
                One of our core values is sovereignty. As part of our research of jurisdiction of
                law, we have started to build within a jurisdiction that values your sovereignty and
                enables you to function in with highest possible status and standing. This is just the 
                beginning of an ambitious goal to create a new system from the absolute foundation of canonical law. 
                <br></br>
                An Initial Testimony is part of your Initial Member Record. Think of this as an
                initiation to a club, but instead of a private club, this club it is public
                jurisdiction that empowers human beings and respects their rights as living breathing (human)
                life forms. It is a testament of sovereignty, and a vow of honour. It is not
                asking anything of you accept to affirm your freedom and vow to be in honour and
                good faith, among the most primordial of laws. Kabocha as a Network Public is
                working on building sovereign infrastructure and that includes building on
                jurisdiction that are not in the old realm. In due course, you will be able to
                increase the weight and substance of your Membership, and receive greater roles,
                rights and responsibilities in the governance and administration of Kabocha. Once
                you have agreed to the Initial Testimony, then you will receive a Kabocha Seed
                in its initial state. The state (visual representation) of the Seed will
                represent your level of membership.
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
            <FAQItem question="How do I contribute to the crowdloan?">
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
                The word is confusing. A Crowdloan is not a loan, it is way of locking your KSM coins in order to vote for parachain to successfully win a slot in the network. Find out more <a href="https://wiki.polkadot.network/docs/learn-crowdloans">here</a>. 
              </p>
            </FAQItem>
          </FAQ>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
