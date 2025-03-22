import "./styles/App.scss";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Nav from "./components/Nav";

// https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
