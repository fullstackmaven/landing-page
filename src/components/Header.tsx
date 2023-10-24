import classNames from 'classnames';
import type { FC, HTMLAttributes } from 'react';
import { Button } from './Button.tsx';

type THeaderProps = {
  menuItems: string[];
};

export const Header: FC<THeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  menuItems = [],
  className,
  ...otherProps
}) => {
  return (
    <div
      className={classNames(
        'lg:sticky lg:top-0 w-full flex justify-between items-center px-2 py-6 md:px-8 lg:px-4 z-10',
        className,
      )}
      {...otherProps}
    >
      <div className='text-primary text-l font-extrabold'>Cyram</div>
      <nav className='hidden lg:flex'>
        <ul className='flex justify-between items-center lg:gap-3'>
          {menuItems.map((menuItem, index) => (
            <li key={`header-${index}`} className='px-3 py-2'>
              <a href='#' className='flex justify-between items-center gap-1'>
                <p className='text-primary text-s leading-[21px] font-medium'>
                  {menuItem}
                </p>
                <img src='home-page/show-more.svg' alt='dropdown-icon' />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex justify-between items-center gap-4'>
        <Button title='Book a call' className='font-semibold' />
        <button>
          <img
            src='hamburger.svg'
            alt='mobile-menu-icon'
            className='w-6 h-4 lg:hidden'
          />
        </button>
      </div>
    </div>
  );
};
