import 'bootstrap/dist/css/bootstrap.min.css';
import  {useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: "0.1px",
        width: "100%",
        margin: 0
      }}
    />
  );


const Newsletter = () => {
     
        window.scrollTo(0, 0)
      
    const [email , setEmail] = useState("")

    const onSubmitForm = async(e) => {
      // e.preventDefault();
      try{
           const body = { email };
           const response = await fetch(`/emails`, {
             method:"POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(body)
           });
           console.log(response);
      }catch (err) {
        console.log(err.message)
      }      
    }
  //   const diffToast = () =>{
  //     toast("Form submitted!");
  // }
    return (
        <div className="nl">
            <div className="container-fluid d-flex flex-wrap ">
                <div className="f-L">
                    <p className="nl-text">Get Update from Newsletter</p>
                </div>
                <div className="f-R">
                    <form className="nl-box input-group mb-3" onSubmit={onSubmitForm}>
                        <input type="text" className="form-control form" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" value={email} onChange={e => setEmail(e.target.value)}/>
                        <button className="btn bb btn-outline-success" type="submit" id="button-addon2">Subscribe Now</button>
                    </form>

                </div>
    

            </div>
            <ColoredLine color="gray" />
            {/* <ToastContainer style={{ marginTop: "90px" }} /> */}

        </div>
        


    );
}
export default Newsletter;