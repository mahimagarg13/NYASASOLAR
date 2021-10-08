import './Style.css';
import React from 'react';
import Aboutus from "./Aboutus/Aboutus"
import Action from "./Aboutus/Action"
import OurTeam from "./Aboutus/OurTeam"
import Choose from './Home/Choose';
import Mission from './Aboutus/Mission';
// import  { useEffect } from 'react';
import {Helmet} from "react-helmet";

function About() {
     
        window.scrollTo(0, 0)
     
    return (
        <>
         <Helmet>
            <title>Nyasa Energy System | About Us</title>
            <meta name="description" content="Nyasa Energy System" />
            <meta name="keywords" content="Solar products & water solution" />
        </Helmet>
        
            <Aboutus />
            <Action />
            <Mission />
            <OurTeam />
            <Choose />

        </>
    );
}
export default About;