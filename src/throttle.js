import React from "react";

const ThrottleExample = () => {
  const throttle = (fun, delay) => {
    //https://medium.com/nerd-for-tech/debouncing-throttling-in-javascript-d36ace200cea

    let flag = true;
    return () => {
      if (flag) {
        fun.apply(this); // fun.apply(this, args);
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  };
  const getfunction = () => {
    console.log("button clicked");
  };

  const clickHandler = throttle(() => console.log("button clicked"), 1000);

  return (
    <>
      <button onClick={() => clickHandler()}>click button</button>
    </>
  );
};
export default ThrottleExample;
