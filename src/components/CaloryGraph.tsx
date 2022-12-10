import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: number;
};

const CaloryGraph = ({ value }: Props) => {
  const getPercentage = (value: number) => {
    return (value / 1000) * 100;
  };

  const getProgressColor = (value: number) => {
    if (value > 800) {
      return 'border-red-500';
    }
    if (value > 500 && value <= 800) {
      return 'border-orange-500';
    }
    return 'border-green-500';
  };
  return (
    <div className="relative h-10 w-10">
      <div
        className={twMerge('absolute top-0 left-0 h-full w-full rounded-full border-2', getProgressColor(value))}
      ></div>
      <div
        className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-gray-200"
        style={{ clipPath: `inset(0 ${getPercentage(value)}% 0 0)` }}
      ></div>
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
        <p className="text-[12px] font-semibold leading-none">{value}</p>
        <p className="text-[10px] leading-none">cal</p>
      </div>
    </div>
  );
};

export default CaloryGraph;
