import {createRoot} from "react-dom/client";
import Header from './components/Header.js'

const App = () => (
  <div className="app">
    <Header/>
  </div>
)

const rootReact = createRoot(document.getElementById("root"));

rootReact.render(<App/>);