import { Helmet }  from "react-helmet";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Booster = () => {
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
      <title>Products | Pressure Booster Pump</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
            {/* <Link to="/Product" className="btn btn-dark">Back</Link> */}
            <p className="heading m"> Pressure Booster Pumps</p>
            <Link to="/Product" className="btn "><img className="hhh" src="/image/Background.png" alt="" />Back </Link>

            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://malvernirrigation.com.au/wp-content/uploads/2016/08/s-l640.jpg" alt="" />
                    <div className="card-body">
                        <h4 className="card-title"> Grundfos CM Booster Pumps</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/CM Booster.pdf" target="_blank"  className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("Grundfos CM Booster Pumps")}  data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.LyHHHjgOCRgbmi1hJXVtagHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7" alt="" />
                    <div className="card-body">
                        <h4 className="card-title mg-b40">Lubi Pumps</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/Lubi Pump.pdf" starget="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("Lubi Pumps")}  data-bs-whatever="@fat">ENQUIRE NOW</button>
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
                                        <input type="text" className="form-control" placeholder="City"  name="name" value={city} onChange={e => setCity(e.target.value)} id="recipient-name" required/>
                                    </div>
                                    <input type="text" className="d-none form-control" placeholder="Pressure Booster Pump" id="recipient-name" />

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
export default Booster;