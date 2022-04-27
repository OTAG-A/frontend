import React from "react";
import { useNavigate } from "react-router-dom";

// UserComponent describes the image with the username under it.
function UserComponent({ user }) {
  const navigate = useNavigate();

  return (
    <div
      className="col-3 user text-center d-flex flex-column"
      onClick={() => navigate("/usuario/" + user.id)}
    >
      <div className="">
        <img
          src={user.image}
          className="rounded-circle"
          style={{
            backgroundColor: "lightgray",
          }}
          width={60}
          alt={user.name}
        />
      </div>
      <div className="">
        <b>{user.name}</b>
      </div>
    </div>
  );
}

export default UserComponent;
