import { Canvas } from '@react-three/fiber';
import ParticleWave from './ParticleWave';

const ThreeCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ fov: 90, near: 1, far: 10000, position: [0, 800, 2000] }} 
        className='hidden md:block'
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <ParticleWave />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
