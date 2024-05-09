import React from 'react';
import { Outlet,Link,useParams  } from 'react-router-dom';


const ProductItem=()=>{
const id=useParams();

console.log('id id =>',id)
    return (
        <>
       
        {/* <Outlet /> */}
        <div> it is Product Item component,we can show detail of an individual item</div>
        
        </>
    )
};

export default ProductItem;