import { Link } from 'react-router-dom';


function Hero() {
    return (
        <div className="container-fluid margin-top  d-flex flex-wrap">
            <div className="flex-right">
                <img src="/image/home.gif" className="img"  alt="" />
            </div>
            <div className="flex-left text-center">
                <h1 className="h1 h1-1 text-center">SMART SOLUTIONS FOR WATER AND SOLAR ENERGY</h1>
                <Link to="./Product" className="btn   btn-outline-success">View Products</Link>
            </div>
        </div>
    );
}

export default Hero;
