import './Style.css';
import React from 'react';
import Portfo from './FilterGalary';
// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
function Portfolio() {
   
    window.scrollTo(0, 0)

    return (
        <>
          <Helmet>
            <title>Nyasa Energy System | Portfolio</title>
            <meta name="description" content="Nyasa Energy System" />
            <meta name="keywords" content="Solar products & water solution" />
        </Helmet>
          <Portfo />
        </>
    );
}
export default Portfolio;