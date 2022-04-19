import { Button } from '../button/button';
import { Link } from '../link/link';
import { ProgressBar } from '../progressbar/progressbar';
import { useCrowdloanStats } from './useCrowdloanStats';

type CrowdloanStatsProps = {
  onButtonClick: () => void;
};

export const CrowdloanStats = ({ onButtonClick }: CrowdloanStatsProps) => {
  const { progress, remainingTime, currentAmount, cap } = useCrowdloanStats();

  return (
    <div className="p-0 overflow-clip rounded-xl bg-gray-100 divide-y divide-gray-200">
      {/* Progress bar with amount of raised KSM */}
      <div className="p-8">
        <span className="block py-2 text-lg text-gray-400">Raised till now:</span>
        <ProgressBar progress={progress} />
        <div className="flex flex-row justify-between py-4">
          <span className="text-3xl font-semibold font-display">
            {currentAmount} of {cap} KSM
          </span>
          <span className="text-3xl font-semibold">{progress.toFixed(1)}%</span>
        </div>
      </div>

      {/* Time left */}
      <div className="p-8">
        <span className="block py-2 text-lg text-gray-400">Ends in:</span>
        <span className="block text-3xl font-semibold font-display">{remainingTime}</span>
        <span className="text-sm text-gray-400">
          The crowdloan could end much sooner if we win an earlier auction
        </span>
      </div>

      {/* Button to contribute */}
      <div className="hidden md:block p-8">
        <Button onClick={onButtonClick}>Contribute</Button>
      </div>

      <div className="block md:hidden p-8 ">
        <p>
          Our crowdloan UI is currently not available on a mobile phones. To contribute, please use
          a desktop browser with{' '}
          <Link href="https://polkadot.js.org/extension/">{`Polkadot.{js}`} extension.</Link>
        </p>
      </div>
    </div>
  );
};
