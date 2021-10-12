import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Nonpressurepump = () => {
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
      <title>Products | Solar Water Heater</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
            <p className="heading m">Farmson Solar Water Heater for Non Pressurize Application </p>
            <Link to="/Product" className="btn "><img className="hhh" src="/image/Background.png" alt="" />Back </Link>

            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://5.imimg.com/data5/IH/BH/ZM/SELLER-7431624/farmson-water-heater-500x500.jpg" alt="100lpd" />
                    <div className="card-body">
                        <h4 className="card-title">  100 Lpd  </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/farmson.jpeg"  target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("100 LPD Farmson Solar Water Heater for Non Pressurize Application ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/IH/BH/ZM/SELLER-7431624/farmson-water-heater-500x500.jpg" alt="150lpd" />
                    <div className="card-body">
                        <h4 className="card-title"> 150 Lpd  </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/farmson.jpeg"  target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                    <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("150 LPD Farmson Solar Water Heater for Non Pressurize Application ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/IH/BH/ZM/SELLER-7431624/farmson-water-heater-500x500.jpg" alt="200lpd" />
                    <div className="card-body">
                        <h4 className="card-title">200 Lpd </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/farmson.jpeg"  target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("200 LPD Farmson Solar Water Heater for Non Pressurize Application ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/IH/BH/ZM/SELLER-7431624/farmson-water-heater-500x500.jpg" alt="250lpd" />
                    <div className="card-body">
                        <h4 className="card-title">250 Lpd </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/farmson.jpeg"  target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("250 LPD Farmson Solar Water Heater for Non Pressurize Application ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/IH/BH/ZM/SELLER-7431624/farmson-water-heater-500x500.jpg" alt="300lpd" />
                    <div className="card-body">
                        <h4 className="card-title">300 Lpd </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/farmson.jpeg"  target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("300 LPD Farmson Solar Water Heater for Non Pressurize Application ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/IH/BH/ZM/SELLER-7431624/farmson-water-heater-500x500.jpg" alt="500lpd" />
                    <div className="card-body">
                        <h4 className="card-title">500 Lpd </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/farmson.jpeg" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("500 LPD Farmson Solar Water Heater for Non Pressurize Application ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-body">
                                <form  onSubmit={onSubmitForm}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Name*"  value={name} onChange={e => setName(e.target.value)} name="name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Phone*"  value={mobile} onChange={e => setMobile(e.target.value)} required name="phone" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="City"  value={city} onChange={e => setCity(e.target.value)} id="recipient-name" />
                                    </div>
                                    <input type="text" className="d-none form-control" placeholder="Pressure Booster Pump"   id="recipient-name" />

                                {/* </form>
                            </div> */}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    I authorize Nyasa Energy System to contact me and share offer with me
                                </label>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" onClick={diffToast}  className="btn btn-success">Send Now</button>
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
export default Nonpressurepump;