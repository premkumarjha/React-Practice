import React, { useState, useEffect } from "react";

//autocomplete
//Multi-step Form
//Drag and Drop

const AutoCompleteInterviewComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const listOfSuggestions = ["prem","sonu","monu","pinku","pappu","vishal","vipul","aman","anurag","ankit"];
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  /*
onChange={inputHandler} ==>React calls your function + passes event automatically
onChange={()=>inputHandler()}  =>You call function manually; no event passed
onChange={(e) => fn(e)} =>You call function yourself + pass event
Use this most of the time:=> onChange={inputHandler}
Use arrow function only when you need custom parameters: onChange={(e) => inputHandler(e.target.value, customParam)}

    */
  const inputHandler = (e) => {
    setInputValue(e.target.value);
    const res = listOfSuggestions.filter((item) =>
      item.startsWith(e.target.value)
    );
    setFilteredSuggestions(res);
    console.log("res", res);
  };
  useEffect(() => {
    if (inputValue === "") {
      setFilteredSuggestions([]);
    }
  }, [inputValue]);
  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={inputHandler} />
        {filteredSuggestions.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
};

export default AutoCompleteInterviewComponent;
