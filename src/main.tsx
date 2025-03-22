import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

//
// https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e
// https://www.youtube.com/watch?v=SOwKHCwfj08&ab_channel=Hackmyhead
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
