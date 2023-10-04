import React, { useState, useCallback } from "react";
import Child from "./child";

const UsecallbackExample = () => {
  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const ageCounter = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <>
      <Child age={age} ageCounter={ageCounter} setAge={setAge}/>
      <button onClick={() => increaseCounter()}>Increase counter</button>
      {counter}
      <hr />
      <button onClick={() => ageCounter()}>age counter</button>
      {age}
    </>
  );
};

export default UsecallbackExample;
