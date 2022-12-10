import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, To } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Footer from '@/components/common/Footer';
import Header from './common/Header';

type Props = {
  title: string;
  className?: string;
  previousPath?: To;
  showHeader?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
};

const Layout = ({ title, className, previousPath, showHeader = true, showFooter = true, children }: Props) => {
  const calculatedHeight = useMemo(() => {
    if (showHeader && showFooter) {
      return 'calc(100vh - 112px)';
    }

    if (showHeader || showFooter) {
      return 'calc(100vh - 56px)';
    }

    return '100vh';
  }, [showFooter, showHeader]);

  return (
    <>
      <Helmet title={title} titleTemplate={`%s - React Cart`}>
        <meta name="description" content={'This is a simple shopping cart built with React and Redux.'} />
      </Helmet>

      <div className={twMerge('mx-auto h-screen max-w-md border', className)}>
        {showHeader && <Header title={title} previousPath={previousPath} />}

        <main className="overflow-auto" style={{ height: calculatedHeight }}>
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
