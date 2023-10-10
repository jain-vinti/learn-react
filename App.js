const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
); // This returns a React JS object with type h1

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // This is used to convert the react object into html tag and add it to the DOM
