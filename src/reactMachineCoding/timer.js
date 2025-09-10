import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(3600);
  //const [timer, setTimer] = useState();  //replaced it with useref
  const timerRef = useRef(null);

  //let totalsec = 3665;
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 1000);
  //   setTimer(interval);
  // }, []);
  const timeFormat = (totalsec) => {
    let minutes = Math.floor(totalsec / 60);
    let seconds = totalsec % 60;
    //let format = (num) => (num < 10 ? `0{num}` : num);
    //return `${minutes}:${seconds}`;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  const startHandler = () => {
    if (timerRef.current) return; //// prevent multiple intervals
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    //setTimer(interval);
  };

  const pauseHandler = () => {
    //clearInterval(timer);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetHandler = () => {
    //clearInterval(timer);
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(3600);
  };
  console.log("timerRef.current", timerRef.current);
  const resumeHandler = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    //setTimer(interval);
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

export default Timer;
