export const BuildId = () => {
  let commitSha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;

  if (!commitSha) {
    return null;
  }

  const shortSha = commitSha.substring(0, 7);

  return (
    <div className="text-center text-gray-400 text-xs">
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="underline decoration-gray-200 hover:text-primary"
        href={`https://github.com/kabocha-network/kabocha-crowdloan-frontend/commit/${commitSha}`}
      >
        Revision {shortSha}
      </a>
    </div>
  );
};
