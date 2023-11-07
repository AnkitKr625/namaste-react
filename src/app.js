import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => (
  <div className="app">
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  </div>
);

const rootReact = createRoot(document.getElementById("root"));

rootReact.render(<App />);
