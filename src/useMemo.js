import React, { useState, useCallback, useMemo } from "react";
import Child from "./child";

const UseMemoExample = () => {
  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };
//if ham below likh rahe than in below return at line 36 pe expensiveCalculation ko call karna pareg, jabki if useMemo use karte to call nahi direct value, qki usemMEO memoizes value return karta.
//   const expensiveCalculation = ()=> {
//     for (let i = 0; i <= 1000000000; i++) {}
//     return counter;
//   }


//yaha useMmeo use kar rahe hai to line no 36 pe hame direct expensiveCalculation use, na ki call, Q ki useMemo memoized value retrun kart hai.
  const expensiveCalculation = useMemo(() => {
    for (let i = 0; i <= 1000000000; i++) {}
    return counter;
  }, [counter]);


  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  console.log("it is  component");
  return (
    <>
      <button onClick={() => increaseAge()}>increase age</button>
      {age}
      <hr />
      <button onClick={() => increaseCounter()}>increase counter</button>
      <hr />

      {expensiveCalculation}
    </>
  );
};

export default UseMemoExample;
