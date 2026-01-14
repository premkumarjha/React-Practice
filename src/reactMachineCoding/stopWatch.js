import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null); //replaced it with useref
  const timerRef = useRef(null);
  //==>
  //mm :ss
  const timeFormat = (totalsec) => {
    let minutes = Math.floor(totalsec / 60);
    let seconds = totalsec % 60;
    //let format = (num) => (num < 10 ? `0{num}` : num);
    //return `${minutes}:${seconds}`;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  const startHandler = () => {
    //if (timerRef.current) return; //// prevent multiple intervals
    // prevent multiple intervals
    if (timer) return;   //Timer is already running, so don’t start a new one.”
   let interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setTimer(interval);
  };

  const pauseHandler = () => {
    if (!timer) return;
    clearInterval(timer);
    //clearInterval(timerRef.current);
    //timerRef.current = null;
    setTimer(null); //==>This stopwatch is paused/stopped. There is NO active interval now.”
  };
  const resetHandler = () => {
    clearInterval(timer);
    //clearInterval(timerRef.current);
    //timerRef.current = null;
    setTimer(null);
    setSeconds(0);
  };
  console.log("timerRef.current", timerRef.current);
  const resumeHandler = () => {
    //if (timerRef.current) return;
    // Same as start but don’t reset seconds
    if (timer) return;
   let interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setTimer(interval);
  };
  return (
    <>
      <p>{timeFormat(seconds)}</p>
      <button type="button" onClick={() => startHandler()}>
        {" "}
        start timer
      </button>
      <button type="button" onClick={() => pauseHandler()}>
        {" "}
        pause timer
      </button>
      <button type="button" onClick={() => resumeHandler()}>
        {" "}
        resume timer
      </button>
      <button type="button" onClick={() => resetHandler()}>
        {" "}
        reset timer
      </button>
    </>
  );
};

export default Stopwatch;
