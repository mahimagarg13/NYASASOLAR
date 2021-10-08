// // import React  from "react";
// import Img19 from '../Img/lubi.jpeg';
// // import Img20 from '../Img/light2.jpeg';
// // import Img21 from '../Img/light3.jpeg';
// import { Link } from 'react-router-dom';

// function LubiPump() {
//     return (
//         <div className="div">
//             <p className="heading">LUBI PUMP</p>
//             <div className="d-flex flex-wrap text-center justify-content-center">
//                 <div className="card card-w" >
//                     <img className="card-img-top" src={Img19} alt="streetlight1" />
//                     <div className="card-body">
//                         <h5 className="card-title">Street light  </h5>
//                         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//                         <Link to="/PDF's/lubi.pdf" target="_blank" className="btn mb-2 btn-outline-success">VIEW DETAILS</Link>
//                         <button className="btn  btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">ENQUIRE NOW</button>
//                     </div>
//                 </div>

               
//                 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

//                     <div className="modal-dialog modal-dialog-centered">
//                         <div className="modal-content">

//                             <div class="modal-body">
//                                 <form>
//                                     <div class="mb-3">
//                                         <input type="text" className="form-control" placeholder="Name*" name="name" required />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="text" className="form-control" placeholder="Phone*" required name="phone" />
//                                     </div>
//                                     <div className="mb-3">
//                                         <input type="text" className="form-control" placeholder="City" id="recipient-name" />
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
//                                 <label className="form-check-label" for="flexCheckDefault">
//                                     I authorize Nyasa Energy System to contact me and share offer with me
//                                 </label>
//                             </div>

//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 <button type="submit" data-bs-dismiss="modal" className="btn btn-success">Send Now</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default LubiPump;