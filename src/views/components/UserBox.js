import React from "react";
import { useNavigate } from "react-router-dom";

function UserBox({ user }) {
  const navigate = useNavigate();

  return (
    <div className="card border admin-box m-2">
      <div
        className="row m-1 clickable"
        onClick={() => navigate("/usuario/" + user.id)}
      >
        <div className="col-4 mt-1 mx-auto">
          <img
            src={user.image}
            className="rounded-circle align-middle"
            style={{
              backgroundColor: "lightgray",
              width: 60,
              height: 60,
            }}
            alt={user.name}
          />
        </div>
        <div className="col-8 mt-1 mx-auto ">
          <b className="align-middle">{user.name}</b>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
