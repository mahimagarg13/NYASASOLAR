
// import Img13 from '../Img/ongrid.jpeg';
import Img14 from '../Img/offgrid.jpeg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Rooftop = () => { 
    const [ name ,setName ] = useState("")
    const [ mobile ,setMobile ] = useState("")
    const [ city ,setCity ] = useState("")
    const [ product ,setProduct ] = useState("")

    const onSubmitForm = async(e) => {
        // e.preventDefault();
        try{
             const body = { name , mobile , city , product };
             const response = await fetch("http://localhost:5000/enquiers", {
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
              <title>Products | Solar Rooftop</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
            <p className="heading m">Solar Rooftop</p>
            <Link to="/Product" className="btn "><img className="hhh" src="/image/Background.png" alt="" />Back </Link>

            <div className="d-flex flex-wrap  justify-content-center">
                <div className="card text-center card-w" >
                    <img className="card-img-top" src="https://5.imimg.com/data5/TV/CY/MY-10927051/2-kw-solar-power-plant-500x500.jpg" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Ongrid Power Pack </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="#" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("Ongrid Power Pack")}  data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card text-center card-w">
                    <img className="card-img-top" src={Img14} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Offgrid Power Pack </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="#" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" onClick={() => setProduct("Offgrid Power Pack")}>ENQUIRE NOW</button>
                    </div>
                </div>

              

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-body">
                                    <form onSubmit={onSubmitForm}>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Name*"   name="name" value={name} onChange={e => setName(e.target.value)} required/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control"  placeholder="Phone*" required name="phone"value={mobile} onChange={e => setMobile(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="City"  id="recipient-name" value={city} onChange={e => setCity(e.target.value)}/>
                                        </div>
                                    <input type="text" className="d-none form-control" placeholder="Solar Rooftop " id="recipient-name"  />

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
                                    <button type="submit"  onClick={diffToast} className="btn btn-success" >Send Now</button>
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
export default Rooftop;

