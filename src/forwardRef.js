import React from 'react';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
const FordwardRefComponent=React.forwardRef((props,ref)=>{


return (
    <>
{/* React.forwardRef((props, ref) => {}),It takes a function with props and ref arguments.,This function returns a JSX Element. */}
{/* props and ref passed by the parent component. */}



<input type='input' ref={ref} />




    </>
)

});
export default FordwardRefComponent;