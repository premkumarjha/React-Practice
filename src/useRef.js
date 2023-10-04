import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";

const UseRefPractice = () => {
  //const [count,setCount]=useState(0);
  const count = useRef(0); //count will be an object, having current proprty.
  const [age, setAge] = useState(0);
  let marks = 0;

  useEffect(() => {
    // setCount(count+1); //is se loopp me....
    //count=count.current+1 //wrong
   count.current = count.current + 1; //is se page re render nahi hota.....
   console.log("count", count);
  //marks = marks + 1; 
  //console.log("marks", marks);
  })
  //render to age ke update se ho raha..,and than useEffect me...
  const increaseAge = () => {
    setAge(age + 1); //ye dene se marks ki value hamesa 1 aayega, Q  ki page state update so each time page render and each time marks ki vakue set one;if isko hata xe to phir each click pe marks ki value increase hogi
    marks = marks + 1;
    //console.log("marks", marks);
  };
  return (
    <>
      <button onClick={() => increaseAge()}>increase age</button>

{count.current}
      {/* {count} */}
    </>
  );
};
export default UseRefPractice;
