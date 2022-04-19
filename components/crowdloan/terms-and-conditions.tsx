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
          <h2 className="font-display">Initial Member Record Registration with Kabocha</h2>

          <p>
            This document is the Initial Testimony for Members to sign and seal in order to gain
            Initial Membership Status in the jurisdiction of Kabocha.
          </p>

          <p>
            The Kabocha Seed in its Genesis Form represents Initial Membership Rights into the
            Network Public of Kabocha. By making this initial Testimony and making a nominal
            contribution to Kabocha in the form of locking KSM in a Crowdloan and signing through
            the Kabocha portal, you are Assigned Initial Membership Rights in the Kabocha Network
            Public.
          </p>

          <h2 className="font-display">Jurisdiction</h2>
          <p>
            All matters shall be dealt with in the Kabocha jurisdiction under Ucadian Law. Kabocha
            Network Public is a University True Trust under the Law of Ucadia. Ucadia is the
            canonical framework of Law where the True Trust is Granted.
          </p>

          <p>
            Kabocha Network Public is a Consent and Honour based system, with intentions of
            expanding benevolent Consciousness, to empower people and free them from the shackles
            and enslavement of the Rulers of the Inferior Systems we were forcibly born into without
            Consent.
          </p>

          <h2 className="font-display">Testimony</h2>
          <p>
            You as a Human Being Testify to be living, breathing, of sound mind and cognitive
            ability; That there is no Intermediary that has any Authority between you and the Divine
            Creator of all Realms. By entering the Kabocha jurisdiction you Testify to not be
            functioning in the Role, capacity, or title of a citizen, on-duty officer, on-duty
            government official, of any other Nation or Jurisdiction when entering Kabocha sovereign
            Network Public. Any aforementioned Role, capacity or title from a different jurisdiction
            has no effect in the jurisdiction of the Kabocha Network Public. The jurisdiction where
            Kabocha resides is a superior jurisdiction to any other jurisdiction or society.
          </p>

          <h2 className="font-display">Vow</h2>
          <p>You Vow to stay in full Honour, Competence and act in Good Faith.</p>

          <a href="https://singular.app/collectibles/12008862-f2529946857380f250-KABORD-KABOCHA_INITIAL_MEMBERSHIP_TESTIMONY-00000001">
            {' '}
            Link to Notarized Record (NFT){' '}
          </a>
          <br></br>
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
          I hereby agree to the Kabocha Initial Testimony.
        </label>
      </div>
    </div>
  );
};
