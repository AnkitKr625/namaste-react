import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body/>
  },
  {
    path: '/about',
    element: <About/>
  }
])

const App = () => (
  <div className="app">
    <Header />
    <RouterProvider router={router}/>
  </div>
);

const rootReact = createRoot(document.getElementById("root"));

rootReact.render(<App />);
