import React from "react";
import ReactDOM from "react-dom";

const heading = (
  <h1 id="title" key="h1">
    Hello World
  </h1>
); // React element(JSX)

const Header = () => {
  return (
    <div>
       {heading} {/*We use curly braces to add a react element to a react component  */}
      <h1>I'm Arsenic</h1>
    </div>
  );
}

// React Component
const Header2 = () => {
  return (
    <div>
       <Header/> {/*We use tags directly to use functional component inside another functional component  */}
       {Header()} {/*We use curly braces and call the functional component*/}
      <h1>I'm Learning React</h1>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Header2 />);
