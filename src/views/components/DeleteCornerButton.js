import React from "react";

function DeleteCornerButton({ id, action }) {
  return (
    <button type="button" className="delete-corner-button" onClick={action} />
  );
}

export default DeleteCornerButton;
