import classNames from 'classnames';
import {
  useEffect,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { Button } from './Button.tsx';

export type TMenuItem = {
  label: string;
  id?: string;
  dropdownComponent?: ReactNode;
};
type THeaderProps = {
  menuItems: TMenuItem[];
  isSticky?: boolean;
};

export const Header: FC<THeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  menuItems = [],
  isSticky = true,
  className,
  ...otherProps
}) => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);

  const handleScroll = () => {
    // Handle the scroll event here
    const threshold = 104; // Adjust this value as needed
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
      className={classNames('sticky top-0 z-10', className, {
        'bg-transparent md:px-2 md:pt-8': isSticky && !isScrollAtTop,
        '!relative': !isSticky,
      })}
      {...otherProps}
    >
      <div
        className={classNames(
          'w-full flex items-center justify-between px-4 py-6 md:px-8 lg:px-12',
          {
            'bg-transparent rounded-l md:bg-white md:shadow-md':
              isSticky && !isScrollAtTop,
            'transition-all duration-150 ease-in': !isSticky,
          },
        )}
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
                className={classNames(
                  'relativelg:cursor-pointer lg:hover:bg-[#EBEBEB] hover:rounded-s transition duration-150 ease-out hover:ease-in group',
                )}
                onMouseOver={() => {}}
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
                {menuItem.id && otherProps[menuItem.id] && (
                  <div className='absolute origin-top-right bg-transparent z-10 px-6 left-0 right-0 mx-auto w-full hidden group-hover:block'>
                    <div className='flex bg-cultured w-full h-full p-6 mt-6 rounded-xl shadow-lg'>
                      {menuItem.id && otherProps[menuItem.id]}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex justify-between items-center'>
          <Button
            title='Book a call'
            className={classNames('font-semibold lg:text-xs lg:py-3 lg:px-6', {
              'hidden md:flex': !isScrollAtTop,
            })}
          />
          <button
            className={classNames('py-2 h-[35px]', {
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
    </div>
  );
};
