import React from "react";
import { Outlet } from "react-router-dom";

import Breadcrumb from "./components/Breadcrumb";

function Forums() {
  return (
    <div className="forum">
      <div className="content p-5">
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  );
}

export default Forums;
