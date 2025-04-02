import React, { useEffect } from 'react';

const TimerComponent = () => {

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Logging message every second...');
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleaned up!');
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts.

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Check the console for timer logs!</h1>
    </div>
  );
};

export default TimerComponent;
