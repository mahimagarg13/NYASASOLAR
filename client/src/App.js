import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Component/Style.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Service from './Component/Service';
import Portfolio from './Component/Portfolio';
import Product from './Component/Product';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
import Watercooler from './Component/Product/Watercooler';
import Rooftop from './Component/Product/Rooftop';
// import Newsletter from './Component/Newsletter';
import  { Switch , Route , BrowserRouter } from "react-router-dom";
import Streetlight from './Component/Product/Streetlight';
import WaterHeater from './Component/Product/WaterHeater';
import Hybridsystem from './Component/Product/Hybridsystem';
import WaterPurifier from './Component/Product/WaterPurifier';
import Softnersystem from './Component/Product/Softnersystem';
import NonPresssurePump from './Component/Product/NonPresssurePump';
import SubmersiblePump from './Component/Product/SubmersiblePump';
import Booster from './Component/Product/Booster';
// import GrundosPump from './Component/Product/GrundosPump';
// import LubiPump from './Component/Product/LubiPump';
// import { Helmet, HelmetProvider } from "react-helmet-async";
import {Helmet} from "react-helmet";


function App() {
  return (<>
    <BrowserRouter>
      <Nav/>
    <Helmet>
      <title>Nyasa Energy System</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
      <Switch>
      <Route  exact path= "/"  component={Home} />
      <Route  path= "/product" component={Product} />
      <Route  path= "/service" component={Service} />
      <Route  path= "/portfolio" component={Portfolio} />
      <Route  path= "/about" component={About} />
      <Route  path= "/contact" component={Contact} />
      <Route  path= "/watercooler" component={Watercooler} />
      <Route  path= "/rooftop" component={Rooftop} />
      <Route  path= "/streetlight" component={Streetlight} />
      <Route  path= "/hybridsystem" component={Hybridsystem} />
      <Route  path= "/waterHeater" component={WaterHeater} />
      <Route  path= "/waterpurifier" component={WaterPurifier} />
      <Route  path= "/softnersystem" component={Softnersystem} />
      <Route  path= "/nonPresssurePump" component={NonPresssurePump} />
      <Route  path= "/submersiblePump" component={SubmersiblePump} />
      <Route  path= "/booster" component={Booster} />
      {/* <Route  path= "/grundosPump" component={GrundosPump} /> */}
      {/* <Route  path= "/lubiPump" component={LubiPump} /> */}

      </Switch>
      {/* <Newsletter /> */}
      <Footer />
    </BrowserRouter>
  </>
  );
};

export default App;
