
/*
Configuring Parcel:
1. Create index.html
2. Create App.js
3. Add script in package.json 
"scripts": {
    "start": "parcel index.html"
  },
4. Run npm start
*/



/*
For Build 
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },

npm run build
*/

// npm install --save-dev parcel ( to install parcel as a dev dependency)

// npm run build is used for production build. It minifies the code and removes all the comments.

// Difference between npm and npx 
// npm is a package manager. It is used to install packages. 
// npx is a package runner. It is used to run packages.


// Why keys are important in react?
// Keys are used to identify unique elements in a list. Keys help react identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.


// React.createElement  => Object => HTML(DOM)
// React.createElement returns an object which is then converted to HTML using ReactDOM.render() and then added to the DOM. 



// 1. What is a Polyfill?
// Definition: A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// Modern javascript code is converted to ES5 code using Babel. Babel is a polyfill for ES6 code. 


// What is jsx?
// JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.

// It is a html like syntax that is used to write react code. It is not a requirement to use JSX in react. JSX makes it easier to write and add HTML in React.
// JSX => Babel => React.createElement => Object => HTML(DOM)

//Babel 
// Babel is a JavaScript compiler. Babel is a polyfill for ES6 code. It converts modern javascript code to ES5 code.  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
// Abstract Syntax Tree (AST) is a data structure that represents the source code in a tree-like structure. Babel uses AST to convert modern javascript code to ES5 code.


/*
JSX 
import React from "react";
import ReactDOM from "react-dom";

const heading = (
  <h1 id="title" key="h1">
    Hello World
  </h1>
); // JSX is converted to React.createElement() by Babel

const root = document.getElementById("root"); // root is a DOM element which is used to render the react component 

ReactDOM.render(heading, root); // ReactDOM.render() is used to render the react component to the DOM

*/

// Difference between React Element and React Component
// React Element is an object that describes a DOM node. It is a plain object that is created by React.createElement() or JSX. 
// React Component is a function or a class that accepts an input and returns a React Element.


// What is a React Component?
// A React Component is a function or a class that accepts an input and returns a React Element.

//React Component 
// -- Functional Based Component
// -- Class Based Component


// Functional Based Component- It is a function that accepts an input and returns a React Element or JSX .

// Component Composition - It is a way to combine multiple components to create a new component.

