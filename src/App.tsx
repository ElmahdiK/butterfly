import { Outlet } from "react-router-dom";
import "./styles/App.scss";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
