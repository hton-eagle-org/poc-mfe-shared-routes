import React from 'react';

const ProductList = React.lazy(() => import('./ProductList'));

const ProductDetail = React.lazy(() => import('./ProductDetail'));
const routes = [
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '/product/:prodId',
    component: ProductDetail,
  },
];

export default routes;
