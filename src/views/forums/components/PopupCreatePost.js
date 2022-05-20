import React, { useState } from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";

import Popup from "../../components/Popup";

export default function PopupCreatePost({ onSubmit }) {
  const categories = ["gatos", "perros", "canarios", "cocodrilos"];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [user_explanation, setUserExplanation] = useState('');

  console.log(onSubmit);

  const submitWrapper = (action) => {
    PopupboxManager.close();
    action({
      title: title,
      category: category,
      user_explanation: user_explanation,
    });
  };

  return (
    <Popup title="Crear un hilo" close={true} style={{ minWidth: "60vw" }}>
      <Form onSubmit={() => submitWrapper(onSubmit)}>
        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Título">
          <Form.Control type="text" placeholder="Título" value={title} onInput={e => setTitle(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel className="mb-3" controlId="floatingSelect" label="Categoría">
          <Form.Select aria-label="Seleccionar categoría" value={category} onInput={e => setCategory(e.target.value)}>
            {categories.map((category, i) => (
              <option value={category} key={i}>{category}</option>
            ))}
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Cuerpo">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '200px' }}
            value={user_explanation} onInput={e => setUserExplanation(e.target.value)}
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
    </Popup >
  );
}

export function openPopupCreatePost(onSubmit) {
  const content = (
    <PopupCreatePost
      onSubmit={onSubmit}
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
