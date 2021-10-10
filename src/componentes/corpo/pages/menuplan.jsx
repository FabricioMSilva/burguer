import React from "react";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Menuplanbase from "./Menuplanbase";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";


import './Video/App1.css';

function Menuplan() {
  return (
    <Router>
<div  className="">
    <div>
        <Menuplanbase/>
    </div>
    <Switch>
       
        <Route path="/pag2" exact component={Page2}/>
        <Route path="/pag3" exact component={Page3}/>
        <Route path="/pag4" exact component={Page4}/>
       
        

    </Switch>
    </div>
   
    </Router>
  
  );
}

export default Menuplan;
