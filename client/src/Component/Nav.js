import React, { useState } from 'react';
import "../App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
// import  { useEffect } from 'react';



function Navbar() {
    
    const [showLinks, setShowLinks] = useState(false)
    const navBarShow = () => setShowLinks(false);
     
        window.scrollTo(0, 0)
      
    return (
        <div className="Navbar">
            <div className="leftside"></div>
            <a href="/">
                <img src="/image/logo.png" alt="logo" className="navbar-logo" />
            </a>
            <div className="rightside">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to="/#" onClick={navBarShow} >Home</Link>
                    <Link to="/about/#" onClick={navBarShow} >About Us</Link>
                    <Link to="/product/#" onClick={navBarShow} >Product</Link>
                    <Link to="/service/#" onClick={navBarShow} >Services</Link>
                    <Link to="/portfolio/#" onClick={navBarShow} >Portfolio</Link>
                    <Link to="/contact/#" onClick={navBarShow} >Contact Us</Link>

                   
                </div>
                <button onClick={() => setShowLinks(!showLinks)} className="margin-right">
                    <MenuIcon />
                </button>
            </div>
          </div>
    



    );
}

export default Navbar
