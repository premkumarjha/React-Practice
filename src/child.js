import React, { useState, useCallback, memo,useEffect } from "react";
import {useDispatch} from 'react-redux';
import {
  Prem,
  Button,
  TomatoButton,
  TableWraper,
  Input,
} from "./styledcomponentstyle";
const Child = () => {
  //const dispatch=useDispatch();
  //const { age, ageCounter,onChange,setAge,setTitle,getstatsus,setData,data ,testMethod} = props;
  //console.log('props',props)
  const [name, setName] = useState("");

  return (
    <>
      <p>hii</p>
       {/* <input name="prem" onKeyDown={()=>{testMethod()}}  onChange={(e)=>{setData({...data,contact:{...data.contact,address:{...data.contact.address,city:e.target.value}}})}}/> */}
    </>
  );
};

export default memo(Child);
//export default Child;
