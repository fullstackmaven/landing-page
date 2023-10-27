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

  const handleScroll = () => {
    // Handle the scroll event here
    const threshold = 88; // Adjust this value as needed
    if (window.scrollY <= threshold) {
      setIsScrollAtTop(true);
    } else {
      setIsScrollAtTop(false);
    }
  };
  useEffect(() => {
    handleScroll();

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
        'sticky top-0 w-full flex items-center px-2 py-6 md:px-8 lg:px-4 z-10 transition-all duration-150 ease-in',
        className,
        {
          'bg-transparent md:!w-[calc(100%-16px)] !py-3 md:bg-white rounded-l md:shadow-md top-0 md:top-2 !left-2 w-fit':
            !isScrollAtTop,
        },
      )}
      {...otherProps}
    >
      <div
        className={classNames(
          'flex-1 lg:flex-none text-primary text-l font-extrabold',
          {
            'opacity-0 md:opacity-100': !isScrollAtTop,
          },
        )}
      >
        Cyram
      </div>
      <nav className='hidden lg:flex-1 md:justify-center lg:flex'>
        <ul className='flex justify-between items-center lg:gap-3'>
          {menuItems.map((menuItem, index) => (
            <li
              key={`header-${index}`}
              className='lg:cursor-pointer lg:hover:bg-[#EBEBEB] hover:rounded-s transition duration-150 ease-out hover:ease-in'
            >
              <a
                href={`#${menuItem.id}`}
                className='px-3 py-2 w-full flex justify-between items-center gap-1'
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
          className={classNames('!h-[35px] !text-s font-medium', {
            'hidden md:flex': !isScrollAtTop,
          })}
        />
        <button
          className={classNames('py-2 px-1 h-[35px]', {
            'bg-white md:bg-transparent rounded-xs': !isScrollAtTop,
          })}
        >
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
