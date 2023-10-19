
const headingReact = React.createElement(
  "h1",
  {id: 'heading'},
  "Hello World from React"
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(headingReact);