import Card from './components/Card';
import Content from './components/Content';
import MotionCursor from './components/MotionCursor';
import ThreeCanvas from './components/ThreeCanvas';

const App = () => {
  return (
    <div>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="w-full h-full max-w-[1480px] max-h-[700px] flex flex-col md:flex-row space-x-1 z-10">
          <Card />
          <Content />
        </div>
      </main>

      <MotionCursor />
      <ThreeCanvas />
    </div>
  );
};

export default App;
