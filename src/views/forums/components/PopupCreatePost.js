import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";

import Popup from "../../components/Popup";

export default function PopupCreatePost({ onAccept, onCancel }) {
  const actionWrapper = (action) => {
    PopupboxManager.close();
    action();
  };

  return (
    <Popup title="Crear un hilo" close={true} style={{ minWidth: "60vw" }}>
      <Form>
        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Título">
          <Form.Control type="text" placeholder="Título" />
        </FloatingLabel>

        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Cuerpo">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '200px' }}
          />
        </FloatingLabel>

        <Row>
          <Col className="text-end">
            <Button variant="primary" type="submit">
              Publicar
            </Button>
          </Col>
        </Row>
      </Form>
    </Popup>
  );
}

export function openPopupCreatePost(
  onAccept = () => { },
  onCancel = () => { }
) {
  const content = (
    <PopupCreatePost
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
  PopupboxManager.open({
    content,
    config: {
      fadeIn: true,
      fadeInSpeed: 400,
      fadeOut: true,
      fadeOutSpeed: 50,
      escClose: false,
      overlayClose: false,
    },
  });
}
