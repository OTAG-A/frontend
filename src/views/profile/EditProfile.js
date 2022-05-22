import React, { useState, useContext, useRef } from "react";
import { useEffectOnce } from "usehooks-ts";
import { Col, Form, Row, FloatingLabel } from "react-bootstrap";

import { UserContext } from "../../environment/UserProvider";
import User from "../../models/User";

import {
  updateBio,
  updatePassword,
  updateUsername,
  getUserDetails,
  updateAvatar,
  toImageUrl,
} from "../../api/Api";

function EditProfile() {
  let { user, setUser } = useContext(UserContext);
  let [img, setImg] = useState(
    user.avatar ? toImageUrl(user.avatar) : "/assets/person-circle.svg"
  );
  let [imgFile, setImgFile] = useState(null);

  let [username, setUsername] = useState(user.username);
  let [password, setPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let [repeatedNewPassword, setRepeatedNewPassword] = useState("");
  let [bio, setBio] = useState(user.bio);

  useEffectOnce(() => {
    getUserDetails({ id: user.id })
      .then((result) => {
        let user = User.from(result);
        setUser(user);

        setUsername(user.username);
        setImg(
          user.avatar ? toImageUrl(user.avatar) : "/assets/person-circle.svg"
        );
        setBio(user.bio);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const inputRef = useRef(null);
  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleChange = (event) => {
    if (event.target.files.length !== 1) {
      return;
    }
    setImgFile(event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  if (!user) {
    return <></>;
  }

  function autoResize(event) {
    const elem = event.target;
    elem.style.height = "";
    elem.style.height = elem.scrollHeight + 3 + "px";
  }

  function resetSize(event) {
    const elem = event.target;
    elem.style.height = "";
  }

  const handleSubmit = () => {
    if (username !== user.username && username !== "") {
      updateUsername({ newUsername: username })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (password !== "") {
      updatePassword({
        password: password,
        newPassword: newPassword,
        repeatedNewPassword: repeatedNewPassword,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (bio !== user.bio && bio !== "") {
      updateBio({ bio: bio })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (imgFile) {
      updateAvatar({ imgFile: imgFile })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    getUserDetails({ id: user.id })
      .then((result) => {
        let user = User.from(result);
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="profile">
      <div className="container p-2">
        <Form onSubmit={handleSubmit}>
          <div className="col-md-5 text-center m-auto p-5">
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
                  className="mb-3 img img-responsive rounded-circle clickable w-100 border border-primary profile-pic"
                  onClick={handleUpload}
                  src={img}
                  alt=""
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingTextarea2"
                  label="Nombre de usuario"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onInput={(e) => setUsername(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel
              className="mb-4"
              controlId="floatingTextarea2"
              label="Biografía"
            >
              <Form.Control
                as="textarea"
                placeholder="Biografía del usuario"
                className="text-start w-100 mb-3 overflow-hidden"
                style={{ height: "" }}
                onFocus={autoResize}
                onBlur={resetSize}
                value={bio}
                onInput={(e) => {
                  setBio(e.target.value);
                  autoResize(e);
                }}
              />
            </FloatingLabel>

            <Form.Group>
              <Form.Text className="text-muted">
                Si quieres cambiar tu contraseña, introduce tu contraseña actual
                y dos veces la nueva.
              </Form.Text>

              <FloatingLabel
                className="mb-4"
                controlId="floatingTextarea2"
                label="Contraseña actual"
              >
                <Form.Control
                  type="password"
                  placeholder="Contraseña actual"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-4"
                controlId="floatingTextarea2"
                label="Contraseña nueva"
              >
                <Form.Control
                  type="password"
                  placeholder="Contraseña nueva"
                  value={newPassword}
                  onInput={(e) => setNewPassword(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-4"
                controlId="floatingTextarea2"
                label="Repetir contraseña nueva"
              >
                <Form.Control
                  type="password"
                  placeholder="Repetir contraseña nueva"
                  value={repeatedNewPassword}
                  onInput={(e) => setRepeatedNewPassword(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <button type="submit" className="btn btn-outline-warning">
              Guardar cambios
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditProfile;
