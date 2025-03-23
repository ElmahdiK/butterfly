import { Outlet } from "react-router-dom";
import "./styles/App.scss";
import Nav from "./components/Nav";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-app">
        <aside>
          <Advertisement />
        </aside>
        <section>
          <Outlet />
        </section>
        <aside>
          <Advertisement />
        </aside>
      </main>
      <Footer />
    </>
  );
}
