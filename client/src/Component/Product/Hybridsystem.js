// import React  from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';

import Img9 from '../Img/solarizer4.jpeg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Hybridsystem = () => {
    const [ name ,setName ] = useState("")
    const [ mobile ,setMobile ] = useState("")
    const [ city ,setCity ] = useState("")
    const [ product ,setProduct ] = useState("")

    const onSubmitForm = async(e) => {
        // e.preventDefault();
        try{
             const body = { name , mobile , city , product };
             const response = await fetch(`/enquiers`, {
               method:"POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(body)
             });
             console.log(response);
        }catch (err) {
          console.log(err.message)
        }      
      }
      const diffToast = () =>{
        toast("Form submitted!");
    }
    return (
        <div className="div">
                <Helmet>
      <title>Products | Heat Pump/Solar Hybrid System For Hot Water</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
            <p className="heading m">Heat Pump/Solar Hybrid System For Hot Water</p>
            <Link to="/Product" className="btn "><img className="hhh" src="/image/Background.png" alt="" />Back </Link>

            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://www.uniletsolar.com/wp-content/uploads/2019/05/Heat-Pump-Modified.png" alt="hpsv" />
                    <div className="card-body">
                        <h4 className="card-title mg-b40">Solarizer Spring HPSV-500-13 </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="PDF's/Solarizer_Heat-Pump-Brochure.pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("Solarizer Spring HPSV-500-13")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://shop.emmvee.com/wp-content/uploads/2021/02/Spring-Hp-3-Panel-Left-2.png" alt="hpsh" />
                    <div className="card-body">
                        <h4 className="card-title mg-b30">Solarizer Spring HPSH-300-09 </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="PDF's/Solarizer_Heat-Pump-Brochure.pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("Solarizer Spring HPSH-300-09")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.QYVuC_vffRObQKKT6UwCpAHaGJ?pid=ImgDet&rs=1" alt="hpv" />
                    <div className="card-body">
                        <h4 className="card-title mg-b40">Solarizer Spring HPV-500-18</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="PDF's/Solarizer_Heat-Pump-Brochure.pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("Solarizer Spring HPV-500-18")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src={Img9} alt="heatPump" />
                    <div className="card-body">
                        <h4 className="card-title mg-b10">Heat Pumps for domestic as well as for  hotels , hospitals , hostel ,and Resorts </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="PDF's/HPA Leaflet -300-450.pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("Heat Pumps for domestic as well as for  hotels , hospitals , hostel ,and Resorts")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

        <div className="modal-body">
            <form  onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name*" name="name"  value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone*" required  value={mobile} onChange={e => setMobile(e.target.value)} name="phone" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="City"  value={city} onChange={e => setCity(e.target.value)} id="recipient-name" />
                </div>
                <input type="text" className="d-none form-control" placeholder="Heat Pump/Solar Hybrid System For Hot Water"   id="recipient-name" />
{/* 
            </form>
        </div> */}
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                I authorize Nyasa Energy System to contact me and share offer with me
            </label>
        </div>

        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" onClick={diffToast} className="btn btn-success">Send Now</button>
        </div>
        
        </form>
        </div>
    </div>
</div>
</div>


            </div>
            <ToastContainer style={{ marginTop: "90px" }} />
            </div>
        
    );
}
export default Hybridsystem;