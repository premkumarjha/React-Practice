import React from 'react';
import { Link,NavLink } from "react-router-dom";

const Header=()=>{


  // textDecoration:'none',
  //     marginRight:20
    return (
        <>
        {/* <NavLink  style={({ isActive, isPending, isTransitioning }) => {
    return {
      backgroundColor: isActive ? "red" : "",
      fontWeight: isPending ? "red" : "black",
      textDecoration:'none',
      marginRight:20
      
    };
  }} to="home">Home</NavLink> */}

        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      backgroundColor: isActive ? "red" : "",
      fontWeight: isPending ? "red" : "black",
      textDecoration:'none',
      marginRight:20
   
      
    };
  }} to="about">About</NavLink>

        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      backgroundColor: isActive ? "red" : "",
      fontWeight: isPending ? "red" : "black",
      textDecoration:'none',
      marginRight:20
      
    };
  }} to="admin">Admin</NavLink>

        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      backgroundColor: isActive ? "red" : "",
      fontWeight: isPending ? "red" : "black",
      textDecoration:'none',
      marginRight:20
      
    };
  }} to="product">Product</NavLink>

        <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      backgroundColor: isActive ? "red" : "",
      fontWeight: isPending ? "red" : "black",
      textDecoration:'none',
      marginRight:20
      
    };
  }} to="order">order</NavLink>
   <NavLink style={({ isActive, isPending, isTransitioning }) => {
    return {
      backgroundColor: isActive ? "red" : "",
      fontWeight: isPending ? "red" : "black",
      textDecoration:'none',
      marginRight:20
      
    };
  }} to="user">User</NavLink>

        
        
        </>
    )
};

export default Header;