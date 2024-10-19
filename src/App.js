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
import React, { lazy, Suspense, useState } from "react";
import FordwardRefComponent from "./forwardRef";
import NavigationPractice from "./navbar";
import StyledComponent from "./styledcomponent";
import NestedCss from "./nestedCss";
import FormFieldFocus from "./formFieldFocus";
import UsereducerPractice from "./useReducerPractice";
import PrimarySearchAppBar from "./appbar";
import UserTable from "./tableData";
import NoteForm from "./form";
import EventDelegation from "./eventDelegation";
import InterviewQuestion from "./interviewQues";
import LoderTillPageWidth from "./loaderTillPageWidth";
import ScrollLazyLoadDropdown from "./dropDown";
import Header from "./header";
import About from "./about";
import Admin from "./admin";
import Product from "./product";
import Order from "./order";
import Login from "./login";
import ProtectedRoutes from "./protectedRoute";
import ProductList from "./productList";
import CartItem from "./cartItem";
import ProductItem from "./productItem";
import PageNotFound from "./pageNotFound";
import Users from "./users";
import MinMaxHeight from './minMaxHeight';
import Test from "./test1";
//dynamic import
const LazyloadingAbout = React.lazy(() => import("./about"));
const LazyloadingProduct = React.lazy(() => import("./product"));
const LazyloadingOrder = React.lazy(() => import("./order"));
const LazyloadingProductList = React.lazy(() => import("./productList"));
const LazyloadingProductItem = React.lazy(() => import("./productItem"));
const LazyloadingCartItem = React.lazy(() => import("./cartItem"));

const App = () => {
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  const [isLoign, setIsLogin] = useState(true);

  return (
    <div>
      {/* <MinMaxHeight /> */}
      {/* <StyledComponent /> */}
      {/* <NoteForm />  */}
      {/* <InterviewQuestion /> */}
      {/* <LoderTillPageWidth /> */}
      {/* <UserTable /> */}
      {/* <EventDelegation></EventDelegation> */}
     
      {/* <UsereducerPractice /> */}
      {/* <FormFieldFocus></FormFieldFocus> */}
      {/* <Suspense style={{color:'red'}} fallback={'Loading....'}> */}
      {/* <Bloglist></Bloglist> */}
      {/* <UseRefPractice></UseRefPractice>

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

      {/* <ScrollLazyLoadDropdown /><MinMaxHeight /> */}
      <div style={{}}>{isLoign && <Header />}</div>

      <Routes>
        {/* {!isLoign && } */}
        
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/test" element={<Test />}></Route>
        
        {/* {isLoign && <Route exact path="/" element={<Suspense><LazyloadingAbout /></Suspense>}></Route>} */}
        {/* <Suspense fallback="loading..............."> */}
          <Route exact path="about" element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingAbout /></Suspense>} />

          <Route path="product" element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingProduct /></Suspense>}>
            {/* just niche ka jo index route hai wo bhi parent route path pe hi render hoga */}
            <Route index element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingProductList /></Suspense>} />
            <Route path="list" element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingProductList /></Suspense>} />
            <Route path="cart" element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingCartItem /></Suspense>} />
            <Route path="product/:id" element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingProductItem /></Suspense>} />
          </Route>
          <Route path="order" element={<Suspense fallback={<div style={{color:'red'}}>Loading....</div>}><LazyloadingOrder /></Suspense>} />
        {/* </Suspense> */}
        <Route
          path="admin"
          element={
            <ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>
          }
        />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="user/*" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

