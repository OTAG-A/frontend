import React from "react";
import { useNavigate } from "react-router-dom";

// UserComponent describes the image with the username under it.
function UserComponent({ user }) {
  const navigate = useNavigate();

  return (
    <div className="col-sm-2 user text-center">
      <div
        className="col align-items-center d-flex flex-column clickable"
        onClick={() => navigate("/usuario/" + user.id)}
      >
        <img
          src={user.image}
          className="rounded-circle"
          style={{
            backgroundColor: "lightgray",
          }}
          width={60}
          height={60}
          alt={user.name}
        />
        <b>{user.name}</b>
      </div>
    </div>
  );
}

export default UserComponent;
