import React from 'react';
import HOC from './heigherOrderComponent';

const Blog=(props)=>{
console.log('props IN blog',props)
    return (
        <>


   {/* //below is wrong way, it will not render data      */}
        
{/* {props.userdata.map((user) =>{
    <li>{user.firstName}</li>
})} */}



{/* //below is right way, it will  render data      */}
    {/* {props.userdata.map((user) =>(
    <li>{user.firstName}</li>
))}    */}


{/* //below is also right way, it will render data      */}

{props.userdata.map((user) =>{
  return  (
    <li key={user.age}>{user.firstName}</li>
    )
})}
        </>
    )
};


export default HOC(Blog);
