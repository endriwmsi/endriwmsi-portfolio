import { BriefcaseBusinessIcon, CircleUserRound, FlagIcon, School2Icon, BadgeCheck, List } from 'lucide-react';
import { biographyData, decoratorsData, timelineEdu, timelineExp } from '../lib/constants';
import Decorator from './Decorator';
import Timeline from './Timeline';
import ProgressBar from './ProgressBar';
import ProgressBlocks from './ProgressBlocks';
import ChecklistItem from './ChecklistItem';

const Content = () => (
  <div className='w-full h-full flex rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
    <div className='text-white w-full md:overflow-y-scroll'>
      {/* About Me */}
      <section>
        <h1 className="text-xl font-bold m-7">About Me</h1>
        <div className='flex flex-col md:flex-row md:text-xl'>
          <div className='md:w-1/2 text-zinc-300 border-t border-r border-zinc-300/10 p-7 text-base'>
            <strong>{biographyData.intro}</strong>
            <p>{biographyData.description}</p>
          </div>
          <div className='md:w-1/2 text-zinc-300 border-t border-zinc-300/10 p-7'>
            <ul className='list-none space-y-2'>
              {decoratorsData.map((decorator, index) => (
                <li key={index} className='w-full flex flex-col justify-between peer'>
                  <Decorator text={decorator.text} value={decorator.value} />
                  {index < decoratorsData.length - 1 && <div className='separator peer' />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section>
        <h1 className="text-xl font-bold mx-7 mb-7">Resume</h1>
        <div className='flex flex-col md:flex-row md:text-xl'>
          <div className='md:w-1/2 border-t border-r border-zinc-300/10 p-7'>
            <div className='flex items-center space-x-4'> 
              <div className='bg-lime-400 py-2 px-3 custom-shape'>
                <BriefcaseBusinessIcon className='text-black' />
              </div>
              <span className='text-zinc-300 text-[17px] font-bold'>EXPERIENCE</span>
            </div>
            <div className='mt-8'>
              <Timeline items={timelineExp} />
            </div>
          </div>
          <div className='md:w-1/2 border-t border-r border-zinc-300/10 p-7'>
            <div className='flex items-center space-x-4'> 
              <div className='bg-lime-400 py-2 px-3 custom-shape'>
                <School2Icon className='text-black' />
              </div>
              <span className='text-zinc-300 text-[17px] font-bold'>EDUCATION</span>
            </div>
            <div className='mt-8'>
              <Timeline items={timelineEdu} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h1 className="text-xl font-bold m-7">Skills</h1>
        <div className='flex flex-col md:flex-row md:text-xl'>
          <div className='md:w-1/2 border-t border-r border-zinc-300/10 p-7'>
            <div className='flex items-center space-x-4'> 
              <div className='bg-lime-400 py-2 px-3 custom-shape'>
                <CircleUserRound className='text-black' />
              </div>
              <span className='text-zinc-300 text-[17px] font-bold'>OVERALL</span>
            </div>
            <div className='mt-8'>
              <ProgressBar label="Programming Logic" value={90} classname='mb-8' />
              <ProgressBar label="JavaScript" value={80} classname='mb-8' />
              <ProgressBar label="PHP" value={50} classname='mb-8' />
              <ProgressBar label="Databases" value={60} />
            </div>
            <div className='flex items-center space-x-4 mt-8'> 
              <div className='bg-lime-400 py-2 px-3 custom-shape'>
                <BadgeCheck className='text-black' />
              </div>
              <span className='text-zinc-300 text-[17px] font-bold'>CHECKLIST</span>
            </div>
            <div className='mt-8'>
              <ChecklistItem label='Proactivity' classname='mb-2' />
              <ChecklistItem label='Effective communication' classname='mb-2' />
              <ChecklistItem label='Teamwork' classname='mb-2' />
              <ChecklistItem label='Adaptability' classname='mb-2' />
              <ChecklistItem label='Creativity and innovation' />
            </div>
          </div>
          <div className='md:w-1/2 border-t border-r border-zinc-300/10 p-7'>
            <div className='flex items-center space-x-4'> 
              <div className='bg-lime-400 py-2 px-3 custom-shape'>
                <FlagIcon className='text-black' />
              </div>
              <span className='text-zinc-300 text-[17px] font-bold'>LANGUAGES</span>
            </div>
            <div className='mt-8'>
              <ProgressBlocks label="Portuguese" value={100} classname='mb-4' />
              <ProgressBlocks label="English" value={70} classname='mb-4' />
              <ProgressBlocks label="Espanish" value={30} classname='mb-4' />
              <ProgressBlocks label="Russian" value={20} />
            </div>
            <div className='flex items-center space-x-4 mt-8'> 
              <div className='bg-lime-400 py-2 px-3 custom-shape'>
                <List className='text-black' />
              </div>
              <span className='text-zinc-300 text-[17px] font-bold'>KNOWLEDGE</span>
            </div>
            <div className='mt-8'>
              <ChecklistItem label='Proactivity' classname='mb-2' />
              <ChecklistItem label='Effective communication' classname='mb-2' />
              <ChecklistItem label='Teamwork' classname='mb-2' />
              <ChecklistItem label='Adaptability' classname='mb-2' />
              <ChecklistItem label='Creativity and innovation' />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Content;
