import React, { useState, useEffect } from "react";


const LoderTillPageWidth = () => {
  const [progress,setProgress]=useState(0);



  
  useEffect(() => {
    const intervalId = setInterval(() => {
    
	//conditi to stop ...
      if (progress == window.innerWidth) {
        clearInterval(intervalId); // Stop the interval
      } else {
        increaseWidth()  //call methods
      }
    }, 1000); // Set your interval duration here (in milliseconds)

    // Cleanup function to clear the interval when the component unmounts
	
    return () => clearInterval(intervalId);
	
  }, [progress]); //
  
  const increaseWidth=()=>{
     setProgress((prev)=>prev+1)
  }
  console.log('prpgrss=>',progress)
  return (
    <div style={{display:'inline-block',padding:30}}>

     <div style={{width:progress,height:25,backgroundColor:'green'}}>

     </div>
    </div>
  );
};
export default LoderTillPageWidth;