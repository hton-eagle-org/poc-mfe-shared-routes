import React from 'react';
import {Link, useHistory, useParams} from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: '#7a6f27',
  color: 'white',
  padding: 12,
};


const ProductList = () => {
  const history = useHistory();
  const  prodId = useParams().prodId;
  const handleNavigation = () => {
    history.push('/products');
  };

  return (
    <div style={style}>
      <h1>Product Detail Page of ProdId: {prodId}</h1>
      <p>
        <em>Show some product detail information</em>
      </p>
      <button onClick={() => handleNavigation()}>Go To Products</button>
      <p><Link to="/about">Go To About</Link></p>
      <p><Link to="/">Go To Home</Link></p>
    </div>
  );
};

export default ProductList;
