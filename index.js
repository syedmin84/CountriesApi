import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";
import Shimmer from "./components/Shimmer";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
      {
        path: "/shimmer",
        element: <Shimmer/>,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
// root.render(<App />);
