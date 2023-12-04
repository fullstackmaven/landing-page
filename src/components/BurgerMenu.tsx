import HamburgerIcon from '@assets/hamburger.svg';
import { type FC, type HTMLAttributes } from 'react';

interface TBurgerMenuProps extends HTMLAttributes<HTMLButtonElement> {}
const BurgerMenu: FC<TBurgerMenuProps> = ({ ...otherProps }) => {
  return (
    <button {...otherProps}>
      <img
        src={HamburgerIcon.src}
        alt='mobile-menu-icon'
        className='laptop:hidden'
      />
    </button>
  );
};

export default BurgerMenu;
