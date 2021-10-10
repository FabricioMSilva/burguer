import React from "react";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import Page10 from "./page10";
import Menuingradientesbase from "./menuingradientesbase";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";

import {BrowserRouter as Router, Route} from "react-router-dom";

import './Video/App1.css';

function Menuingradientes() {
  return (
    <Router>
<div  className="">
    <div>
        <Menuingradientesbase/>
    </div>
    <Switch>
       
        <Route path="/pag7" exact component={Page7}/>
        <Route path="/pag8" exact component={Page8}/>
        <Route path="/pag9" exact component={Page9}/>
        <Route path="/pag10" exact component={Page10}/>
        

    </Switch>
    </div>
   
    </Router>
  
  );
}

export default Menuingradientes;
