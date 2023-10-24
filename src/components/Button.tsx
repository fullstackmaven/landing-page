import classNames from 'classnames';
import React, { type HTMLAttributes } from 'react';

type Props = {
  title: string;
};

export const Button: React.FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  title,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(
        'flex justify-center items-center text-s px-4 py-2 rounded-s bg-dark text-white md:text-s xl:px-8 xl:py-4',
        className,
      )}
      {...otherProps}
    >
      {title}
    </button>
  );
};
