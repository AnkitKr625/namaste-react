
const headingReact = React.createElement(
  "h1",
  {},
  "Hello World from React"
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

console.log(rootReact);

rootReact.render(headingReact);