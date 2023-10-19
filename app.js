/**
 * 
 * <div id='parent'>
 *    <div id='child1'>
 *      <h1>I am H1 tag</h1>
 *      <h2>I am H2 tag</h2>
 *    </div>
 *    <div id='child2'>
 *      <h1>I am H1 tag</h1>
 *      <h2>I am H2 tag</h2>
 *    </div>
 * </div>
 */
const child1 = React.createElement(
  "div",
  {id: 'child1', key: 'c1'},
  [React.createElement("h1", {key: 'ch1'}, "I am H1 tag"), React.createElement("h2", {key: 'ch2'}, "I am H2 tag")]
);

const child2 = React.createElement(
  "div",
  {id: 'child2', key: 'c2'},
  [React.createElement("h1", {key: 'c2h1'}, "I am H1 tag"), React.createElement("h2", {key: 'c2h2'}, "I am H2 tag")]
);

const subHeading = React.createElement(
  "h3",
  {className: 'subheading', key: 'subHeading'},
  "This is sub heading"
)

const headingContainer = React.createElement(
  'div',
  {id:"parent"},
  [child1, child2]
)

// console.log(headingReact);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

console.log(rootReact);

rootReact.render(headingContainer);