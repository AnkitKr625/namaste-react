import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const App = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const rootReact = createRoot(document.getElementById("root"));

rootReact.render(<App />);
