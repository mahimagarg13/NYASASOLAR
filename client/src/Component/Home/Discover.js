import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Discover() {
    return (<div className="">
        <p className="text-center discover heading ">Discover The Advantages</p>
        <p className="p1">Solar Energy – Today’s resource for a brighter tomorrow!</p>
        <div className="container-fluid d-flex flex-wrap">

            <div className="f-L h">
            

                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="/image/solaricon.png"  alt=""/>
                            <h6 className="clrd"> Best Solar System & Water Solution</h6>
                            <p className="pd">Huge collection of best solar syetem. </p>

                        </div></div>
                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="/image/wind.png"  alt="" />
                            <h6 className="clrd">Best Customer Servicess</h6>
                            <p className="pd">Make customer happy with our best services.</p>

                        </div></div>
                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="/image/garan.png"  alt=""/>
                            <h6 className="clrd">Extended Gaurantee</h6>
                            <p className="pd">Extended gaurantee with lowest price.</p>

                        </div></div>
                    <div className="card card-div m-b">
                        <div className="card-body">
                            <img className="h-w2" src="http://sdhinfotech.com//pages/assets/images/icon/bestquality.png"  alt=""/>
                            <h6 className="clrd">Best Quality Provide</h6>
                            <p className="pd">We provide best quality of products.</p>

                        </div></div><Link to="/service" className="btn  btn-lg btn-block btn-outline-success">View All</Link>


                </div>
        
            <div className="f-R h">
                <img className="f-l " src="/image/discover.gif"  alt="" />
            </div>

        </div>



    </div>

    );
}
export default Discover;