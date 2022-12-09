import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import { RouteObject } from 'react-router-dom';

const HomePage = React.lazy(() => import('@/pages/home'));
const ProductPage = React.lazy(() => import('@/pages/products'));
const CartPage = React.lazy(() => import('@/pages/cart'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
];

const Router = () => {
  const element = useRoutes(routes);

  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default Router;
