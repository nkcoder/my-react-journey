import React, { useRef, useState } from 'react';

// Reference a value that doesn't need to be re-rendered
const Timer = () => {
  const timer = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    const intervalId = setInterval(() => {
      console.log('tick');
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    timer.current = intervalId;
  };

  const handleStop = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      <h1>Time: {count} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
