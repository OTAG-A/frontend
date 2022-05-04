import React from "react";
import { useNavigate } from "react-router-dom";

function UserBox({ user }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="border admin-box m-4">
        <div
          className="row m-2 clickable"
          onClick={() => navigate("/usuario/" + user.id)}
        >
          <div className="col-6 mt-2 mx-auto">
            <img
              src={user.image}
              className="rounded-circle"
              style={{
                backgroundColor: "lightgray",
                width: 60,
                height: 60,
              }}
              alt={user.name}
            />
          </div>
          <div className="col-6 mt-2 mx-auto">
            <b>{user.name}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBox;

{
  /* <div
      className="animal text-center p-3"
      onClick={() => navigate("/animales/" + id)}
    >
      <img
        src={image}
        style={{ height: "25vh", width: "25vh", objectFit: "cover" }}
        alt={name}
      />
      <h2>{name}</h2>
    </div> */
}
