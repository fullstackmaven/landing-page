import React from 'react';
import { Button } from './Button.jsx';

export const Header = () => {
  const menuItems = ['Programs', 'Why Cyram', 'Resources', 'Blog'];

  return (
    <div className='flex justify-between items-center px-2 py-6 md:px-8 lg:px-4 mt'>
      <div className='text-primary text-l font-extrabold'>
        Cyram
      </div>
      <nav className='hidden lg:flex'>
        <ul className='flex justify-between items-center lg:gap-3'>
          {menuItems.map((menuItem) => (
            <li className='text-primary text-s leading-[21px] font-medium'>
              <a href='#' className='flex justify-between items-center gap-1'>{menuItem} <img src='public/home-page/show-more.svg' alt='dropdown-icon'/></a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex justify-between items-center gap-4'>
        <Button title='Book a call' />
        <button><img src='public/home-page/hamburger.png' alt='mobile-menu-icon' className='w-6 h-4 lg:hidden'/></button>
      </div>

    </div>
  );
};
