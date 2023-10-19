
const headingReact = React.createElement(
  "h1",
  {id: 'heading', key: 'heading'},
  "Hello World from React"
);

const subHeading = React.createElement(
  "h3",
  {className: 'subheading', key: 'subHeading'},
  "This is sub heading"
)

const headigContainer = React.createElement(
  'div',
  {id:"headingContainer"},
  [headingReact, subHeading]
)

// console.log(headingReact);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

console.log(rootReact);

rootReact.render(headigContainer);