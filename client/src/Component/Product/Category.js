// import { green } from '@material-ui/core/colors';

// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function Category() {
    return (
        <div className="product-main">
            <p className="heading">What Are You Looking For?</p>
            <div className="product-container">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center ">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                 <img className="h-w" src="/image/Roof Top.png" alt="rooftop" />
                                    <h6 className="color mb-2 text-center"> Solar Rooftop</h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary" >
                                            View Products
                                        </Button> */}
                                    <Link to="/rooftop" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="card card-div w m-b ">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/street light.png"  alt="street" />
                                    <h6 className="color  text-center">
                                        Solar Street Light </h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/streetlight" type="button" className="btn btn-outline-success">View Products</Link >

                                </div> </div>   </div>
                                <div className="col">
                            <div className="card card-div w m-b ">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/Water Booster Pump.png"  alt="booster" />
                                    <h6 className="color  text-center">
                                   Preasure Booster </h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/booster" type="button" className="btn btn-outline-success">View Products</Link >

                                </div> </div>   </div>
                                {/* <div className="col">
                            <div className="card card-div w m-b ">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/Lubi pumps.png"  alt="lubi" />
                                    <h6 className=" text-center color">
                                       LUBI PUMP</h6>
                                    
                                    <Link to="/lubiPump" type="button" className="btn btn-outline-success">View Products</Link >

                                </div> </div>   </div> */}
                        <div className="col">
                            <div className="card card-div w m-b">

                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/solar hybrid system.png"  alt="hybrid" />
                                    <h6 className="color  text-center">Solar Hybird System </h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/hybridsystem" type="button" className="btn btn-outline-success">View Products</Link >

                                </div></div>
                        </div>
                        <div className="col">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/Water cooler.png"  alt="cooler"/>
                                    <h6 className="color  text-center">Water Cooler</h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/watercooler" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>
                        {/* <div className="col">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/CM booster.png"  alt="booster"/>
                                    <h6 className="color  text-center">GRUNDFOS CM BOOSTER PUMP</h6>
                                    <Link to="/grundosPump" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div> */}
                        
                        {/* </div>
            </div>
            <div className="container m-top">
                < div className="row"> */}
                        <div className="col">
                            <div className="card card-div w m-b text-center">
                                <div className="card-body custom-width ">
                                    <img className="h-w" src="/image/water heater.png"   alt="heater"/>
                                    <h6 className="color text-center">  Hot Water System</h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/waterHeater" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/water purifier.png"  alt="purifier" />
                                    <h6 className="color  text-center">Water Purifer RO </h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting . </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/waterPurifier" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/Water softener.png"  alt="softner" />
                                    <h6 className="color  text-center">  Water Softner System</h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/softnersystem" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/heat pump.png"  alt="heatpump"/>
                                    <h6 className="color  text-center">  Solar Water Heater </h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/NonPresssurePump" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-div w m-b">
                                <div className="card-body custom-width">
                                    <img className="h-w" src="/image/Submersible pump.png"  alt="submersible"/>
                                    <h6 className="color  text-center">  Openwell Pump      </h6>
                                    {/* <p className="pd">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
                                    {/* <Button variant="outlined" color="primary">
                                            View Products
                                        </Button> */}
                                    <Link to="/submersiblePump" type="button" className="btn btn-outline-success">View Products</Link >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Category;