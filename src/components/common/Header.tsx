import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, To } from 'react-router-dom';

type Props = {
  title: string;
  previousPath?: To;
};

const Header = ({ title, previousPath }: Props) => {
  return (
    <header className="sticky top-0 flex h-14 items-center justify-center bg-white shadow-sm">
      {!!previousPath && (
        <Link to={previousPath}>
          <FaChevronLeft className="absolute top-[20px] left-4" />
        </Link>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
  );
};

export default Header;
