import React from 'react';
import {Link, useHistory} from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: '#277a2a',
  color: 'white',
  padding: 12,
};


const ProductList = () => {
  const history = useHistory();
  const handleNavigation = () => {
    history.push('/about');
  };

  return (
    <div style={style}>
      <h1>Products Page</h1>
      <p>
        <em>a page being provided by App 3</em>
        <button onClick={() => handleNavigation()}>Go To About</button>
        {mockedProducts.map(product => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </p>
    </div>
  );
};

const mockedProducts = new Array(10).fill(0).map((_, index) => ({
  id: index,
  name: `Product ${index}`,
}));

export default ProductList;
