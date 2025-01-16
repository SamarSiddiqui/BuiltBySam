import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();
  return (
    <div className={`relative overflow-x-hidden cursor-none`}>
      <Cursor />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
