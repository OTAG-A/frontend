import React from "react";

function DeleteCornerButton({ id, action }) {
  return <button type="button" className="btn-corner-cross" onClick={action} />;
}

export default DeleteCornerButton;
