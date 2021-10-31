import "./style.css";
import React from "react";

import { Link } from "react-router-dom";

function Page0() {
  return (
    <div className="menu sticky-top" role="navigation">
      <div className="container-fluid p-0">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark "
          role="navigation"
        >
          <div className="navbar-brand text-white">
            <i className="fas fa-burger-soda fa-2x navbar-brand "></i>
            E-Burguer Trainner
          </div>

          <section
            className="collapse navbar-collapse"
            id="navbarToggleExternalContent"
          >
            <div className="navbar-nav">
              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag1">
                HOME
              </Link>
              <Link
                className="nav-item nav-link btn-group text-white btn-dark"
                to="Planejamento"
              >
                PLANEJAMENTO
              </Link>

              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag6">
                LOGISTICA
              </Link>
              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag11">
                MARKETING
              </Link>
              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag12">
                EQUIPAMENTOS
              </Link>
              <Link
                className="nav-item nav-link btn-group text-white btn-dark"
                to="menuingradientes"
              >
                INGREDIENTES
              </Link>

              <Link className="nav-item nav-link btn-group text-white btn-dark" to="pag13">
                ACOMPANHAMENTOS
              </Link>
            </div>
          </section>
          <button
            className="navbar-toggle text-dark d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-hamburger  fa-2x" width="70%;"></span>
          </button>
        </nav>
      </div>

      
    </div>
  );
}

export default Page0;
