import { Outlet } from "react-router-dom";
import "./Layout.css";

import Menubar from "./Menubar";

export default function Layout() {
  return (
    <div id="layout">
      <Menubar />
      <div id="layoutContent">
        <Outlet />
      </div>
    </div>
  );
}
