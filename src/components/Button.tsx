import classNames from 'classnames';
import React, { type HTMLAttributes } from 'react';

type TButtonCategory = 'ghost';

interface Props {
  title: string;
  category?: TButtonCategory;
}

export const Button: React.FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  title,
  category,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(
        'flex items-center justify-center rounded-s bg-primary px-3 py-2 text-xs font-semibold text-white tablet:text-s',
        {
          'border-2 !border-primary !bg-transparent !text-primary':
            category === 'ghost',
        },
        className,
      )}
      {...otherProps}
    >
      {title}
    </button>
  );
};
