import classNames from 'classnames';
import { useEffect, useState, type FC, type HTMLAttributes } from 'react';
import { Button } from './Button.tsx';

type TMenuItem = {
  label: string;
  id: string;
};
type THeaderProps = {
  menuItems: TMenuItem[];
};

export const Header: FC<THeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  menuItems = [],
  className,
  ...otherProps
}) => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    // Handle the scroll event here

    const threshold = 100; // Adjust this value as needed
    setIsScrolling(true);

    if (window.scrollY <= threshold) {
      setIsScrollAtTop(true);
    } else {
      setIsScrollAtTop(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        'fixed top-0 w-full flex justify-between items-center px-2 py-6 md:px-8 lg:px-4 z-10 transition-colors duration-150 ease-in',
        className,
        {
          'bg-white !w-fit md:!w-[calc(100%-16px)] !right-2 md:left-2  !top-6 rounded-l !px-2 !py-3 shadow-md':
            isScrolling && !isScrollAtTop,
        },
      )}
      {...otherProps}
    >
      <div
        className={classNames('text-primary text-l font-extrabold', {
          'hidden md:block': isScrolling && !isScrollAtTop,
        })}
      >
        Cyram
      </div>
      <nav className='hidden lg:flex'>
        <ul className='flex justify-between items-center lg:gap-3'>
          {menuItems.map((menuItem, index) => (
            <li
              key={`header-${index}`}
              className='cursor-pointer px-3 py-2 hover:bg-[#EBEBEB] hover:rounded-xs transition duration-150 ease-out hover:ease-in'
            >
              <a
                href={`#${menuItem.id}`}
                className='flex justify-between items-center gap-1'
              >
                <p className='text-primary text-s leading-[21px] font-medium'>
                  {menuItem.label}
                </p>
                {/* <img src='home-page/show-more.svg' alt='dropdown-icon' /> */}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex justify-between items-center gap-4'>
        <Button
          title='Book a call'
          className={classNames({
            'hidden md:block font-medium': isScrolling && !isScrollAtTop,
          })}
        />
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
