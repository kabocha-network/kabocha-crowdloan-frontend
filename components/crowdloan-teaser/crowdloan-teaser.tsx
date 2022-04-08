import { Button } from '../button/button';
import { ProgressBar } from '../progressbar/progressbar';


export const CrowdloanTeaser = () => {
  const currentAmount = 4012
  const totalAmount = 10000
  const progress = currentAmount / totalAmount * 100

  return (
    <div className="p-0 overflow-clip rounded-xl bg-gray-100 divide-y divide-gray-200">
        {/* Progress bar with amount of raised KSM */}
        <div className="p-8">
          <span className="block py-2 text-lg text-gray-400">Raised till now:</span>
          <ProgressBar progress={progress} />
          <div className="flex flex-row justify-between py-4">
            <span className="text-3xl font-semibold">{currentAmount} of {totalAmount} KSM</span>
            <span className="text-3xl font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Time left */}
        <div className="p-8">
          <span className="block py-2 text-lg text-gray-400">Ends in:</span>
          <span className="block text-3xl font-semibold">16 days 8 hours 5 minutes</span>
        </div>

        {/* Button to contribute */}
        <div className="p-8">
          <Button href="/crowdloan">Contribute</Button>
        </div>
    </div>
  )
}
