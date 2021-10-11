import React from "react";
import { Link } from "react-router-dom";
import "./Video/App1.css";

function Menuingradientesbase() {
  return (
    <div className="menu " role="navigation">
      <div className="text-center h1">Ingradientes</div>

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
              <Link className="nav-item nav-link btn-group btn-dark" to="/pag9">
                Hamburguer
              </Link>
              <Link className="nav-item nav-link btn-group btn-dark" to="/pag8">
                Pães
              </Link>
              <Link className="nav-item nav-link btn-group btn-dark" to="/pag7">
                Carnes
              </Link>
              <Link
                className="nav-item nav-link btn-group btn-dark"
                to="/pag10"
              >
                Molhos
              </Link>
            </div>
          </section>
        </nav>
      </div>
      <div className="pagina1"></div>
    </div>
  );
}

export default Menuingradientesbase;
