import './Style.css';
import React from 'react';
import Newsletter from './Newsletter';
import Details from './Contactus/Details';
import Map from './Contactus/Map';
// import  { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
     
        window.scrollTo(0, 0)
      
    return (
        <>
          <Helmet>
            <title>Nyasa Energy System | Contact Us</title>
            <meta name="description" content="Nyasa Energy System" />
            <meta name="keywords" content="Solar products & water solution" />
        </Helmet>
            <Details />
            <Map />
            <Newsletter />
        </>
    );
}
export default Contact;