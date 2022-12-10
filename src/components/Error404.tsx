import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  // return a 404 page component with a link to the home page
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center" role="alert">
      <div className="mx-auto max-w-xl px-1 text-red-500">
        <h2 className="text-lg font-semibold">404 - Page Not Found</h2>
        <p className="overflow-auto">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="duration-15 mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm text-white transition-all enabled:hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:text-slate-200"
        >
          Go To Home Page
        </Link>
      </div>
    </div>
  );
};

export default Error404;
