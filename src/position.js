import React from 'react';

const PositionPractice=()=>{


    return ( 
    <>
    {/* jab ye below div ko posotioned bnayenge to blue wala div ye posiioned div ke hisa se positon lega, but jab ye positoned nahi to ye body ke hisab se lega.. */}
        <div style={{height:500,width:500,border: '2px dotted black',marginLeft:40,marginTop:40}}> 
            <div style={{height:200,width:200,backgroundColor:'red',}}>red</div>
            <div style={{height:200,width:200,backgroundColor:'blue',position:'absolute',top:0,left:0 }}>blue</div>

        </div>

        </>
    )
};

export default PositionPractice;