import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, To } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { FiChevronLeft } from 'react-icons/fi';

type Props = {
  title: string;
  className?: string;
  previousPath?: To;
  children: React.ReactNode;
};

const Layout = ({ title, className, previousPath, children }: Props) => {
  return (
    <>
      <Helmet title={title} titleTemplate={`%s - React Cart`}>
        <meta name="description" content={'This is a simple shopping cart built with React and Redux.'} />
      </Helmet>

      <div className={twMerge('mx-auto h-screen max-w-md border', className)}>
        <header className="sticky top-0 flex h-14 items-center justify-center bg-white shadow-sm">
          {previousPath && (
            <Link to={previousPath}>
              <FiChevronLeft
                className="absolute top-[18px] left-4 text-gray-600 transition-colors duration-150 hover:text-gray-900"
                size={20}
              />
            </Link>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </header>

        <main className="px-4">{children}</main>

        <footer className="">Footer</footer>
      </div>
    </>
  );
};

export default Layout;
