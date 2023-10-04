import logo from "./logo.svg";
import "./App.css";
import Parent from "./parent";
import UseRefPractice from "./useRef";
import Bloglist from "./blog";
import UsecallbackExample from "./useCallback";
import UseMemoExample from "./useMemo";
import ThrottleExample from "./throttle";
import DebounceExample from "./debounce";
import CenterDiv from "./centerDiv";
import Boxmodal from "./boxmodal";
import Imagelider from "./slider";
import Accordion from "./accordion";
import NestedRoute from "./nestedroutes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PositionPractice from "./position";
import LazyloadingPractice from "./lazyloading";
import React, { Suspense } from "react";
import FordwardRefComponent from "./forwardRef";
import NavigationPractice from "./navbar";
import StyledComponent from "./styledcomponent";
import NestedCss from "./nestedCss";
import FormFieldFocus from './formFieldFocus';
import UsereducerPractice from './useReducerPractice';
import PrimarySearchAppBar from './appbar'
import UserTable from './tableData';
import NoteForm from './form';
//dynamic import
//const LazyloadingPractice=React.lazy(()=>import('./lazyloading'));
//const Parent=React.lazy(()=>import('./parent'));

const  App=()=> {

  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
  return (
    <div>
      {/* <StyledComponent /> */}
      {/* <NoteForm />  */}
      
      <UserTable />
    {/* <UsereducerPractice /> */}
      {/* <FormFieldFocus></FormFieldFocus> */}
      {/* <Suspense style={{color:'red'}} fallback={'Loading....'}> */}

      {/* <UseRefPractice></UseRefPractice>
     <Bloglist></Bloglist>
    <UsecallbackExample />
    <DebounceExample />
    <CenterDiv />
    <Boxmodal />
    <Imagelider />
   <Accordion />
   <ThrottleExample />
 <PositionPractice />  */}

      {/* <LazyloadingPractice /> */}
      {/* </Suspense> */}
      


    </div>
  );
}

export default App;

{
  /* <BrowserRouter> */
}
{
  /* <NavigationPractice /> */
}
// <Routes>
//   <Route exact path="/" element={<NestedRoute />} />
//   <Route exact path="/product/*"  element={<Accordion />} >
{
  /* <Route exact path=":id"  element={<Parent />}   />
          <Route exact path="prem"  element={<Imagelider />}   /> */
}
//     </Route>

//   </Routes>
// </BrowserRouter>
