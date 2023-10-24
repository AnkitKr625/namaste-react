import {createElement} from "react";
import {createRoot} from "react-dom/client";

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
const child1 = createElement(
  "div",
  {id: 'child1', key: 'c1'},
  [createElement("h1", {key: 'ch1'}, "I am H1 tag"), createElement("h2", {key: 'ch2'}, "I am H2 tag")]
);

const child2 = createElement(
  "div",
  {id: 'child2', key: 'c2'},
  [createElement("h1", {key: 'c2h1'}, "I am H1 tag"), createElement("h2", {key: 'c2h2'}, "I am H2 tag")]
);

const subHeading = createElement(
  "h3",
  {className: 'subheading', key: 'subHeading'},
  "This is sub heading"
)

const headingContainer = createElement(
  'div',
  {id:"parent"},
  [child1, child2]
)

const Title =  () => (<h1>This is title component</h1>);

const FunctionComponent = () => (
  <div>
    <Title/>
    This is functional Component</div>
)

console.log(Title)

const rootReact = createRoot(document.getElementById("root"));

rootReact.render(<FunctionComponent/>);