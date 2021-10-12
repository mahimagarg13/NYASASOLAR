import React, { useState } from "react";
import { Card, CardContent, Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { blueGrey } from "@material-ui/core/colors";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { firstname, lastname, email, subject, message }

            const response = fetch(`/infos`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message)
        }
    }
    const diffToast = () => {
        toast("Form submitted!");
    }
    return (
        <div className="bg">

            <div className="container-fluid d-flex flex-wrap" >
                <div className="left m-top m-btm">
                    <Card>
                        <CardContent>
                            <h3 align="center">Let's Start a Conversation</h3>

                            <form onSubmit={onSubmitForm}>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField label="First Name" placeholder="Enter First Name" variant="outlined" value={firstname} onChange={e => setFirstname(e.target.value)} fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" value={lastname} onChange={e => setLastname(e.target.value)} fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type="email" label="Email" placeholder="Enter Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type="text" placeholder="Subject" variant="outlined" fullWidth required label="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField label="Message" multiline rows={4} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <button type="submit" onClick={diffToast}  className="btn  btn-primary btn-lg btn-block">Submit</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>


                </div>
                <div className="dtails   bkgrd m-top m-btm color-white" >
                    <h3 className="mt text-center">Contact Information</h3><br />
                    <div className="d-flex inform g-0" flexdirection="row" >
                        <div className="ico">

                            <h6 className="mb mu" > < PhoneAndroidIcon style={{ color: blueGrey[100] }} /></h6>

                            <h6 className="mb">< MailOutlineRoundedIcon style={{ color: blueGrey[100] }} /></h6>
                            <h6 className="mb">< PinDropIcon style={{ color: blueGrey[100] }} /></h6>

                        </div>

                        <div className="information">
                            <div className="m-bt">+91-9516247583,<br />+91-8461937264</div>
                            <div className="m-bt">abhi85558@yahoo.co.in<br /></div>
                            <div className="">130, Mangal Murthi Nagar, Scheme No 77, Behind Mayur Hospital, Ring Road, Indore, 452018 Madhya Pradesh
                            </div >

                        </div>

                    </div>
                    <div className="text-center mt-3">
                        <a href="https://www.facebook.com/NYASA-Energy-System-1819123591654014/" rel="noopener noreferrer" target="_blank" className="icon ">< FacebookIcon style={{ color: blueGrey[100] }} /></a>
                        <a href="https://wa.me/9516247583" target="_blank" rel="noopener noreferrer" className="icon">< WhatsAppIcon style={{ color: blueGrey[100] }} /></a>
                        <a href="https://www.instagram.com/nyasaenerygysystem/" rel="noopener noreferrer" target="_blank" className="icon">< InstagramIcon style={{ color: blueGrey[100] }} /></a>
                        <a href="https://twitter.com/NyasaEnergy" rel="noopener noreferrer"  target="_blank" className="icon">< TwitterIcon style={{ color: blueGrey[100] }} /></a>

                    </div>
                </div>
            </div>
            <ToastContainer style={{ marginTop: "90px" }} />
        </div>

    );
}
export default Details;