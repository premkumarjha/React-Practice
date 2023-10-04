import React, { useReducer, useEffect, useState } from "react";
//import styled from 'styled-components';
import {
  Prem,
  Button,
  TomatoButton,
  TableWraper,
  Input,
} from "./styledcomponentstyle";
import ResponsiveDialog from "./dialog";
import Content from "./content";

//Note ==>when two or more state change together better use useReducer ,like suppose multiple form field, api data fetch and set state and if error settha in error and also updareloading state,..

//practice all scanario  like typehead common component;  //react input mask ->google
const UsereducerPractice = (props) => {
  const {value} =props;
  const [input, setInput] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const initialState = {
    name: "prem",
    age: 289,
    address: "Bihar",
  };
  // const initialTodos = [
  //     {
  //       id: 1,
  //       title: "Todo 1",
  //       complete: false,
  //     },
  //     {
  //       id: 2,
  //       title: "Todo 2",
  //       complete: false,
  //     },
  //   ];

  const practiceReduccer = (state, actions) => {
    switch (actions.type) {
      case "ADD":
        return { ...state, age: actions?.payload.age + 2 };
        break;
      case "changeAge":

      state.age=actions?.payload.age;

      return {...state}  //return state , will not display updated but yes in console log it will show updated....
    }
  };

  const [data, dispatch] = useReducer(practiceReduccer, initialState); //useReducer kaya karega ki yahi initialState jo ham yaha pass kiye ko  practiceReduccer me pass karega as state, in short waha jo state likha wo aur kuch nahi initial state hi hai;

const changeHandler=(e)=>{
  console.log(e.target.value.match(/(?<=rem)p/g))
 e.target.value.length <=6 && setInput(e.target.value.replace(/-(?=\d)/,""));
 //e.target.value.match(/(?<=rem)p/) && setInput(e.target.value)
//(?<=rem)p

// regx ==================>https://javascript.info/regexp-lookahead-lookbehind#lookahead  ==>imp

  
  //regular expression methods=>str.match(regexp), str.matchAll(regexp), str.split(regexp|substr, limit), str.search(regexp), str.replace(str|regexp, str|func), regexp.exec(str), and regexp.test(str).
}

// useEffect(()=>{
// if(!value){
//   dispatch({ type: "idle"})
// }
// });



  return (
    <>
      <Button
        onClick={() => dispatch({ type: "ADD", payload: { age: data.age } })}
      >
        click to update age
      </Button>
      <p>{data?.age} </p>
      <Input
        onChange={(e) => {
          dispatch({ type: "changeAge", payload: { age: e.target.value } });
        }}
        //https://upmostly.com/tutorials/how-to-react-onkeypress-event
        onKeyDown={(e) => {
          console.log("key=>", e.key, "code=>", e.code);
          if (e.key === "Enter" || e.key === "Tab") {
            console.log("key=>", e.key);
            e.preventDefault(); //ye nahi diya to Enter pe modal kaam nahi karega;
            setOpenModal(true);
          }
          if (e.key === "?" && (e.key === "Shift" || e.key === "Tab")) {
            e.preventDefault(); //ye nahi diya to Enter pe modal kaam nahi karega;
            setOpenModal(true);
          }
        }}
      //  value={value}
      />
         <Button onClick={()=>{console.log('rtyui')}}><i className="fa fa-search"></i></Button>
     

      {openModal && (
        <ResponsiveDialog setOpen={setOpenModal} open={openModal}>
          <Content></Content>
        </ResponsiveDialog>
      )}
    </>
  );
};

export default UsereducerPractice;
