import React from "react";

const DebounceExample = () => {              

  const debounce = (fun, delay) => {   //https://medium.com/nerd-for-tech/debouncing-throttling-in-javascript-d36ace200cea
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(this, args);
      }, delay);
    };
  };
  const getfunction = (ev) => {
    console.log("hjioiuyuio", ev.target.value);
  };

  const changeHandler = debounce(
    (e) => console.log("hey", e.target.value),
    1000
  );

  //const changeHandler = debounce((e)=>getfunction(e), 1000);   //??debounce ko to e pass nahi still...

  // const changeHandler =(e)=>{
  //   let abc=e.target.value;
  //   let fh=debounce(()=>console.log('hey',abc), 1000);
  //   fh()
  // }

  // const changeHandler = (e) => {
  //   let timer;
  //  // clearTimeout(timer)
  //    timer=setTimeout(()=>{
  //   console.log('output=>',e.target.value);

  //   },1000)

  // };

  return (
    <>
      <input onChange={(e) => changeHandler(e)}></input>
    </>
  );
};
export default DebounceExample;
