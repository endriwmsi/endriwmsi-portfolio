import { cn } from "../app/utils/cn";

type ProgressBarProps = {
  label: string;
  value: number;
  classname?: string;
};

const ProgressBar = ({ label, value, classname }: ProgressBarProps) => {
  return (
    <div className={cn(
      classname,
    )}>
      <span className='text-base'>{label}</span>
      <div className="w-full bg-zinc-700 h-1">

        <div
          className={`h-[4px] bg-lime-400`}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }} // Garante que o valor esteja entre 0 e 100
        />
      </div>
    </div>
  );
};

export default ProgressBar;
