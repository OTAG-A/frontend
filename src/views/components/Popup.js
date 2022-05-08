import React from "react";

function PopUp({ id, labelId, message, action }) {
  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={labelId}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{message}</div>
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-secondary col-5"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <div className="col-md-auto"></div>
            <button
              type="button"
              className="btn btn-primary col-5"
              onClick={action}
              data-bs-dismiss="modal"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
