import { Link } from 'react-router-dom';

function Action(params) {
    return(
<div className="plat d-flext">
    <div className=" text-center">
    <h1 className="h1plate color-white">Providing Value To Clients Through<br />
Product & Innovation.</h1>
{/* <button type="button" class="btn ">Contact Us Now</button> */}
<div className=""><Link to="/Contact" className="btn btn-dark">Contact Us</Link></div>

</div>

    
</div>

    );
}
export default Action;