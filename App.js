import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "This is Vinti");
const root = ReactDOM.createRoot(document.getElementById("root"));

// React element is created by Babel while compiling this JSX code
const titleElement = (
  <h1 id="heading" className="heading">
    This is Vinti from JSX element
  </h1>
);

const TitleComponent = () => (
  <h1 id="heading" className="heading">
    This is Vinti from JSX component
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    {console.log(titleElement)}
    {titleElement}
    <h1 className="heading">Vinti Jain demo of Functional Component</h1>
  </div>
);

root.render(<HeadingComponent />);
