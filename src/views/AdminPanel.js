import React from "react";

function AdminPanel() {
  return (
    <div className="home">
      <header className="px-5 pt-4">
        <h1 className="font-weight-light text-center fw-bold">
          Panel Administración
        </h1>
      </header>
      <div className="container mt-4">
        <div className="row align-items-center">
          <p class="h3" style={{ color: "orange" }}>
            Analíticas
          </p>
          <div class="container mt-4 overflow-hidden">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
              <div class="col">
                <div class="p-3 border bg-light">Custom column padding</div>
              </div>
            </div>
            <p class="h3 mt-4" style={{ color: "orange" }}>
              Usuarios registrados
            </p>
            <div class="container mt-4 overflow-hidden border bg-light">
              <p>usuarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
