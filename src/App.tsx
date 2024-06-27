import { Canvas } from '@react-three/fiber';
import ParticleWave from './components/ParticleWave';
import endPhoto from './assets/img/endriw.jpg';
import MotionCursor from './components/MotionCursor';
import { CloudDownloadIcon, Github, Instagram, Linkedin, SendIcon } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

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
        <div className="w-full h-full max-w-[1480px] max-h-[800px] mt-[8vh] mx-[6vw] mb-[9vh] flex space-x-1">

          {/* Card */}
          <div className="perspective-1000 w-full max-w-[531px]">
            <div
              className='rotate-y-6 bg-cover bg-center h-full flex flex-col justify-end items-center font-Syne'
              style={{ backgroundImage: `url(${endPhoto})` }}
            >
              <div className='flex flex-col items-center mb-12'>
                <h1 className='text-3xl font-bold'>Endriw Schiavenato</h1>
                <span className='font-Syne text-lime-400'>
                  <TypeAnimation
                    sequence={[
                      'Software Developer',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'We produce food for Hamsters',
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
                <div className='flex justify-center items-center gap-2 w-1/2 p-4 border-t border-r border-zinc-300/10'>
                  <button className=' w-1/2'>DOWNLOAD CV</button>
                  <CloudDownloadIcon className='hover:text-lime-400 hover:-translate-y-1 transition-all'/>
                </div>
                <div className='flex justify-center items-center gap-2 w-1/2 p-4 border-t border-zinc-300/10'>
                  <button className=' w-1/2'>CONTACT ME</button>
                  <SendIcon className='hover:text-lime-400 hover:-translate-y-1 transition-all'/>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className='h-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 w-full flex items-center justify-center'
          >
            <div className='text-white p-2'>
              <h2 className="text-xl font-bold mb-4">Outro Conteúdo</h2>
              <p>Este é o conteúdo adicional ao lado do card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
