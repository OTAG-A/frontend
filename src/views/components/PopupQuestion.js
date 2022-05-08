import React from "react";
import { PopupboxManager } from "react-popupbox";
import { Row, Col, Button } from "react-bootstrap";

import Popup from "./Popup";

export default function QuestionPopup({ question, onAccept, onCancel }) {
  const onCancelWrapper = () => {
    PopupboxManager.close();
    onCancel();
  };

  return (
    <Popup title={question} close={true}>
      <Row>
        <Col>
          <Button
            className="success-button"
            style={{ width: "100%" }}
            onClick={onAccept}
          >
            Sí
          </Button>
        </Col>
        <Col>
          <Button
            className="btn-secondary"
            style={{ width: "100%" }}
            onClick={onCancelWrapper}
          >
            No
          </Button>
        </Col>
      </Row>
    </Popup>
  );
}

export function openQuestionPopup(
  question,
  onAccept = () => {},
  onCancel = () => {}
) {
  const content = (
    <QuestionPopup
      question={question}
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
