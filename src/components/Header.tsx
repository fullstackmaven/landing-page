import classNames from 'classnames';
import {
  useEffect,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import BurgerMenu from './BurgerMenu.tsx';
import { Button } from './Button.tsx';
import MenuDrawer from './MenuDrawer.tsx';

export interface TMenuItem {
  label: string;
  id?: string;
  dropdownComponent?: ReactNode;
  isDropdown?: boolean;
  isLeft?: boolean;
}

type TOnClickMenuHandler = (isMenuDrawerOpen: boolean) => void;
interface THeaderProps {
  [key: string]:
    | string
    | TMenuItem[]
    | ReactNode
    | TOnClickMenuHandler
    | undefined;
  menuItems: TMenuItem[];
  isSticky?: boolean;
  onClickMenu?: TOnClickMenuHandler;
}

export const Header: FC<THeaderProps & HTMLAttributes<HTMLElement>> = ({
  menuItems = [],
  isSticky = true,
  onClickMenu,
  className,
  ...otherProps
}) => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [active, setActive] = useState<string | undefined>(undefined);

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
    window.addEventListener('scroll', () => {
      handleScroll();
    });

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    onClickMenu?.(isMenuDrawerOpen);

    //remove scroll when menu drawer is open
    document.body.style.overflow = isMenuDrawerOpen ? 'hidden' : 'auto';
  }, [isMenuDrawerOpen]);

  const renderHeaderItems = () => {
    return menuItems?.map((menuItem, index) => {
      if (menuItem.id && menuItem.isDropdown && otherProps?.[menuItem.id]) {
        return (
          <div
            key={`header-dropdown-${menuItem.id}-${index}`}
            className={classNames(
              'absolute left-0 right-0 z-0 mx-auto max-w-[1280px] bg-transparent px-4 transition-all delay-300 ease-in md:px-8 lg:px-12 xl:px-13',
              {
                'z-20 block': menuItem.id === active && isScrollAtTop,
                'z-0 hidden': menuItem.id !== active && isScrollAtTop,
                'z-20': !isScrollAtTop,
                '!top-[96px] !block': menuItem.id === active && !isScrollAtTop,
                '!z-0 hidden !opacity-0':
                  menuItem.id !== active && !isScrollAtTop,
              },
            )}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setActive(undefined);
            }}
          >
            <div className='flex h-full w-full rounded-xl border border-[#DEDCD3] bg-cultured p-6 shadow-2xl'>
              {otherProps?.[menuItem.id] as ReactNode}
            </div>
          </div>
        );
      }

      return null;
    });
  };

  return (
    <>
      <header
        className={classNames(
          'sticky top-0 z-10 block w-full justify-center',
          className,
          {
            'bg-transparent lg:pt-6': isSticky && !isScrollAtTop,
            '!relative': !isSticky,
          },
        )}
        {...otherProps}
      >
        <div className='mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12 xl:px-13'>
          <div
            className={classNames(
              'flex w-full items-center justify-between py-6 transition-all duration-300 ease-in',
              {
                'rounded-l bg-transparent lg:bg-white lg:!px-2 lg:!py-3 lg:shadow-md':
                  isSticky && !isScrollAtTop,
                'transition-all duration-150 ease-in': !isSticky,
              },
            )}
          >
            <h1
              className={classNames(
                'flex-1 text-l font-extrabold text-dark lg:flex-none',
                {
                  'opacity-0 lg:opacity-100': !isScrollAtTop,
                },
              )}
            >
              Cyram
            </h1>

            {menuItems
              .filter((menuItem) => menuItem.isLeft)
              .map((menuItem, index) => (
                <div
                  key={`header-left-${index}`}
                  className='ml-4 hidden lg:block'
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    setActive(menuItem.id);
                  }}
                >
                  <a
                    href={`#${menuItem.id}`}
                    className={classNames(
                      'relative flex w-full items-center justify-between gap-1 rounded-s px-3 py-2 transition duration-150 ease-out hover:ease-in lg:cursor-pointer lg:hover:bg-[#EBEBEB]',
                      {
                        'lg:bg-[#EBEBEB]': menuItem.id === active,
                        'lg:bg-transparent': menuItem.id !== active,
                      },
                    )}
                  >
                    <p className='flex gap-x-1 text-s font-medium leading-[21px] text-dark'>
                      {menuItem.label}
                      {(menuItem.isDropdown ?? false) && (
                        <img src='arrow-chevron.svg' />
                      )}
                    </p>
                  </a>
                </div>
              ))}

            <nav className='hidden md:justify-center lg:flex lg:flex-1'>
              <ul className='relative flex w-full items-center justify-center'>
                {menuItems
                  .filter((menuItem) => !menuItem.isLeft)
                  .map((menuItem, index) => (
                    <li
                      key={`header-${index}`}
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        setActive(menuItem.id);
                      }}
                    >
                      <a
                        href={`#${menuItem.id}`}
                        className={classNames(
                          'relative flex w-full items-center justify-between gap-1 rounded-s px-3 py-2 transition duration-150 ease-out hover:ease-in lg:cursor-pointer lg:hover:bg-[#EBEBEB]',
                          {
                            'lg:bg-[#EBEBEB]': menuItem.id === active,
                            'lg:bg-transparent': menuItem.id !== active,
                          },
                        )}
                      >
                        <p className='flex gap-x-1 font-medium text-dark lg:text-xs xl:text-s'>
                          {menuItem.label}
                          {(menuItem.isDropdown ?? false) && (
                            <img src='arrow-chevron.svg' />
                          )}
                        </p>
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
            <Button
              title='Book a call'
              className={classNames(
                'mr-4 !px-3 !py-2 !font-semibold lg:mr-0 lg:!px-6 lg:!py-3 lg:text-xs xl:text-s ',
                {
                  'hidden lg:flex': !isScrollAtTop,
                },
              )}
            />
            <BurgerMenu
              className={classNames('bg-transparent shadow-md lg:hidden', {
                'rounded-xs bg-white p-2 transition-colors duration-300 ease-in':
                  !isScrollAtTop && isSticky,
              })}
              onClick={() => setIsMenuDrawerOpen((prev) => !prev)}
            />
          </div>
        </div>
        {renderHeaderItems()}
      </header>

      <MenuDrawer
        className={classNames('fixed top-0 z-[50] !overflow-hidden lg:hidden', {
          block: isMenuDrawerOpen,
          hidden: !isMenuDrawerOpen,
          // '!sticky': !isScrollAtTop && isMenuDrawerOpen,
        })}
        onClose={() => setIsMenuDrawerOpen(false)}
      />
    </>
  );
};
