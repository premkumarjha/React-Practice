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
import { BrowserRouter, Routes, Route, Link,useNavigate, Navigate,useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import PositionPractice from "./position";
import LazyloadingPractice from "./lazyloading";
import React, { lazy, Suspense, useState ,useEffect} from "react";
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

import Login from "./login";
import ProtectedRoutes from "./protectedRoute";
import ProductList from "./productList";
import CartItem from "./cartItem";
import ProductItem from "./productItem";
import PageNotFound from "./pageNotFound";
import Users from "./users";
import UserList from "./userList";
import PostList from "./postList";
import MinMaxHeight from './minMaxHeight';
import Test from "./test1";
import CheckAuthCompo from "./checkAuth";
import axios from 'axios';
import Order from "./order";
import GridLayout from "./gridLayout/gridLayout";
import FlexLayout from "./flexLayout/flexLayout";
import MaterialUiGridLayout from "./materialUiGridLayout";
import FormResponsive from "./formResponsive/index";
import ResponsiveMenu from "./menuResponsive/sidebarmenu";
import CreditCard from "./creditCard";
import AutoCompleteComponent from "../src/reactMachineCoding/autocomplete";
import SecureForm from "../src/reactMachineCoding/SecureForm";
import TrafficLight from "./reactMachineCoding/trafficLight";
import FetchData from "./reactMachineCoding/apiCall";
import SearchFilter from "./reactMachineCoding/searchFilter";
import Home from "./reactMachineCoding/home";
import LoginForm from "./reactMachineCoding/loginForm";
import counterUsingRedux from "./reactMachineCoding/counterUsingRedux";
import Timer from "./reactMachineCoding/timer";
import InfiniteScrollList from "./reactMachineCoding/virtulization";
import AgGridTable from "./reactMachineCoding/agGridTable";
import Counter from "./reactMachineCoding/counter";
import TodoAppWithoutRedux from "./reactMachineCoding/todoAppWithoutRexux";
import TodoAppWithRedux from "./reactMachineCoding/todoAppWithRexux";
import InfiniteScroll from "./reactMachineCoding/infiniteScroll";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./redux/store";
// const store = createStore(rootReducer);
//dynamic import
const LazyloadingAbout = React.lazy(() => import("./about"));
const LazyloadingProduct = React.lazy(() => import("./product"));
// const LazyloadingOrder = React.lazy(() => import("./order"));
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
  //const { status,posts,isLoading, error } = useSelector((state) => state?.posts);
  const navigate = useNavigate();
  const location = useLocation();
  const [iscalled,setIscalled]=useState(false);
 



  useEffect(()=>{
    fetchProduct()
setIscalled(true);
  },[])

  const fetchProduct=async ()=>{
    const res=await axios.get("https://dummyjson.com/products");
  }

  console.log('iscalled in app',iscalled)
  // useEffect(() => {
  //   // const checkStatus = async () => {
  //     try {
      

        
  //       if (status === 401) {
  //         navigate('/login');  // Navigate to Home page if status is 200
  //       } 
  //     } catch (error) {
  //       console.error('Error checking status:', error);
  //     }
  //  // };

  //   //checkStatus();
  //   // if(status==401){
  //   //   navigate('/login');
  //   // }

  // }, [navigate]);
  // window.onload = function() {
  //   if (status === 200) {
  //     return <Navigate to="/profile" replace />;
  //   }
    // Your logic here, like initializing a feature or fetching data
  //};
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
        {/* <Route exact path="/" element={<Navigate to= "/about"/>}></Route> */}
        {/* {iscalled &&  */}
        Bloglist
       <>
       {/* <Route exact path="/" element={<TrafficLight /> }></Route> */}
         <Route exact path="/" element={<DebounceExample /> }></Route>
       <Route exact path="/postList" element={<PostList />}>
       </Route>
       <Route exact path="about" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingAbout /></Suspense>} />
       <Route path="product" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProduct /></Suspense>}>
      
            {/* just niche ka jo index route hai wo bhi parent route path pe hi render hoga */}
            <Route index element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProductList /></Suspense>} />
            <Route path="userList" element={<UserList iscalled={iscalled} />} />
            <Route path="cart" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingCartItem /></Suspense>} />
            <Route path="product/:id" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProductItem /></Suspense>} />
          </Route><Route path="order" element={<Order />} />
          <Route  path="/gridLayout" element={<GridLayout />}> </Route>
       <Route  path="/flexLayout" element={<FlexLayout />}> </Route>
       <Route  path="/formResponsive" element={<FormResponsive />}> </Route>
       <Route  path="/materialUiGridLayout" element={<MaterialUiGridLayout />}> </Route>
       <Route  path="/responsiveMenu" element={<ResponsiveMenu />}> </Route>
       <Route  path="/creditCard" element={<CreditCard />}> </Route>
        <Route  path="/autoComplete" element={<AutoCompleteComponent />}> </Route>
        <Route  path="/secureForm" element={<SecureForm />}> </Route>
          {/* <Route
              path="admin"
              element={<ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>} /><Route exact path="/login" element={<Login />} /> */}
              </>
        {/* } */}
       {/* {status== 200 && <><Route exact path="/" element={<Navigate to="/userList"  />} />
       <Route exact path="/test" element={<Test />}>
       </Route><Route exact path="/userList" element={<UserList />}></Route>
       <Route exact path="/postList" element={<PostList />}></Route>
       <Route exact path="about" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingAbout /></Suspense>} /><Route path="product" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProduct /></Suspense>}>

          <Route index element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProductList /></Suspense>} />
          <Route path="list" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProductList /></Suspense>} />
          <Route path="cart" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingCartItem /></Suspense>} />
          <Route path="product/:id" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingProductItem /></Suspense>} />
        </Route><Route path="order" element={<Suspense fallback={<div style={{ color: 'red' }}>Loading....</div>}><LazyloadingOrder /></Suspense>} /><Route
            path="admin"
            element={<ProtectedRoutes>
              <Admin />
            </ProtectedRoutes>} /><Route path="user/*" element={<Users />} /><Route exact path="/login" element={<Login />} /></>
      //  </Route>
      } */}
       
        
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
};

export default App;

