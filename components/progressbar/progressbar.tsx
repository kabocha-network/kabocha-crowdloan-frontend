type ProgressBarProps = {
  progress: string;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const inlineStyle = {
    width: `${progress}%`,
  };
  return (
    <div className="rounded-md bg-white overflow-clip">
      <div className="py-4 p-0.5 rounded-none bg-primary" style={inlineStyle}></div>
    </div>
  );
};
