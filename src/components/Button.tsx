import React from 'react';

type Props = {
  title: string;
  className: string;
};

export const Button: React.FC<Props> = ({ title, className }) => {
  return (
    <button
      className={`flex justify-center items-center text-xxs px-4 py-2 rounded-xxs bg-dark text-white md:text-s xl:px-8 xl:py-4 ${className}`}
    >
      {title}
    </button>
  );
};
