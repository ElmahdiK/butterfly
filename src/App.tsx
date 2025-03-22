import "./styles/App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

// https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/butterfly", // Ajout du basename ici
  }
);

const App = () => {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
