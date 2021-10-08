import './Style.css';
// import  { useEffect } from 'react';
import Hero from "./Home/Hero"
import Aboutus from "./Home/Aboutus"
import Discover from './Home/Discover';
import Choose from './Home/Choose';
import Counter from './Home/Counter';
// import Newsletter from './Newsletter';
// import Footer from './Footer';
import {Helmet} from "react-helmet";


function Home() {
   
    window.scrollTo(0, 0)
    // document.title = "Nyasa Energy System | Solar Water Heater Suppliers in Indore"
    // document.meta = ""
    
  return (
    <>
     <Helmet>
        <title>Nyasa Energy System</title>
        <meta name="description" content="Nyasa Energy System" />
        <meta name="keywords" content="Solar products & water solution" />
    </Helmet>
      <Hero />
      <Aboutus />
      <Discover />
      <Counter />
      <Choose />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}
export default Home;