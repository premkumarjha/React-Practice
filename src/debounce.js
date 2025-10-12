/*  

Technique	      What It Does	                                                                Example Use

Debounce	      Waits until the user stops typing for X ms, then fires.	                       ✅ Ideal for search boxes (fetch only after user stops typing).

Throttle	      Executes the function at most once every X ms, even if user keeps typing.	     ✅ Ideal for scroll, resize, drag events


*/



import React, { useState } from "react";

const DebounceExample = () => {
  const [results, setResults] = useState([]);
  const [user, setUser] = useState([
    { name: "prem" },
    { name: "sonu" },
    { name: "rakesh" },
    { name: "rahul" },
    { name: "ajay" },
  ]);

  /* once we will stop typing after one sec of that fun will be called., also check  ....other scanario.. exapliand below
  
  Scenario 1: User types continuously (e.g., typing "Hello")
text
User types: H -> e -> l -> l -> o (all within 1 second)
┌─ "H" at 0ms   → timer starts (1000ms)
   ├─ "e" at 200ms → cancel previous (800ms left), new timer (1000ms)
   ├─ "l" at 400ms → cancel previous (800ms left), new timer (1000ms)
   ├─ "l" at 600ms → cancel previous (800ms left), new timer (1000ms)
   └─ "o" at 800ms → cancel previous (800ms left), new timer (1000ms)
      ╰─ After 1800ms (1000ms from last keystroke) → function called with "Hello"

Scenario 2: User types one char, waits > 1 sec, types another
text
User types: "H" → waits 1.5 sec → "e"
┌─ "H" at 0ms   → timer starts (1000ms)
   ╰─ At 1000ms → function called with "H" (waited full delay)
┌─ "e" at 1500ms → new timer starts (1000ms)
   ╰─ At 2500ms → function called with "He" (waited full delay)


Scenario 3: User types slowly, but not enough gap (less than delay)
text
User types: "H" → waits 800ms → "e" → waits 700ms → "l"
┌─ "H" at 0ms   → timer starts (1000ms)
   ├─ "e" at 800ms → cancel previous (200ms left), new timer (1000ms)
   ├─ "l" at 1500ms → cancel previous (300ms left), new timer (1000ms)
   ╰─ After 2500ms (1000ms from last keystroke) → function called with "Hel"


Scenario 4: User types, then deletes, then waits
text
User types: "H" → "e" → backspace → "i" → waits
┌─ "H" at 0ms   → timer starts (1000ms)
   ├─ "e" at 200ms → cancel previous, new timer (1000ms) → "He"
   ├─ backspace at 400ms → cancel previous, new timer (1000ms) → "H"
   ├─ "i" at 600ms → cancel previous, new timer (1000ms) → "Hi"
   ╰─ After 1600ms (1000ms from last keystroke) → function called with "Hi"

Scenario 5: User types but navigates away quickly
text
User types: "H" → "e" → navigates away after 500ms
┌─ "H" at 0ms   → timer starts (1000ms)
   ├─ "e" at 200ms → cancel previous, new timer (1000ms) → "He"
   ├─ User navigates away at 500ms (component unmounts)
   ╰─ Timer still running! Will try to execute at 1500ms but may cause errors


Important Fix for Scenario 5 (Navigation Issue):
javascript
// In React component with cleanup
useEffect(() => {
  const debouncedSearch = debounce((input) => {
    fetchUser(input);
  }, 1000);
  
  return () => {
    // Cleanup on unmount - clear any pending timers
    // This prevents "Can't perform state update on unmounted component" errors
  };
}, []);
Key Patterns Summary:
Continuous typing → Single execution with final value

Gaps > delay → Multiple executions (one per "typing session")

Gaps < delay → Single execution with combined value

Deletions → Treated as normal input changes

Navigation away → Potential memory leaks/errors without cleanup

The golden rule remains: Function executes delay ms after the last input change, regardless of what that change is!
  
  */

  const debounce = (fun, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("args", args[0].target.value);
        fun(...args); //avoid use of fun.apply(this, args),as Since this is React functional code, this isn’t meaningful.
      }, delay);
    };
  };

  const fetchUser = async (input) => {

//case 1:- usning dummyjson.com direct passsing query parameter in sarch...

    // const res = await fetch(`https://dummyjson.com/users/search?q=${input}`);
    // const data = await res.json();
    // console.log("data", data);
    //setResults(data.users || []);


    //case 2:- usning jsonPlaceholder and used filter in response....

    // const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // const data = await res.json();
    // console.log("data", data);

  //case 3:- usning hard code array and used filter in response....

    const results = user.filter((user) =>
      user.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log("results", results);
    setResults(results || []);
  };

  const changeHandler = debounce((e) => fetchUser(e.target.value), 1000);
  
//(e) => fetchUser(e.target.value), 1000

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <input onChange={(e) => changeHandler(e)}></input>
      </div>
      <hr />

      {/* <ul>
        {results.map((v) => (
          <li key={v.id} style={{ display: "block" }}>
            {v?.firstName}
          </li>
        ))}
      </ul> */}

      <ul>
        {results.map((v) => (
          <li key={v.id} style={{ display: "block" }}>
            {v?.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default DebounceExample;
