import React from "react";
import { Outlet, Link } from "react-router-dom";
const Product = () => {
    let id=6;
  return (
    <>
      <div>it is Product component</div>
      <span style={{ marginRight: 30 }}>
        <Link to="list">Product List</Link>
      </span>
      <span style={{ marginRight: 30 }}>
        <Link to="cart">cart Item</Link>
      </span>


      <Outlet />
    </>
  );
};

export default Product;
