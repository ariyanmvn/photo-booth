import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MobileNav from "./MobileNav";

export default function MainRoute() {
  return (
    <div>
      <SideBar/>
      <MobileNav/>
      <Outlet />
    </div>
  );
}
