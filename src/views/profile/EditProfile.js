import React, { useContext } from "react";

import { UserContext } from "../../environment/UserProvider";

function EditProfile() {
  let user = useContext(UserContext);

  if (!user) {
    return <></>;
  }

  function autoResize(event) {
    console.debug(event);
    const elem = event.target;
    elem.style.height = "";
    elem.style.height = elem.scrollHeight + 3 + "px";
  }

  function resetSize(event) {
    const elem = event.target;
    elem.style.height = "";
  }

  return (
    <div className="profile">
      <div className="container p-2">
        <div className="row">
          <div className="col-md-5 text-center m-auto p-5">
            <img className="mb-3" src={user.image} alt="" />
            <h2 className="mb-4">{user.name}</h2>
            <textarea className="text-start w-100 mb-3" rows={4} onFocus={autoResize} onBlur={resetSize} onInput={autoResize} defaultValue={user.bio} />
            <button className="btn btn-outline-warning">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
