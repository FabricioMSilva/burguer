
import React from "react";
import Page1 from "./componentes/corpo/pages/page1";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Page3 from "./componentes/corpo/pages/page3";
import Ernane from "./componentes/smart/img/ernane.png";
import Page4 from "./componentes/corpo/pages/page4";
import Page5 from "./componentes/corpo/pages/page5";
import Page6 from "./componentes/corpo/pages/page6";
import Page7 from "./componentes/corpo/pages/page7";
import Page8 from "./componentes/corpo/pages/page8";
import Page9 from "./componentes/corpo/pages/page9";
import Page10 from "./componentes/corpo/pages/page10";
import Page11 from "./componentes/corpo/pages/page11";
import Page12 from "./componentes/corpo/pages/page12";
import Page13 from "./componentes/corpo/pages/page13";
import Page0 from "./componentes/smart";
import './App.css';
import Menuplan from "./componentes/corpo/pages/menuplan";
import Menuingradientes from "./componentes/corpo/pages/menuindradientes";

function App() {
  return (
    <div>
      <Router>

        <div className="nav-bar sticky-top">
        <Page0/>
        </div>
        <Switch>
        <Route path="/pag1" exact component={Page1}/>
        <Route path="/menuplan" exact component={Menuplan}/>

        <Route path="/pag3" exact component={Page3}/>
        <Route path="/pag4" exact component={Page4}/>
        <Route path="/pag5" exact component={Page5}/>
        <Route path="/menuingradientes" exact component={Menuingradientes}/>
        <Route path="/pag6" exact component={Page6}/>
        <Route path="/pag7" exact component={Page7}/>
        <Route path="/pag8" exact component={Page8}/>
        <Route path="/pag9" exact component={Page9}/>
        <Route path="/pag10" exact component={Page10}/>
        <Route path="/pag11" exact component={Page11}/>
        <Route path="/pag12" exact component={Page12}/>
        <Route path="/pag13" exact component={Page13}/>
        

         </Switch>

                    
        <footer className="footer d-flex bg-dark container-fluid  p-0 justify-content-arround text-light text-center">
          
          <div>
            <img className="ernan" src={Ernane} alt="foto"></img>
            <p>Ernane Mendes</p>
            <p>Propritário</p>
          </div>
  
        </footer>
      
   
      </Router>
    </div>
  
  );
}

export default App;
