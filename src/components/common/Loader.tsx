import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

const Loader = ({ className }: Props) => {
  return (
    <div
      className={twMerge('h-24 w-24 animate-spin rounded-full border-t-2 border-b-2 border-purple-500', className)}
    ></div>
  );
};

export default Loader;
