import React,{useEffect} from 'react';
import axios from 'axios';


const Order=({iscalled})=>{
    useEffect(()=>{
        fetchUser()
       
         },[])
       
         const fetchUser=async ()=>{
           const res=await axios.get("https://jsonplaceholder.typicode.com/users");
         }
         console.log('iscalled=>',iscalled)
    return (
        <>
        it is Order component
        </>
    )
};

export default Order;