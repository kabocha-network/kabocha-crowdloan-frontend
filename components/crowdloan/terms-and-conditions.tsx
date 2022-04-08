import { useState } from 'react';

type TermsAndConditionsProps = {
  onAccept: (flag: boolean) => void;
};

export const TermsAndConditions = ({ onAccept }: TermsAndConditionsProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    onAccept(!checked);
  };

  return (
    <div>
      <div className="h-64 bg-gray-100 rounded overflow-y-auto p-4">
        <div className="prose prose-sm">
          <h2>Terms and Conditions</h2>
          <p>
            After our Kabocha proposal is accepted by the community, we&rsquo;re aiming to launch
            Kabocha toward the next batch of Kusama parachain slots. The dates are yet to be
            confirmed by Parity.
          </p>

          <p>
            We&rsquo;re currently working through the proposal, and will share it ready for
            feedback. The process of feedback, participation and contribution is what will make
            Kabocha an awesome community work of art and craft.
          </p>

          <p>
            Kabocha was conceived after an electric party, where Kusama got Edgeware pregnant during
            the magical evening under a full moon right on the summer solstice.
          </p>

          <p>
            Luckily Kusama is only married to a few other chains so there&rsquo;s space for Kabocha
            to live with Kusuma as a parachain, after the union ritual &ldquo;crowdloan
            process&rdquo; takes place.
          </p>

          <p>
            We&rsquo;re hoping Kabocha grows up to be weird, magic and unconventional (like Billie
            Eilish).
          </p>

          <p>
            Before sharing the proposal, we&rsquo;ve been getting some legal advice from
            pre-cognitive time lords about how we define what we do and the process of
            implementation, to make sure Kabocha grows up to be a strong and potent pumpkin.
          </p>

          <p>
            Everyone will definitely have ample notice before the crowdloan/auction procedure to get
            their EDG in order, so try not get your knickers in a twist.
          </p>

          <p>
            My technical duty is working on Pumpkin chain, which is Kabocha&rsquo;s testnet, to work
            through launch procedure, as well as being a sandpit for future projects that want to
            play with Kabocha.
          </p>

          <p>
            Like the movie Inception, I&rsquo;ll go with Rich in to a deep dream and we&rsquo;ll
            spend 50 years in a single moment to perfect this proposal, if I have time I can design
            my own language and write stories about Gavin Wood.
          </p>

          <p>
            We&rsquo;ll let you know when it&rsquo;s ready. In the meantime you are welcome to make
            your own proposal to the treasury about getting funded for what you want to create! The
            more diversity of people contributing in this decentralised experiment, the more
            flourishing there will be in our social ecology.
          </p>

          <p>If anything, Kabocha will be different.</p>
        </div>
      </div>
      <div className="my-8">
        <input
          type="checkbox"
          id="terms_acceptance"
          onChange={handleChange}
          checked={checked}
          value="true"
          className="rounded order-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <label htmlFor="terms_acceptance" className="ml-2">
          I have read and accept the terms and conditions of Kabocha Crowdloan
        </label>
      </div>
    </div>
  );
};
