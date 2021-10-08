import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import { Height } from '@material-ui/icons';

// import Img18 from '../Img/purple.jpeg'
const Softnersystem  = () => {
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
              <title>Products | Solar Water Softner System</title>
      <meta name="description" content="Nyasa Energy System" />
      <meta name="keywords" content="Solar products & water solution" />
</Helmet>
            <p className="heading m">Solar  Water Softner System</p>
            <Link to="/Product" className="btn "><img className="hhh" src="/image/Background.png" alt="" />Back </Link>

            <div className="d-flex flex-wrap text-center justify-content-center">
                <div className="card card-w" >
                    <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2020/10/PO/SI/AC/101263134/zero-b-water-softener-500x500-500x500.jpg" alt="ngma" />
                    <div className="card-body">
                        <h4 className="card-title">Zero B Manual Softner </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => setProduct("Zero B Manual Softner ")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="/image/ngmff.jpeg" alt="ngmf" style={{height:"300px"}}/>
                    <div className="card-body">
                        <h4 className="card-title">Zero B Autosoft - 3 & 6 </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button
                        
                        className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("Zero B Auto - 3 & 6 ")}  data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>

                <div className="card card-w">
                    <img className="card-img-top" src="https://th.bing.com/th/id/OIP.fLlrgLUDwmWFDLOvU0qT1AHaHa?w=181&h=180&c=7&r=0&o=5&pid=1.7" alt="zeroB" />
                    <div className="card-body">
                        <h4 className="card-title">NGMA Carbon Filter</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProduct("NGBA Carbon Filter")} data-bs-whatever="@fat">ENQUIRE NOW</button>
                    </div>
                </div>
                <div className="card card-w">
                    <img className="card-img-top" src="https://5.imimg.com/data5/XD/GI/MQ/SELLER-36825996/auto-sand-500x500.jpg" alt="zeroBpurple" />
                    <div className="card-body">
                        <h4 className="card-title">Zero B Auto Sand Filter </h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <Link to="/PDF's/zero b broschure.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
                        <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={() => setProduct("Zero B Auto Sand Filter")}  data-bs-whatever="@fat">ENQUIRE NOW</button>
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
                                        <input type="text" className="form-control" placeholder="City" id="recipient-name"  value={city} onChange={e => setCity(e.target.value)} />
                                    </div>
                                    <input type="text" className="d-none form-control" placeholder="Solar Water Softner System" id="recipient-name"   />

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
export default Softnersystem;