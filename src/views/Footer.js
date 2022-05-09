import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col col-sm-3 mx-auto mb-2">
            <h6 className="text-white text-uppercase fw-bold mt-2 mb-2">
              Síguenos en Twitter
            </h6>
            <div>
              <a
                href="https://twitter.com/adoptadiCOs"
                style={{ color: "white" }}
              >
                @adoptadiCOs
              </a>
            </div>
          </div>
          <div className="col col-sm-3 mx-auto mb-2">
            <h6 className="text-white text-uppercase fw-bold mt-2 mb-2">
              Contacto
            </h6>
            <div>
              <a
                className="text-white"
                href="mailto:info@adoptadicos.gmail.com"
              >
                adoptadicos@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
