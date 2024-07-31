import { Canvas } from '@react-three/fiber';
import ParticleWave from './components/ParticleWave';
import endPhoto from './assets/img/endriw.jpg';
import MotionCursor from './components/MotionCursor';
import { BadgeCheck, BriefcaseBusinessIcon, CircleUserRound, CloudDownloadIcon, FlagIcon, School2Icon, SendIcon } from 'lucide-react';
import ActionButton from './components/ActionButton';
import Decorator from './components/Decorator';
import { biographyData, decoratorsData, socialLinks, timelineEdu, timelineExp } from './lib/constants';
import TypingAnimation from './components/TypingAnimation';
import Timeline from './components/Timeline';
import ProgressBar from './components/ProgressBar';
import ProgressBlocks from './components/ProgressBlocks';
import ChecklistItem from './components/ChecklistItem';

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <MotionCursor />
      
      <Canvas camera={{ fov: 90, near: 1, far: 10000, position: [0, 800, 2000] }} className="absolute inset-0">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <ParticleWave />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[1480px] max-h-[700px] flex flex-col md:flex-row space-x-1">

          {/* Card */}
          <div className="md:perspective-1000 w-full h-full max-w-[531px] max-h-[710px]">
            <div
              className='rotate-y-6 bg-cover bg-center h-[620px] md:h-full flex flex-col justify-end items-center'
              style={{ backgroundImage: `url(${endPhoto})` }}
            >
              <div className='flex flex-col items-center mb-12'>
                <h1 className='text-lg md:text-3xl font-bold'>Endriw Schiavenato</h1>
                <span className='text-lime-400'>
                  <TypingAnimation />
                </span>

                <div className='flex items-center gap-3 mt-5'>
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target='_blank'>
                      <social.Icon className='hover:text-lime-400 hover:-translate-y-1 transition-all' />
                    </a>
                  ))}
                </div>
              </div>

              <div className='w-full flex'>
                <ActionButton icon={<CloudDownloadIcon />} actionTitle="DOWNLOAD CV" action={() => {}} />
                <ActionButton icon={<SendIcon />} actionTitle="CONTACT ME" action={() => {}} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className=' w-full h-full flex rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'
          >
            <div className='text-white w-full overflow-y-scroll'>
              <div>
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
                          {index < decoratorsData.length - 1 && <div className='separator peer'></div>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
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
              </div>

              <div>
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
                      <ProgressBar label="Programming Logic" value={90} classname='mb-7' />
                      <ProgressBar label="JavaScript" value={80} classname='mb-7' />
                      <ProgressBar label="PHP" value={50} classname='mb-7' />
                      <ProgressBar label="Databases" value={60} />
                    </div>
                    
                    <div className='flex items-center space-x-4 mt-8'> 
                      <div className='bg-lime-400 py-2 px-3 custom-shape'>
                        <BadgeCheck className='text-black' />
                      </div>
                      <span className='text-zinc-300 text-[17px] font-bold'>CHECKLIST</span>
                    </div>

                    <div className='mt-8'>
                      
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
                        <FlagIcon className='text-black' />
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
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <footer className='flex justify-center text-xs text-zinc-400'>
        <span>© 2024 Endriw Schiavenato. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default App;
