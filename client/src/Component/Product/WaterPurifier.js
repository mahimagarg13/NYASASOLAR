import React  from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaterPurifier = () => {
    const [ name ,setName ] = useState("")
    const [ mobile ,setMobile ] = useState("")
    const [ city ,setCity ] = useState("")
    const [ product ,setProduct ] = useState("");
    // const [show, setShow] = useState(false)

    // const handleClose = () => setShow(false);

    const onSubmitForm = async(e) => {
        // e.preventDefault();
        // handleClose();

        try{
             const body = { name , mobile , city , product };
             const response = await fetch("http://localhost:5000/enquiers", {
               method:"POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(body)
             });
            //  modal.setAttribute("data-bs-dismiss", "modal");
             console.log(response);
            // toast("Form submitted!");
     
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
              <title>Products | Water Purifier</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
            <p className="heading m">Solar Water Purifier</p>
            <Link to="/Product" className="btn "><img className="hhh" src="/image/Background.png" alt="" />Back </Link>
          
            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top " src="https://www.ozeanro.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/w/o/wooden3.jpg" alt="purifier1" />
                    <div className="card-body">
                        <h4 className="card-title"> Water Purifier </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/HWS Booklet 2019_A5 SIZE_10-10-19 (2).pdf" target="_blank" className="btn mb-2  btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn  btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("Water Purifier")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

              
                <div className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

        <div className="modal-body">
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name*" name="name"  value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone*"  value={mobile} onChange={e => setMobile(e.target.value)} required name="phone" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="City"  value={city} onChange={e => setCity(e.target.value)} id="recipient-name" />
                </div>
                <input type="text" className="d-none form-control" placeholder="Water Purifier"  id="recipient-name" />

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
            <button type="submit"   onClick={diffToast} className="btn btn-success" >Send Now</button>
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
export default  WaterPurifier;