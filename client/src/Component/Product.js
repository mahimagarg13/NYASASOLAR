import './Style.css';
import React from 'react';
import Products from './Product/Category';
// import  { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function Product() {
     
        window.scrollTo(0, 0)
      
    return (
        <>
          <Helmet>
            <title>Nyasa Energy System | Products</title>
            <meta name="description" content="Nyasa Energy System" />
            <meta name="keywords" content="Solar products & water solution" />
        </Helmet>
            <Products />
        </>
    );
}
export default Product;