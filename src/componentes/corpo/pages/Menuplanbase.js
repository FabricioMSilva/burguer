import React from "react";
import { Link } from "react-router-dom";
import "./Video/App1.css";
import Page2 from "./page2";
function Menuplanbase() {
  return (
    <div className="menu " role="navigation">
      <div className="text-center h1 bg-light">Planejamento</div>

      <div className="container-fluid p-0 ">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          role="navigation"
        >
          <section
            className="collapse navbar-collapse justify-content-center  "
            id="navbarToggleExternalContent"
          >
            <div className="navbar-nav  ">
              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag3">
                Cardápio
              </Link>
              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag4">
                Publicidade
              </Link>
              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag5">
                Embalagens
              </Link>
            </div>
          </section>
        </nav>
      </div>
      <div className="pagina1">

      </div>
    </div>
  );
}

export default Menuplanbase;
