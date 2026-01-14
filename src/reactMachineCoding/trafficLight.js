import React, { useState, useEffect } from "react";

const TrafficLight = () => {

  const [color, setColor] = useState("red");
  
const durations = {
    'red': 5000,
    'yellow': 2000,
    'green': 4000,
  };


/*

concepts :-->//ak hi state jo ki jiski value after some interval change ho rahi and again again wahi repeat ho rahi..

//The traffic light problem is a classic example of sequential state updates with time intervals

//here you manage timed state transitions, repeating sequences, or automated UI updates:

//vvvvviiimmpp==>similar problems like this =>Countdown Timer / Stopwatch, Image Carousel / Slideshow,progress bar that fills gradually,Simulate Pomodoro timer (25 min work / 5 min break cycle),LED light toggle: blink on/off every 1 second, Quiz App with Timed Questions, Typing Animation, Digital Clock, Alert Notification Rotator, Step-wise Form Animation, etc

*/

  useEffect(() => {
    const colors = ["red", "yellow", "green"];
    let index = 0;
    const interval = setInterval(() => {

      if (index < 3) {
        setColor(colors[index]);
        index = index + 1;
      } else {
        index = 0;
      }

    }, 2000);


    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  console.log("color", color);
  return (
    <>
      {/* justify-items is used in CSS Grid ONLY */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          justifyItems: "center",
          alignItems: "center",
          width: "189px",
          height: 500,
          backgroundColor: "black",
          border: "1px solid black",
          marginLeft: "50%",
        }}
      >
        <div
          style={{
            backgroundColor: color === 'red' ? "red" : "black",
            border: "1px solid black",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: color === 'yellow' ? "yellow" : "black",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: color === 'green' ? "green" : "black",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </>
  );
};
export default TrafficLight;
