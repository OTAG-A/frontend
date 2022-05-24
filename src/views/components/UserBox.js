import React from "react";
import { useNavigate } from "react-router-dom";

import { toImageUrl } from "../../api/Api";

function UserBox({ id, name, image }) {
  const navigate = useNavigate();

  return (
    <div className="card border admin-box m-2 clickable">
      <div className="row m-1 p-1 " onClick={() => navigate("/perfil/" + id)}>
        <div className="col-4	col-sm-4	col-md-2	col-lg-5  mt-1">
          <img
            src={image ? toImageUrl(image) : "/assets/person-circle.svg"}
            className="rounded-circle align-middle"
            style={{
              backgroundColor: "lightgray",
              width: 60,
              height: 60,
            }}
            alt={name}
          />
        </div>
        <div className="col-8	col-sm-8	col-md-10	col-lg-7 mt-3 ">
          <b className="align-middle">{name}</b>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
