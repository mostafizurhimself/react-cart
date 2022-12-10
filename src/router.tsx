import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import { RouteObject } from 'react-router-dom';
import Error404 from '@/components/Error404';
import Loader from '@/components/Loader';

const HomePage = React.lazy(() => import('@/pages/home'));
const CategoryPage = React.lazy(() => import('@/pages/category'));
const CartPage = React.lazy(() => import('@/pages/cart'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/categories/:slug',
    element: <CategoryPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];

const Router = () => {
  const element = useRoutes(routes);

  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Loader />
        </div>
      }
    >
      {element}
    </Suspense>
  );
};

export default Router;
