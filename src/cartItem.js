import React from "react";
import { Outlet, Link } from "react-router-dom";

const CartItem = () => {
  return (
    <>
      {/* <Outlet /> */}
      {/* <div> it is cart Item component</div> */}
      <button>Test button 1</button>
      <button onMouseEnter={() => console.log("Hovered")}>Button</button>
    </>
  );
};

export default CartItem;
