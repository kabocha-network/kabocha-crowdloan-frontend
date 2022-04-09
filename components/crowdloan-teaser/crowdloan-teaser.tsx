import dynamic from 'next/dynamic';
import { useState } from 'react';

import { Modal } from '../modal/modal';
import { CrowdloanStats } from './crowdloan-stats';
import { CrowdloanTeaserLoader } from './crowdloan-teaser-loader';
import { useCrowdloanStats } from './useCrowdloanStats';

const Crowdloan = dynamic(() => import('../crowdloan/crowdloan'), {
  ssr: false,
  loading: () => <div>Loading crowdloan interface...</div>,
});

export const CrowdloanTeaserLive = () => {
  const { isReady } = useCrowdloanStats();
  const [showCrowdloanModal, setShowCrowdloanModal] = useState(false);

  const handleClick = () => {
    setShowCrowdloanModal(true);
  };

  if (!isReady) {
    return <CrowdloanTeaserLoader />;
  }

  return (
    <>
      <CrowdloanStats onButtonClick={handleClick} />

      {showCrowdloanModal && (
        <Modal>
          <Crowdloan />
        </Modal>
      )}
    </>
  );
};

export default CrowdloanTeaserLive;
