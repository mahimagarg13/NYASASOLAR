import './Style.css';
import React from 'react';
import Ourservices from "./Services/Ourservices";
import Advantage from './Services/Advantage';
import Counter from './Home/Counter';
// import  { useEffect } from 'react';
import { Helmet } from 'react-helmet';
function Service() {
    
        window.scrollTo(0, 0)
    
    return (
        <>
          <Helmet>
            <title>Nyasa Energy System | Services</title>
            <meta name="description" content="Nyasa Energy System" />
            <meta name="keywords" content="Solar products & water solution" />
        </Helmet>
            <Ourservices />
            <Counter />
            <Advantage />

        </>
    );
}
export default Service;