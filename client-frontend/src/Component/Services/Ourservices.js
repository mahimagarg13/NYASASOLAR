import React, { useEffect } from 'react';

function Ourservices() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="our">
            <p className="heading m font">  Our Services Overview
            </p>
            <div className="container-fluid d-flex flex-wrap ">
                <div className="flex-left text-center">
                    <img className="f-ll " src="/image/services.gif" alt="services" />

                </div>
                <div className="flex-right">
                    <div className="ps">

                        We deal in one stop water solutions for domestic as well as commercial sites which   includes :-
                        <br />
                        <ul>
                            <li>Solar hybrid systems for hot water </li>
                            <li>Solar rooftop solutions with ongrid and offgrid</li>
                            <li>Heat pump for hot water</li>
                            <li> Water softners for hard water</li>
                            <li> Water purifiers with alkaline technology for domestic as well as industrial purpose</li>
                            <li> All kinds of pumping solutions</li>
                            <li> Swimming pool heating systems</li>
                            <li> Water chillers</li>
                            <li>Water coolers</li>
                        </ul>
                        Kindly give us a chance to serve you with our aasured best services.<br />
                    </div>

                </div>

            </div> </div>
    );
}
export default Ourservices;