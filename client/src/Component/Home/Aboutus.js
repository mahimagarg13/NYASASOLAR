import React from "react";
// import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';

function Aboutus() {
    return (
        <div className="mt-1">

            <div className="container-fluid d-flex flex-wrap">
                <div className="f-R">
                    {/* <img className="head" src="/image/about.gif"  alt=""/> */}
                    <p className="heading">About Nyasa Energy</p>

                    <p className="p mr-2"><br />
                        Nyasa Energy System is  amongest the pioneer company in providing Quality Solar 
                        products, Solar EPC Services, Project Development, Rooftop Solutions, Solar Water Pumps, Solar Water Heater, Water Purifier, Water Softner + Conditioning System, Water Cooler, Inverterand Batteries. Products from Nyasa Energy System combine the best of technology and expertise to provide a wide range of products that give utmost purity and supreme quality.
                    <br/>
                    <br/>
                    
                    न्यासा एनर्जी सिस्टम गुणवत्ता वाले सोलर उत्पाद, सोलर ईपीसी सर्विसेज, प्रोजेक्ट डेवलपमेंट, रूफटॉप सॉल्यूशंस, सोलर वाटर पंप, सोलर वॉटर हीटर, वाटर प्यूरीफायर, वाटर सॉफ्टनर + कंडीशनिंग सिस्टम, वाटर कूलर, इन्वर्टर और बैटरी उपलब्ध कराने में अग्रणी कंपनी है। न्यासा एनर्जी सिस्टम के उत्पाद सर्वोत्तम तकनीक और विशेषज्ञता का संयोजन करते हैं ताकि उत्पादों की एक विस्तृत श्रृंखला प्रदान की जा सके जो अत्यधिक शुद्धता और सर्वोच्च गुणवत्ता प्रदान करते हैं।

            <br />
                  <br />
                    <Link to="/About" className="btn a btn-outline-success">Read More</Link></p>
                </div>
                <div className="f-L">
                    <img className="f-l" src="/image/about.jpeg"   alt=""/>

                </div>
            </div>



        </div >


    );
}
export default Aboutus;