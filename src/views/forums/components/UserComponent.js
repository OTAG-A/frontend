import React from "react";
import { useNavigate } from "react-router-dom";

// UserComponent describes the image with the username under it.
function UserComponent({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return <></>;
  }

  return (
    <div className="col-sm-2 user text-center">
      <div
        className="col align-items-center d-flex flex-column clickable"
        onClick={() => navigate("/perfil/" + user.id)}
      >
        <img
          src={user.image ? user.image : "assets/person-circle.svg"}
          className="rounded-circle"
          width={60}
          height={60}
          alt={user.username}
        />
        <b>{user.username}</b>
      </div>
    </div>
  );
}

export default UserComponent;
