import React, { useState, UseEffect } from "react";
import Parent from './parent';
import { BrowserRouter, Routes, Route, Link,Outlet } from 'react-router-dom';
import Imagelider from './slider';
const Accordion = () => {
  const listData = [
    { heading: "section1 ", data: "this is section one", display: "none" },
    { heading: "section2 ", data: "this is section two", display: "none" },
    { heading: "section3 ", data: "this is section three", display: "none" },
  ];
  const [display, setDisplay] = useState(listData);
  //const [list, setList] = useState(listData);
  const changeSection = (index) => {
    let arr=[]
    const value = display.map((data, i) => {
      if (i == index) {
        return { ...data, display: "block" };
      } else {
        return { ...data, display: "none" };
      }
    });
   // console.log(value);
    setDisplay(value);


    //************************below will also work......................... */

    // display.forEach((data, i) => {
    //   if (i == index) {
    //     arr.push({ ...data, display: "block" })
    //   } else {
    //     arr.push({ ...data, display: "none" })
    //   }
    // });
    // setDisplay(arr);
    // console.log("display", display);
  };
  return (
    <>
    <Link to='/product/90'>user</Link>
    <Link to='/product/prem'>prem</Link>
    
    <Routes>
    <Route exact path=":id"  element={<Parent />}   />
    <Route exact path="prem"  element={<Imagelider />}   />
    </Routes>

    
        {/* <Outlet /> */}


      {/* <table style={{ width: "100%" }}>
        {display.map((data, index) => (
          <>
            <tr>
              <th>
                {" "}
                <button
                  key={index}
                  style={{ width: "100vh" }}
                  onClick={() => changeSection(index)}
                >
                  {data.heading}
                </button>
              </th>
            </tr>
            <tr>
              <td style={{ display: data.display, width: "100vh" }}>
                {data?.data}
              </td>
            </tr>
          </>
        ))}
      </table> */}
    </>
  );
};

export default Accordion;

{
  /* <button key={index} onClick={() => changeSection(index)}>
            {data.heading}
          </button> */
}
{
  /* <div style={{ display: data.display }}>{data?.data}</div> */
}
