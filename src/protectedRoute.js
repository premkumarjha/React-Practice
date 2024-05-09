import React,{useState} from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoutes=(props)=>{
const [isProtected,setIsProtected]=useState(true)
console.log(props)
    return (
        <>
        {!isProtected ? <Navigate to={{ pathname: "/login"}} />: props?.children}
        </>
    )
};

export default ProtectedRoutes;