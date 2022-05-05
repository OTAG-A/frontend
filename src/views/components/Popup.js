import React from "react";

function PopUp({ message, action }) {
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{message}</div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              class="btn btn-secondary col-5"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <div class="col-md-auto"></div>
            <button
              type="button"
              class="btn btn-primary col-5"
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
