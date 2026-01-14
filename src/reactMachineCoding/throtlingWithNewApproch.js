import React, { useRef } from "react";

const ThrottleButton = () => {
  const lastClickTime = useRef(0); // store last click time

  const handleClick = () => {
    const now = Date.now();

    // if clicked within 2 seconds, ignore
    if (now - lastClickTime.current < 2000) {
      console.log("Ignored: too fast click");
      return;
    }

    // allow click
    lastClickTime.current = now;
    console.log("API called / Action performed");
  };

  return (
    <div>
      <h3>Throttle Button Example</h3>
      <button onClick={handleClick}>Pay Now</button>
    </div>
  );
};

export default ThrottleButton;
