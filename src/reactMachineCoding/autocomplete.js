import React, { useState } from "react";
import "./autocomplete.css";
const AutoCompleteComponent = () => {
  /*    

ex:- open chrome and type somehting , there will be autocomplete....

1.>implemet autocomplete , handle no data found case
2.>once suggestion made,suggestion should be hidden 
3.>selected item should be shown differently then rest of options
3.>user should able to clear suggestion
4.>fetch data from api
5.>show loader in list until list is populated
6.>implement debounce


explanin - how implement debounce-
***********************************
.>it will take 2 arguments , function and delay
.>it will return a new function
.>This returned new function is what we actually use when calling the debounced func
.>returned new function does two main things:
        1.>Clears the previous timer → clearTimeout(timer);
        2.>Starts a new timer → setTimeout(() => func.apply(this, args), delay);

        //
//ref of below function =>https://github.com/rahuulmiishra/2_autocomplete/blob/main/src/auto-complete/AutoComplete.jsx

function debounce(callback, delay) {
  let timeoutId = "";
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

*/


  const [suggestions, setSuggestions] = useState([
    "apple",
    "appy",
    "orange",
    "organ",
    "banana",
    "krishana",
    "ma kali",
  ]);
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);


  //90-100%; 

//1-2 number, and photo and =>

  const debounce = (func, delay) => {
    let timer = "";
    return function (...args) {
      ///console.log("args",args);
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const changeHandler = (value) => {
    const filterSuggestion = suggestions?.filter((v) => v?.startsWith(value));
    setData(filterSuggestion);
    console.log("value", value);
  };

  const debouncedChangeHandler = debounce(changeHandler, 1000);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        //onChange={(e) => debouncedChangeHandler(e?.target?.value)}
        onChange={(e) => changeHandler(e?.target?.value)}
        style={{ height: "50px", width: "300px" }}
        value={selected}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "300px",
          overflow: "auto",
          height: 300,
        }}
      >
        {data?.map((v) => (
          <button onClick={()=>setSelected(v)}>{v}</button>
        ))}
      </div>
    </div>
  );
};
export default AutoCompleteComponent;
