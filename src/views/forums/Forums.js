import React from "react";
import { Outlet } from "react-router-dom";

function Forums() {
  return (
    <div className="forum">
      <div className="content p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Forums;
