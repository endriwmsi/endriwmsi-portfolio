import { Check } from 'lucide-react';
import { cn } from '../app/utils/cn';

type ChecklistItemProps = {
  label: string;
  classname?: string;
}

const ChecklistItem = ({label, classname}: ChecklistItemProps) => {
 return (
  <div className={cn(
    'flex items-center space-x-4',
    classname,
  )}>
    <Check className='w-4 h-5 text-lime-400' />
    <span className='text-base'>{label}</span>
  </div>
 )
}

export default ChecklistItem;