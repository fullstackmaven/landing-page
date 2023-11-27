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
        'bg-dark flex items-center justify-center rounded-s px-6 py-3 text-s text-white tablet:text-s',
        className,
      )}
      {...otherProps}
    >
      {title}
    </button>
  );
};
