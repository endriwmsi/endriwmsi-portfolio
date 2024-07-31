import { cn } from "../app/utils/cn";

type TimelineItem = {
  time: string;
  application: string;
  place: string;
  description?: string;
};

type TimelineProps = {
  items: TimelineItem[];
}

const Timeline = ({items}: TimelineProps) => {
 return (
  <div>
    <ol className="relative border-s border-zinc-600">                  
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-4">
          <div className={cn(
            "absolute w-3 h-3 rounded-full mt-1.5 -left-1.5",
            index === 0 ? 'bg-lime-400' : 'bg-zinc-600',
          )} />
          <time 
            className={cn(
              "text-xs font-normal leading-none p-1 border rounded-lg",
               index === 0 ? 'text-lime-400 border-lime-400' : 'text-zinc-500 border-zinc-500',
            )}
          >
            {item.time}
          </time>
          <h3 className="mt-2 text-lg font-semibold text-zinc-300">{item.application}</h3>
          <p className="mt-1 mb-2 text-sm font-normal text-zinc-400">{item.place}</p>
          <p className="mb-4 text-base font-normal text-zinc-300">{item.description}</p>
        </li>
      ))}
    </ol>
  </div>
 )
}

export default Timeline;