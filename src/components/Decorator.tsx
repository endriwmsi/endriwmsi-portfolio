type DecoratorProps = {
  text: string,
  value: string
}

const Decorator = ({ text, value }: DecoratorProps) => {
 return (
  <div className='flex justify-between'>
    <strong className='text-xs font-thin bg-lime-400 py-1 px-4 flex items-center text-black custom-shape'>{text}</strong>
    <span className='text-base'>{value}</span>
  </div>
 )
}

export default Decorator;