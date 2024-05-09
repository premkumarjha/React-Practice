import { red } from "@mui/material/colors";
import React from "react";

const MinMaxHeight = () => {
  return (
    <>
    {/* minHeight:30 */}
      <div style={{height:30,backgroundColor:'red'}}> 
      From Wikipedia, the free encyclopedia
For the open-source mobile application framework, see React Native.
React

Original author(s)	Jordan Walke
Developer(s)	Meta and community
Initial release	May 29, 2013; 10 years ago[1]
Stable release	
18.2.0[2] Edit this on Wikidata / 14 June 2022; 22 months ago
Repository	
github.com/facebook/react Edit this at Wikidata
Written in	JavaScript
Platform	Web platform
Type	JavaScript library
License	MIT License
Website	react.dev 
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]

React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.
From Wikipedia, the free encyclopedia
For the open-source mobile application framework, see React Native.
React

Original author(s)	Jordan Walke
Developer(s)	Meta and community
Initial release	May 29, 2013; 10 years ago[1]
Stable release	
18.2.0[2] Edit this on Wikidata / 14 June 2022; 22 months ago
Repository	
github.com/facebook/react Edit this at Wikidata
Written in	JavaScript
Platform	Web platform
Type	JavaScript library
License	MIT License
Website	react.dev 
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]

React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.

Notable features
Declarative
React adheres to the declarative programming paradigm.[10]: 76  Developers design views for each state of an application, and React updates and renders components when data changes. This is in contrast with imperative programming.[11]

Components
React code is made of entities called components.[10]: 10–12  These components are modular and reusable.[10]: 70  React applications typically consist of many layers of components. The components are rendered to a root element in the DOM using the React DOM library. When rendering a component, values are passed between components through props (short for "properties"). Values internal to a component are called its state.[12]

The two primary ways of declaring components in React are through function components and class components.[10]: 118 [13]: 10 

Function components
Function components are declared with a function (using JavaScript function syntax or an arrow function expression) that accepts a single "props" argument and returns JSX. From React v16.8 onwards, function components can use state with the useState Hook.

React Hooks
On February 16, 2019, React 16.8 was released to the public, introducing React Hooks.[14] Hooks are functions that let developers "hook into" React state and lifecycle features from function components.[15] Notably, Hooks do not work inside classes — they let developers use more features of React without classes.[16]

React provides several built-in hooks such as useState,[17][13]: 37  useContext,[10]: 11 [18][13]: 12  useReducer,[10]: 92 [18][13]: 65–66  useMemo[10]: 154 [18][13]: 162  and useEffect.[19][13]: 93–95  Others are documented in the Hooks API Reference.[20][10]: 62  useState and useEffect, which are the most commonly used, are for controlling state[10]: 37  and side effects,[10]: 61  respectively.

Rules of hooks
There are two rules of hooks[21] which describe the characteristic code patterns that hooks rely on:

"Only call hooks at the top level" — don't call hooks from inside loops, conditions, or nested statements so that the hooks are called in the same order each render.
"Only call hooks from React functions" — don't call hooks from plain JavaScript functions so that stateful logic stays with the component.
Although these rules can't be enforced at runtime, code analysis tools such as linters can be configured to detect many mistakes during development. The rules apply to both usage of Hooks and the implementation of custom Hooks,[22] which may call other Hooks.

Server components
React server components or "RSC"s[23] are function components that run exclusively on the server. The concept was first introduced in the talk Data Fetching with Server Components Though a similar concept to Server Side Rendering, RSCs do not send corresponding JavaScript to the client as no hydration occurs. As a result, they have no access to hooks. However, they may be asynchronous function, allowing them to directly perform asynchronous operations:
      </div>
    </>
  );
};

export default MinMaxHeight;
