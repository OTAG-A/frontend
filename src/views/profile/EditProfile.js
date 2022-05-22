import React, { useState, useContext, useRef } from "react";
import { Col, Row } from "react-bootstrap";

import { UserContext } from "../../environment/UserProvider";

function EditProfile() {
  let { user } = useContext(UserContext);
  let [img, setImg] = useState(user.avatar);

  const inputRef = useRef(null);
  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleChange = (event) => {
    console.debug(event);
    if (event.target.files.length !== 1) {
      return;
    }
    setImg(URL.createObjectURL(event.target.files[0]));
  };

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
          <div className="col-md-5 text-center m-auto p-5 mb-5">
            <Row>
              <Col xs md="6" className="mx-auto">
                <input
                  ref={inputRef}
                  className="d-none"
                  type="file"
                  accept="image/*"
                  capture="camera"
                  onChange={handleChange}
                />
                <img
                  className="mb-3 img img-responsive rounded-circle clickable w-100"
                  style={{ height: "15vw", objectFit: "cover" }}
                  onClick={handleUpload}
                  src={img}
                  alt=""
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type={"text"}
                  className="mb-4"
                  defaultValue={user.username}
                />
              </Col>
            </Row>
            <textarea
              className="text-start w-100 mb-3 overflow-hidden"
              rows={4}
              onFocus={autoResize}
              onBlur={resetSize}
              onInput={autoResize}
              defaultValue={user.bio}
            />
            <button className="btn btn-outline-warning">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
