import classNames from 'classnames';
import {
  useEffect,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { Button } from './Button.tsx';

export interface TMenuItem {
  label: string;
  id?: string;
  dropdownComponent?: ReactNode;
  isDropdown?: boolean;
}

interface THeaderProps {
  menuItems: TMenuItem[];
  isSticky?: boolean;
  [key: string]: string | TMenuItem[] | ReactNode | undefined;
}

export const Header: FC<THeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  menuItems = [],
  isSticky = true,
  className,
  ...otherProps
}) => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);

  const handleScroll = (): void => {
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
    <>
      <div
        className={classNames(
          'sticky top-0 z-10 block w-full justify-center',
          className,
          {
            'bg-transparent md:px-2 md:pt-8': isSticky && !isScrollAtTop,
            '!relative': !isSticky,
          },
        )}
        {...otherProps}
      >
        <div
          className={classNames(
            'm-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-6 md:px-8 xl:px-13',
            {
              'rounded-l bg-transparent md:bg-white md:shadow-md':
                isSticky && !isScrollAtTop,
              'transition-all duration-150 ease-in': !isSticky,
            },
          )}
        >
          <div
            className={classNames(
              'flex-1 text-l font-extrabold text-dark lg:flex-none',
              {
                'opacity-0 md:opacity-100': !isScrollAtTop,
              },
            )}
          >
            Cyram
          </div>
          <nav className='hidden md:justify-center lg:flex lg:flex-1'>
            <ul className='flex items-center justify-between lg:gap-3'>
              {menuItems.map((menuItem, index) => (
                <li
                  key={`header-${index}`}
                  className={classNames(
                    'relativelg:cursor-pointer group transition duration-150 ease-out hover:rounded-s hover:ease-in lg:hover:bg-[#EBEBEB]',
                  )}
                >
                  <a
                    href={`#${menuItem.id}`}
                    className='flex w-full items-center justify-between gap-1 px-3 py-2'
                  >
                    <p className='flex gap-x-1 text-s font-medium leading-[21px] text-dark'>
                      {menuItem.label}
                      {(menuItem.isDropdown ?? false) && (
                        <img src='arrow-chevron.svg' />
                      )}
                    </p>
                  </a>
                  {!!menuItem.id &&
                    !!menuItem.isDropdown &&
                    !!otherProps?.[menuItem.id] && (
                      <div
                        key={`header-dropdown-${menuItem.id}-${index}`}
                        className='absolute left-0 right-0 z-10 mx-auto mt-8 hidden max-w-[1280px] bg-transparent px-6 group-hover:block xl:px-13'
                      >
                        <div className='shadow-[0px 10px 10px 8px rgba(0, 0, 0, 0.10)] flex h-full w-full rounded-xl border border-dark-gray bg-cultured p-6'>
                          {otherProps?.[menuItem.id] as ReactNode}
                        </div>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center justify-between'>
            <Button
              title='Book a call'
              className={classNames(
                '!lg:text-xs !lg:py-3 !lg:px-6 !xl:text-s mr-4 !px-3 !py-2 !text-xxs !font-semibold lg:mr-0 ',
                {
                  'hidden md:flex': !isScrollAtTop,
                },
              )}
            />
            <button
              className={classNames('h-[35px] py-2', {
                'rounded-xs bg-white md:bg-transparent': !isScrollAtTop,
              })}
            >
              <img
                src='hamburger.svg'
                alt='mobile-menu-icon'
                className='h-4 w-6 lg:hidden'
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
