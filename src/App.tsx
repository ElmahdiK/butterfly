import { Outlet } from "react-router-dom";
import "./assets/styles/App.scss";
import Nav from "./components/Nav";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-app">
        <aside>
          <Advertisement imgSrc="/butterfly/images/ads/butterfly.gif" />
        </aside>
        <section>
          <Outlet />
        </section>
        <aside>
          <Advertisement imgSrc="/butterfly/images/ads/butterfly.gif" />
        </aside>
      </main>
      <Footer />
    </>
  );
}
