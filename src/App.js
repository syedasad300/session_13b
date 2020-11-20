import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';

function App() {

  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [{ transform: 'translate(0,0)' }, { transform: 'translate(600px,0)' }],
    timing: {
      duration: 100,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
    },
  });

  return (
    <div>
      <div className='target' ref={ref}></div>
      Current animation state: {playState}
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div>
  );
}

export default App;
