import React from "react";
import { Outlet } from "react-router-dom";

function Animals() {
  return (
    <div className="animals">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Animals;
