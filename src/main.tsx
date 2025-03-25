import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/main.scss";
import App from "./App.tsx";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound";
import Butterfly from "./pages/Butterfly.tsx";
import TV from "./pages/TV.tsx";

// https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e
// https://www.youtube.com/watch?v=SOwKHCwfj08&ab_channel=Hackmyhead
// https://www.youtube.com/watch?v=7wzuievFjrk&ab_channel=CodeWithAjesh
// https://www.youtube.com/watch?v=fuGu-Ponjf8&ab_channel=ToThePointCode
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/shop", element: <Shop /> },
        { path: "/butterfly", element: <Butterfly /> },
        { path: "/tv", element: <TV youtubeID="XTftxuO5_4s" /> },
        { path: "/*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: `/butterfly`,
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
