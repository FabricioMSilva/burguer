import React from "react";
import { Link } from "react-router-dom";
import "./Video/App1.css";

function Menuplanbase() {
  return (
    <div className="menu " role="navigation">
      <div className="text-center h1">Planejamento</div>

      <div className="container-fluid p-0 ">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          role="navigation"
        >
          <section
            className="collapse navbar-collapse justify-content-center "
            id="navbarToggleExternalContent"
          >
            <div className="navbar-nav  ">
              <Link className="nav-item nav-link btn-group btn-dark" to="pag3">
                CARDÁPIO
              </Link>
              <Link className="nav-item nav-link btn-group btn-dark" to="pag4">
                PUBLICIDADE
              </Link>
              <Link className="nav-item nav-link btn-group btn-dark" to="pag5">
                EMBALAGENS
              </Link>
            </div>
          </section>
        </nav>
      </div>
      <div className="pagina1"></div>
    </div>
  );
}

export default Menuplanbase;
