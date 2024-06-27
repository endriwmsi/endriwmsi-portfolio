import { cn } from "../app/utils/cn";

type ButtonProps = {
  icon: React.ReactNode;
  actionTitle: string;
  action: () => void;
};

const Button = ({ icon, actionTitle, action }: ButtonProps) => {
  return (
    <button 
      onClick={action} 
      className={cn(
        'relative flex justify-center items-center gap-2 w-1/2 p-4 border-t border-zinc-300/10', 
        'group',
      )}
    >
      <span>{actionTitle}</span>
      <div className='w-5 h-5 flex items-center justify-center group-hover:text-lime-400 group-hover:-translate-y-0.5 transition-transform'>
        {icon}
      </div>
    </button>
  );
};

export default Button;
