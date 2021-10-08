import { SRLWrapper } from "simple-react-lightbox"
export default function Galary(props) {
    console.log(props.state.images)

    return (
        <div className="mar-top">
         <p className="m heading">Gallery</p>
            <div className="text-center lm" handlesettag="{setTag}">
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="one" handlesettag="{setTag}">Solar Heater</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="two" handlesettag="{setTag}">Solarizer</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="three" handlesettag="{setTag}">Rooftop</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary} name="four" handlesettag="{setTag}" >Solarizer spring</button>
                <button className="btn m-2  btn-outline-success"  onClick={props.filterGalary}  name="all" handlesettag="{setTag}">All</button>
            </div>
                <SRLWrapper>

            <div className="gallery">
          {props.state.images.map((image) => (
                          <a href={image.src}>

              <img className="pics" src={image.src} alt="" />
              </a>
          ))}
        
            </div>
            </SRLWrapper>
         </div>
    )
}
