type ProgressBarProps = {
  progress: number,
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const inlineStyle = {
    width: `${progress}%`,
  }
  return (
    <div className="rounded-md bg-white overflow-clip">
      <div className="p-4 rounded-none bg-yellow-200" style={inlineStyle}></div>
    </div>
  )
}
