import React from 'react';
import CountUp from 'react-countup';

function Counter() {
    return (
        <div className="counterplat">

            <div className="color-white d-flex   container ">
                {/* <h2 className="text-center m-top color-white">We’re committed to deliver High Quality projects
                        </h2> */}
                <div className="col flex-column  m-b-t  text-center">
                    <h6>Project  Completion</h6>
                    <h2 className="">  <CountUp end={80} duration={3} />+</h2>
                </div>
                <div className="col flex-column   m-b-t  color-white  text-center ">
                    <h6>Anual Turn Over</h6>
                    <h2 >   <CountUp end={5} duration={6} />Cr</h2>
                </div>
                <div className="col flex-column  m-b-t  color-white text-center">
                    <h6> Total Employees</h6> 
                    <h2>      <CountUp end={50} duration={4} />+</h2>
                </div>
                <div className="col flex-column   m-b-t  color-white  text-center">
                    <h6>Happy Clients</h6>
                    <h2>       <CountUp end={460} duration={5} />+</h2>
                </div>
             </div>

        </div>
    );
}
export default Counter;