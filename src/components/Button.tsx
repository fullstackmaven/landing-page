import classNames from 'classnames';
import React, { type HTMLAttributes } from 'react';

interface Props {
  title: string;
}

export const Button: React.FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  title,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(
        'flex items-center justify-center rounded-s bg-dark px-6 py-3 text-s text-white md:text-s',
        className,
      )}
      {...otherProps}
    >
      {title}
    </button>
  );
};
