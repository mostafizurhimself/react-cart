import Footer from '@/components/Footer';
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { To } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { twMerge } from 'tailwind-merge';
import Header from './Header';

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
      return 'calc(100vh - 114px)';
    }

    if (showHeader || showFooter) {
      return 'calc(100vh - 57px)';
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

        <SimpleBar style={{ height: calculatedHeight, minHeight: calculatedHeight }}>
          <main className="flex flex-grow flex-col">{children}</main>
        </SimpleBar>
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
