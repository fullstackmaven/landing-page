import { type FC, type HTMLAttributes } from 'react';

interface TBurgerMenuProps extends HTMLAttributes<HTMLButtonElement> {}
const BurgerMenu: FC<TBurgerMenuProps> = ({ ...otherProps }) => {
  return (
    <button {...otherProps}>
      <img
        src='hamburger.svg'
        alt='mobile-menu-icon'
        className='h-4 w-6 lg:hidden'
      />
    </button>
  );
};

export default BurgerMenu;
