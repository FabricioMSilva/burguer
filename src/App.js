import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home1 from "./componentes/corpo/pages/Home";
import Page3 from "./componentes/corpo/pages/page3";

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
import Menuplan from "./componentes/corpo/pages/menuplan";
import Menuingradientes from "./componentes/corpo/pages/menuindradientes";
import Footer1 from "./componentes/footer.jsx"
import BtoZap from "./componentes/zap/Zapbto";
import Planejamento1 from "./componentes/corpo/pages/Planejamento";


function App() {
  return (
    <div>
      <Router basename="/">
        <div className="nav-bar sticky-top">
          <Page0 />
        </div>
        
        <Switch>
        <Route path="/Planejamento" component={Planejamento1} />
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home1} />
          <Route path="/menuplan" component={Menuplan} />
          <Route path="/pag3" component={Page3} />
          <Route path="/pag4" component={Page4} />
          <Route path="/pag5" component={Page5} />
          <Route path="/menuingradientes" component={Menuingradientes} />
          <Route path="/pag6" component={Page6} />
          <Route path="/pag7" component={Page7} />
          <Route path="/pag8" component={Page8} />
          <Route path="/pag9" component={Page9} />
          <Route path="/pag10" component={Page10} />
          <Route path="/pag11" component={Page11} />
          <Route path="/pag12" component={Page12} />
          <Route path="/pag13" component={Page13} />
        </Switch>
        <div>
          <Footer1 />
        </div>
        <div><BtoZap/>
        </div>

      </Router>
    </div>
  );
}

export default App;
