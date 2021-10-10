
import './style.css';
import React from "react"
import Zap from "./img/whatsapp-icone-1.png"
import Img45 from "./img/logo.png"
function Page0() {
  return (
    <div className="menu sticky-top"role="navigation" >
       
      <div className="container-fluid p-0">
      
        <nav className="navbar navbar-expand-md navbar-dark bg-dark " role="navigation">
            <a className="navbar-brand text-white" href="#"><i class="fas fa-burger-soda fa-2x"></i>  E-Burguer Trainner</a>
          
          <section className="collapse navbar-collapse" id="navbarToggleExternalContent">

                  <div className="navbar-nav">
                  <a className="nav-item nav-link btn-group btn-dark" href="pag1">HOME</a>
                  <a className="nav-item nav-link btn-group btn-dark" href="menuplan">PLANEJAMENTO</a>
                 
                  <a className="nav-item nav-link btn-group btn-dark" href="pag6">LOGISTICA</a>
                  <a className="nav-item nav-link btn-group btn-dark" href="pag11">MARKETING</a>
                  <a className="nav-item nav-link btn-group btn-dark" href="pag12">EQUIPAMENTOS</a>
                  <a className="nav-item nav-link btn-group btn-dark" href="menuingradientes">INGRADIENTES</a>

                  <a className="nav-item nav-link btn-group btn-dark" href="pag13">ACOMPANHAMENTOS</a>
                  </div>
          </section>  
            <button className="navbar-toggle text-dark" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fas fa-hamburger  fa-2x" width="70%;"></span>
            </button>
           
          
            
  
        </nav>

      
 
      
      
      </div>
    
            <div><a href="https://api.whatsapp.com/send?phone=5524999166171&text=Ola%20gostaria%20de%20conversar%20sobre%20curso%20do%20e-burguer">
              <img className="Zapp" src={Zap}></img>
              </a></div>
    

    </div>
  
  );
}

export default Page0;
