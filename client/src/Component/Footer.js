import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon  from '@material-ui/icons/Twitter';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import { Link } from 'react-router-dom';
// import  { useEffect } from 'react';

import {  orange } from '@material-ui/core/colors';
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      width: 50,
      margin: 0
    }}
  />
);
function Footer() {
  
    window.scrollTo(0, 0)
  
  return (
    <div className="nl">
      <div className="containe-fluid d-flex flex-wrap ">
        <div className="onebox mrl">
          <img className="ft mt" src="/image/logo.png" alt="logo" />
          <p className="fnt-s mlr text-justify">
          Nyasa Energy System is amongest the pioneer company in providing Quality Solar products, Solar EPC Services, Project Development, Rooftop Solutions, Solar Water Pumps, Solar Water Heater, Water Purifier, Water Softner + Conditioning System, Water Cooler, Inverterand Batteries.
          </p>
        
        </div>
        <div className="twobox mt cl">
          <h5 className="h5">Quick Links</h5>
          <ColoredLine color="gray" />
          <div className="c">

            <Link to="/about">About Us</Link><br />
            <Link to="/product">Product</Link><br />
            <Link to="service">Services</Link><br />
            <Link to="Portfolio">Portfolio</Link><br />
            <Link to="/contact">Contact Us</Link><br />
          </div>
        </div>
        <div className="thirdbox mt cl">
          <h5 className="h5">Contact Us</h5>
          <ColoredLine color="gray" />
          
            <div className="ten">
              <PhoneRoundedIcon style={{ color: orange[500] }} />              <a href="/contact" className="ca">+91-9516247583</a><br />

               < MailOutlineRoundedIcon style={{ color: orange[500] }} />                <a href="/contact" className="ca">abhi85558@yahoo.co.in</a><br />

              <LocationOnRoundedIcon style={{ color: orange[500] }} />             <a href="/contact" className="ca">Indore, 452018 Madhya Pradesh</a> 
          
          </div></div>
        <div className="forthbox mt">
          <h5 className="h5">Follow Us</h5>
          <ColoredLine color="gray" />
         
          <div className="c">
            <a href="https://www.facebook.com/NYASA-Energy-System-1819123591654014/" rel="noopener noreferrer" target="_blank" className="icon ">< FacebookIcon style={{ color: orange[500] }} /></a>
            <a href="https://wa.me/9516247583" target="_blank" rel="noopener noreferrer" className="icon">< WhatsAppIcon style={{ color: orange[500] }} /></a>
            <a href="https://www.instagram.com/nyasaenerygysystem/" rel="noopener noreferrer" target="_blank" className="icon"><  InstagramIcon  style={{ color: orange[500] }} /></a>
            <a href="https://twitter.com/NyasaEnergy"  target="_blank" rel="noopener noreferrer" className="icon">< TwitterIcon   style={{ color: orange[500] }} /></a>
          </div></div>
      </div>
      <hr className="text-white"></hr>
        <div className="text-center copyright">
          Copyright © 2016-21 Nyasa Energy System. All rights reserved.
        </div>

        <div className="text-center copyright">
          Developed & Maintained by <a href="https://www.cloudencyclopedia.com" >Cloud Encyclopedia</a> IT Solutions
        </div>
    </div>



  );
}
export default Footer;