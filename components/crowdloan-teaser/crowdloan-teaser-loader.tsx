import { KabochaLogo } from '../kabocha-logo/kabocha-logo';

export const CrowdloanTeaserLoader = () => {
  return (
    <div className="p-0 h-full overflow-clip rounded-xl bg-gray-100 flex">
      {/* Progress bar with amount of raised KSM */}
      <div className="p-8 m-auto">
        <div className="w-32 h-32 m-auto animate-bounce">
          <KabochaLogo width={128} height={128} />
        </div>
        <span className="block py-2 text-lg text-gray-400">
          Initializing Crowdloan interface...
        </span>
      </div>
    </div>
  );
};
