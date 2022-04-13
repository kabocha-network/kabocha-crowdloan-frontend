import { Button } from '../button/button';
import { Link } from '../link/link';
import { ProgressBar } from '../progressbar/progressbar';
import { useCrowdloanStats } from './useCrowdloanStats';

type CrowdloanStatsProps = {
  onButtonClick: () => void;
};

export const CrowdloanStats = ({ onButtonClick }: CrowdloanStatsProps) => {
  const { progress, auctionTime, crowdloanTime, currentAmount, cap } = useCrowdloanStats();

  return (
    <div className="p-0 overflow-clip rounded-xl bg-gray-100 divide-y divide-gray-200">
      {/* Progress bar with amount of raised KSM */}
      <div className="px-8 py-4">
        <span className="block py-2 text-lg text-gray-400">Raised till now:</span>
        <ProgressBar progress={progress} />
        <div className="flex flex-row justify-between pt-4">
          <span className="text-2xl font-semibold">
            {currentAmount} of {cap} KSM
          </span>
          <span className="text-2xl font-semibold">{progress}%</span>
        </div>
      </div>

      {/* Next auction */}
      <div className="px-8 py-4">
        <span className="block py-2 text-lg text-gray-400">Next parachain auction in:</span>
        <span className="block text-2xl font-semibold">{auctionTime}</span>
      </div>

      {/* Time left */}
      <div className="px-8 py-4">
        <span className="block py-2 text-gray-400">Crowdloan ends in:</span>
        <span className="block text-2xl font-semibold">{crowdloanTime}</span>
        <span className="text-xs text-gray-400">
          The crowdloan could end much sooner if we win an earlier auction
        </span>
      </div>

      {/* Button to contribute */}
      <div className="hidden md:block px-8 py-6">
        <Button onClick={onButtonClick}>Contribute</Button>
      </div>

      <div className="block md:hidden px-8 py-4">
        <p>
          Our crowdloan UI is currently not available on a mobile phones. To contribute, please use
          a desktop browser with{' '}
          <Link href="https://polkadot.js.org/extension/">{`Polkadot.{js}`} extension.</Link>
        </p>
      </div>
    </div>
  );
};
