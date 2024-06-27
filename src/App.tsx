import { Canvas } from '@react-three/fiber';
import ParticleWave from './components/ParticleWave';
import endPhoto from './assets/img/endriw.jpg';
import MotionCursor from './components/MotionCursor';
import { CloudDownloadIcon, Github, Instagram, Linkedin, SendIcon } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Button from './components/Button';

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <MotionCursor />
      
      <Canvas camera={{ fov: 90, near: 1, far: 10000, position: [0, 800, 2000] }} className="absolute inset-0">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <ParticleWave />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-[1480px] max-h-[800px] flex flex-col md:flex-row space-x-1">

          {/* Card */}
          <div className="md:perspective-1000 w-full h-full max-w-[531px] max-h-[810px]">
            <div
              className='rotate-y-6 bg-cover bg-center h-[620px] md:h-full flex flex-col justify-end items-center'
              style={{ backgroundImage: `url(${endPhoto})` }}
            >
              <div className='flex flex-col items-center mb-12'>
                <h1 className='text-lg md:text-3xl font-bold'>Endriw Schiavenato</h1>
                <span className='text-lime-400'>
                  <TypeAnimation
                    sequence={[
                      'Software Developer',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'And coffee lover',
                      2000,
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontFamily: 'Syne', fontSize: '16px', display: 'inline-block' }}
                    repeat={Infinity}
                />
                </span>

                <div className='flex items-center gap-3 mt-5'>
                  <a href="">
                    <Instagram className='hover:text-lime-400 hover:-translate-y-1 transition-all'  />
                  </a>
                  <a href="">
                    <Linkedin className='hover:text-lime-400 hover:-translate-y-1 transition-all'  />
                  </a>
                  <a href="">
                    <Github className='hover:text-lime-400 hover:-translate-y-1 transition-all'  />
                  </a>
                </div>
              </div>

              <div className='w-full flex'>
                <Button icon={<CloudDownloadIcon />} actionTitle="DOWNLOAD CV" action={() => {}} />
                <Button icon={<SendIcon />} actionTitle="CONTACT ME" action={() => {}} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className='h-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 w-full flex'
          >
            <div className='text-white w-full overflow-y-scroll'>
              <h1 className="text-xl font-bold m-7">About Me</h1>

              <div className='flex flex-col md:flex-row text-base md:text-xl'>
                <div className='md:w-1/2 text-zinc-300 border-t border-r border-zinc-300/10 p-7'>
                  <strong>Hello! I’m Endriw Schiavenato.</strong>
                  <p>
                    I have rich experience in management, accountancy, law, human resources, financial control. I love to talk with you about our unique.
                  </p>
                </div>

                <div className='md:w-1/2 text-zinc-300 border-t border-zinc-300/10 p-7'>
                  <ul className='list-none space-y-2'>
                    <li className='w-full flex flex-col justify-between peer'>
                      <div className='flex justify-between'>
                        <strong className='text-sm bg-lime-400 py-1 px-3 text-black'>Age</strong>
                        <span className='text-base'>24</span>
                      </div>
                    </li>

                    <div className='separator peer'></div>

                    <li className='w-full flex flex-col justify-between peer'>
                      <div className='flex justify-between'>
                        <strong className='text-sm bg-lime-400 py-1 px-3 text-black'>Residence</strong>
                        <span className='text-base'>BRA</span>
                      </div>
                    </li>

                    <div className='separator peer'></div>

                    <li className='w-full flex flex-col justify-between peer'>
                      <div className='flex justify-between'>
                        <strong className='text-sm bg-lime-400 py-1 px-3 text-black'>Freelance</strong>
                        <span className='text-base'>Available</span>
                      </div>
                    </li>

                    <div className='separator peer'></div>

                    <li className='w-full flex flex-col justify-between'>
                      <div className='flex justify-between'>
                        <strong className='text-sm bg-lime-400 py-1 px-3 text-black'>Address</strong>
                        <span className='text-base'>Santa Catarina, BRA</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
