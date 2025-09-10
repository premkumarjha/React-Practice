import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);  //Avoid it and use useRef if needed, reason explained below;
  //const userRef = React.useRef(null);  //userRef store interval ID here (non-UI state), use erither useRef or useState for non-UI state, but useRef is better option as explained below
  /*
.>useState is for UI state (something you want to show in the component),//jaise yaha ham intervalId UI{browser me} me show nahi kar rahe mean ye return ke andar nahi hai, just for internal logic ke liye use, so useRef is better option rather than useState, as useState will cause re-render but useRef will not cause re-render.
.>useRef is for non-UI mutable values (like DOM nodes, timers, event IDs).

  */

  const startCounter = () => {
    if (intervalId) return; // prevent multiple intervals
  //  if (intervalRef.current) return; // prevent multiple intervals
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    // intervalRef.current = setInterval(() => {
    //   setCounter((prev) => prev + 1);
    // }, 1000);
    setIntervalId(interval);
  };

  const pauseHandler = () => {
    clearInterval(intervalId);
    //clearInterval(intervalRef.current);
    setIntervalId(null);
    //intervalRef.current = null;
  };

  const resumeHandler = () => {
    startCounter(); // reuse start logic
  };

  const resetHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    //intervalRef.current = null;
    setCounter(0);
    // if you want it to auto-start after reset, just call startCounter() here
  };

  return (
    <>
      <div>Counter value: {counter}</div>

      <button onClick={startCounter}>Start</button>
      <button onClick={pauseHandler}>Pause</button>
      <button onClick={resumeHandler}>Resume</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
};

export default Counter;
