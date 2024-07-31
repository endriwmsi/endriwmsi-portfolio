import { cn } from "../app/utils/cn";

type ProgressBlockProps = {
  label: string;
  value: number;
  classname?: string;
};

const ProgressBlocks = ({ label, value, classname }: ProgressBlockProps) => {
  // Calcula o número de blocos preenchidos com base no valor
  const filledBlocks = Math.round((value / 100) * 10);

  return (
    <div className={cn(
      classname,
    )}>
      <span className='text-base'>{label}</span>
      <div className="w-full flex justify-between gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'w-4 h-4 custom-shape',
              index < filledBlocks ? 'bg-lime-400' : 'bg-zinc-700'
            )} // Aplica cor com base no índice
          />
        ))}
      </div>

    </div>
  );
};

export default ProgressBlocks;
