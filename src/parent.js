import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Child from "./child";
import FordwardRefComponent from './forwardRef';
import  UsereducerPractice from  './useReducerPractice'
const Parent = () => {
  let [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const [marks, setMarks] = useState(0);
  let [title, setTitle] = useState('hiii');
  let [title1, setTitle1] = useState('');
  const [data, setData] = useState({ 
    name: "John",
    contact: {
        phone: "987-654-3210",
        email: "john123@xyz.com",
        address: {
            city: "Berlin",
            country: "Germany"
        }
    }
});
  let name=''
const prentRef=useRef(0);
  let test = 0;
//console.log('dataaa==>',data)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setTitle(json.title))
  },[])

  // const expensiveCalculations = (count) => {
  //   for (let i = 0; i <= 1000000000; i++) {}
  //   return count * 2;
  // };
  // const result = useMemo(() => {
  //   expensiveCalculations(count);
  // }, [count]);

  const increment = () => {
    setAge(age+1)
   
  };

  //console.log("outside method ,count", count);
  // const increaseAge = () => {
  //   // console.log('hii')
  //   setAge(age + 1);
  // };
  //console.log("outside method,count value", test);
  const debounce = (fun, delay) => {
    let timer;

    return function (...args) {
      clearTimeout(timer); // clear kiya to sirf last wala timeer hai wahi..
      timer = setTimeout(function () {
        //console.log(Date.now()); //you can check this by commenting and without commenting clearTimeout.  //console me jo prem wo to event.target.value jo ki input field me jo hai wo value..
        fun.apply(this, args);
      }, delay);
    };
  };

  //const onChangeHandler = debounce((event) => {console.log("text", event.target.value)}, 1000); //yaha ham direct debounce ko call kar rahe ...so ham event direct..

  //const onChangeHandler =(event)=>{
  // debounce((event) => {                                      //yaha ye call back function...... ke andar.........just try _event than console ka event top ka params..
  // in low level..just socho ki ak layer andar h....and so SCOPE.....debounce ke andar callback.......so see scope..
  // console.log("text", event.target.value)}, 1000)

  //    let abc=  debounce((event) => {                              //is tarah se karenge to phir yaha jo debounce ka event wo onChangeHandler ke params wala event..

  //     console.log("text", event.target.value)}, 1000)

  //  abc(event);
  //}

  const throttle = (funct, delay) => {
    let flag = true;
   // console.log("hey prem");
    return function (){
      //clearTimeout(throtletimer);
      //if (flag) {
        funct.apply(this);
     //   console.log("hey prem");
        flag = false;
      //}
      setTimeout(() => {
        flag = true;
      }, delay);
    };
  };

  // useEffect(()=>{
  //   setTitle1(title)
  // },[title])

  const cb=()=>{
    setTitle('sohan');
  }
const onclickApi= async(cb)=>{

  //Use the fetch() method to return a promise that resolves into a Response object. 
  //To get the actual data, you call one of the methods of the Response object e.g., text() or json(). 
  //These methods resolve into the actual data.

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => {
  //       setTitle(data.title)
  //     });
  //     setTitle('sohan');

  const val=await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const val1=await val.json();
  cb()
  setTitle(val1.title);
  
  // setTimeout(()=>{
  //   setTitle('mohan')
  // },500);
 // setTitle('sohan');
  //setTitle(val1.title)
  //name=title;
  //console.log('name=>',name)
      
};

   const onclickhandler=()=>{
    prentRef.current.focus();
   }
   const getstatusParent=(e)=>{
   
   if(e ==='ram'){
    console.log('event from child ',e);
   }
    // if(e =='onchange'){
    //   console.log('it is onchange')
    // }
    // if(e =='onselect'){
    //   console.log('it is onselect')
    // }
   }
  

   const parentTestMethod=(abc)=>{   //ye event child se aa raha hai
//console.log('in parent at 151',e); 
//console.log('in parent at key press',e.key); //give all keys whatever we will press;
//abc();
   }
  return (
    <>
      <hr />
      <div>
        <div
          style={{
            width: "1000px",
            height: "90px",
            marginLeft: "20px",
            paddingRight: "30px",
          }}
        >
          {/* <button onClick={() => increment()}>Increase counter</button>
          {age} */}
          {/* <button onClick={() => increaseAge()}>Increase age</button> {age} */}
          {/* <button onClick={() => increaseMark()}>Increase marks</button>  */}
          {/* <input onChange={(e)=>onChangeHandler(e)}></input> */}
          {/* <input onChange={onChangeHandler}></input> */}






            {/* below is for forward ref */}
            {/* <FordwardRefComponent ref={prentRef}/> */}
            <div>
              <div> title is    {title}</div>
          
              {title1}
          {/* <button onClick={() => onclickhandler()}>clikc the button to focus on child input field</button> */}
          {/* <button onClick={() => onclickApi(cb)}>call method</button> */}
          <button onClick={() => onclickApi(cb)}>call child merhod from parent</button>
          </div>
        </div>
        <hr />
       
        <Child />
        {/* <UsereducerPractice 
        value={age}
        getstatsus={getstatusParent}
        />  */}
      </div>
    </>
  );
};
export default Parent;
