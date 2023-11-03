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
        'flex justify-center items-center text-s px-6 py-3 rounded-s bg-dark text-white md:text-s',
        className,
      )}
      {...otherProps}
    >
      {title}
    </button>
  );
};
