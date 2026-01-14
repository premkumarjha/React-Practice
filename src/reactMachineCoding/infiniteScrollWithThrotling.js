import React, { useState, useEffect } from "react";
import axios from "axios";

const InfiniteScrollWithThrotling = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  //const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/photos";

  /*

pagination logic:-https://jsonplaceholder.typicode.com/posts?_page=10&_limit=10  //yaha page chnage kro 1,2,3,4,5....etc and limit to 10 fix hai. 

we can check above in postman also. 

_page and _limit , its not page and limit, there is underscore before both.

// window.innerHeight → visible height of the viewport (in pixels)
  const viewportHeight = window.innerHeight;

  // window.scrollY → how far (in pixels) the user has scrolled down from the top
  const scrollPosition = window.scrollY;

  // document.body.offsetHeight → total height of the entire body (content area)
  const totalPageHeight = document.body.offsetHeight;

  // Check if user is near the bottom of the page
  // (scrollPosition + viewportHeight) gives the current bottom position of the viewport
  // When that value is close to totalPageHeight, it means the user is at the bottom
  // We use "-100" so new content loads slightly 100px *before*  reaching the bottom
  if (viewportHeight + scrollPosition >= totalPageHeight - 100) {
    // ✅ Trigger your data loading logic
    console.log("Reached bottom!");
  }

*/

  //Normally, jab aap bilkul bottom tak pohonch jate ho:  =>window.innerHeight + window.scrollY === document.body.offsetHeight  //what is all these term??
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`${url}?_page=${page}&_limit=40`);

      // setItems(result.data); //????yha ak problem ki only resent data of that page aaaay but waht baout last ....previus data..
      setItems((prev) => [...prev, ...result.data]);
      setLoading(false);
      console.log("result", result);
      //setPage((prev) => prev + 1);
    } catch (e) {
      console.log("e", e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);

  /*   How throttle logic works:

 lastCall stores the timestamp of the last time the function was called

 When the throttled function is called, it checks: current time - last call time < delay?

 If YES → return immediately (do nothing)

 If NO → update lastCall to current time and execute the function

 */
  const throttle = (func, delay) => {
    let lastCall = 0;
    return () => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return; // Too soon, ignore this call
      }
      lastCall = now;
      return func();
    };
  };
  const handlescroll = () => {
    const viewportHeight = window.innerHeight;

    // window.scrollY → how far (in pixels) the user has scrolled down from the top
    const scrollPosition = window.scrollY;

    // document.body.offsetHeight → total height of the entire body (content area)
    const totalPageHeight = document.body.offsetHeight;
    if (!loading && viewportHeight + scrollPosition >= totalPageHeight - 100) {
      console.log("Reached bottom!");
      setPage((prev) => prev + 1); //jab bhi bottom tak pohonch jate hai to page increase krdo by 1
      //fetchPosts();
    }
  };
  // ❌ WRONG - You're not calling the throttled function
  // const throttledCheckScroll = () => {
  //   throttle(handlescroll, 300); // This returns a function but doesn't call it
  // };

  // ✅ CORRECT
  const throttledCheckScroll = throttle(handlescroll, 3000);
  // useEffect(() => {
  //   window.addEventListener("scroll", handlescroll);
  //   return () => window.removeEventListener("scroll", handlescroll);
  // }, [loading]);
  useEffect(() => {
    window.addEventListener("scroll", throttledCheckScroll);
    return () => window.removeEventListener("scroll", throttledCheckScroll);
  }, [loading]);
  return (
    <>
      {/* //belwo way is wrong because jab bhi loading false hoga to ye re render hoga and items fir se first se aaayega. */}

      {/* {loading ? (
        <h1 style={{color:'red'}}>Loading...</h1>
      ) : (
        items.map((v) => (
          <ul>
            <li>
              {v.id} - {v.title}
            </li>
          </ul>
        ))
      )} */}

      {items.map((v) => (
        <ul key={v.id}>
          <li>
            {v.id} - {v.title}
          </li>
        </ul>
      ))}
      {loading && <h1>Loading...</h1>}
    </>
  );
};
export default InfiniteScrollWithThrotling;
