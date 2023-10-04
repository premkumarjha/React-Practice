import React from "react";

const CenterDiv = () => {
  return (
    <>
      <div
        style={{
          height: "100vh", //NOTE============>if height nahi denge or height 100px or 100% phir center me nahi aayega..
         display: "flex",
         justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Hare Krishan</div>
        
      </div>

        {/* below is second way to make a div in center,below wale me koi parent div or flex ...kuch nahi.. */}

      {/* <div style={{height:'300px',width:'300px',position:'absolute',backgroundColor:'red',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}>jay maa kali</div> */}
    </>
  );
};
export default CenterDiv;
