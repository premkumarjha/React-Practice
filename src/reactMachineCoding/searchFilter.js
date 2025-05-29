import React, { useState, useRef } from "react";

const SearchFilter = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "David" },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(users);

  const debounce = (func, delay) => {
      let timer;
    return (...args) => {
    
      clearTimeout(timer);
       timer =setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const searchHandler = (text) => {
    const res = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(res);
  };

  const debouncedSearch = debounce(searchHandler, 5000);

  const changeHandler = (e) => {
    const value = e.target.value;
    setSearchText(value);
    debouncedSearch(value); // run debounce with latest value
  };

  return (
    <>
      <input value={searchText} onChange={(e) => changeHandler(e)} />
      <h3>Filtered Output</h3>
      {filteredData?.length > 0
        ? filteredData.map((user) => <p key={user.id}>{user.name}</p>)
        : "No Data found"}
    </>
  );
};

export default SearchFilter;
