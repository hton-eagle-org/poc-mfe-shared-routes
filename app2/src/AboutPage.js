import React from 'react';
import {Link, useHistory} from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: '#3f51b5',
  color: 'white',
  padding: 12,
};


const AboutPage = () => {
  const history = useHistory();
  const handleNavigation = () => {
    history.push('/products');
  };

  return (
    <div style={style}>
      <h1>About Page</h1>
      <p>
        <em>a page being provided by App 2</em>
      </p>
      <div>
        <button onClick={() => handleNavigation()}>Go to Products</button>
      </div>
    </div>
  );
};

export default AboutPage;
