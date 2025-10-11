import React, { useState, useEffect, use } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  //const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/posts";

  /*

pagination logic:-https://jsonplaceholder.typicode.com/posts?_page=10&_limit=10  //yaha page chnage kro 1,2,3,4,5....etc and limit to 10 fix hai. 

we can check above in postman also. 

_page and _limit , its not page and limit, there is underscore before both.

*/

  //Normally, jab aap bilkul bottom tak pohonch jate ho:  =>window.innerHeight + window.scrollY === document.body.offsetHeight  //what is all these term??
  const fetchPosts = async () => {
    const result = await axios.get(`${url}?_page=${page}&_limit=35`);
    setItems(result.data); //????yha ak problem ki only resent data of that page aaaay but waht baout last ....previus data..
    console.log("result", result);  
  }
  useEffect(() => {
    fetchPosts()
}, [page]);
  return (
    <>
    {items.map(v=><ul><li>{v.title}</li></ul>)}
    </>
  )

};
export default InfiniteScroll;
