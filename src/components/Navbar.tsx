import ArrowChevronIcon from '@assets/arrow-chevron.svg';
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

const Navbar: FC<THeaderProps & HTMLAttributes<HTMLElement>> = ({
  menuItems = [],
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
              'absolute left-0 right-0 mx-auto max-w-[1280px] bg-transparent px-4 transition-all delay-300 ease-in tablet:px-8 laptop:px-12',
              {
                'z-20 block': menuItem.id === active && isScrollAtTop,
                'z-0 hidden': menuItem.id !== active && isScrollAtTop,
                'z-20': !isScrollAtTop,
                '!top-16 !block': menuItem.id === active && !isScrollAtTop,
                '!z-0 hidden !opacity-0':
                  menuItem.id !== active && !isScrollAtTop,
              },
            )}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setActive(undefined);
            }}
          >
            <div className='z-50 flex h-full w-full rounded-2xl border border-gray-200 bg-cultured p-6 shadow-2xl'>
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
          'relative top-0 z-50 h-full w-full min-w-full justify-center bg-transparent',
          className,
          {
            // 'bg-transparent': isSticky && !isScrollAtTop,
            // '!relative': !isSticky,
          },
        )}
        {...otherProps}
      >
        <div
          className={classNames(
            'container flex w-full max-w-screen-desktop items-center justify-between pt-8 transition-all duration-100 ease-in tablet:py-6',
            // {
            //   'border border-x-0 border-t-0 border-b-gray-200 bg-cultured laptop:py-6':
            //     isSticky && !isScrollAtTop,
            //   'transition-all duration-150 ease-in': !isSticky,
            // },
          )}
        >
          <h1
            className={classNames(
              'flex-1 text-l font-extrabold text-primary laptop:flex-none',
              // {
              //   'opacity-0 laptop:opacity-100': !isScrollAtTop,
              // },
            )}
          >
            <a href='/'>Cyram</a>
          </h1>
          {menuItems
            .filter((menuItem) => menuItem.isLeft)
            .map((menuItem, index) => (
              <div
                key={`header-left-${index}`}
                className='ml-4 hidden laptop:block'
                onMouseOver={(e) => {
                  e.stopPropagation();
                  setActive(menuItem.id);
                }}
              >
                <a
                  href={`#${menuItem.id}`}
                  className={classNames(
                    'relative flex w-full items-center justify-between gap-1 rounded-s px-3 py-2 transition duration-150 ease-out hover:ease-in laptop:cursor-pointer laptop:hover:bg-gray-50 ',
                    {
                      'laptop:bg-gray-50': menuItem.id === active,
                      'laptop:bg-transparent': menuItem.id !== active,
                    },
                  )}
                >
                  <p className='flex gap-x-1 font-semibold text-primary laptop:text-xs'>
                    {menuItem.label}
                    {(menuItem.isDropdown ?? false) && (
                      <img
                        alt='arrow-chevron-icon'
                        src={ArrowChevronIcon.src}
                      />
                    )}
                  </p>
                </a>
              </div>
            ))}

          <nav className='hidden tablet:justify-center laptop:flex laptop:flex-1'>
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
                        'relative flex w-full items-center justify-between gap-1 rounded-s px-3 py-2 transition duration-150 ease-out hover:ease-in laptop:cursor-pointer laptop:hover:bg-gray-300',
                        {
                          'laptop:bg-gray-50': menuItem.id === active,
                          'laptop:bg-transparent': menuItem.id !== active,
                        },
                      )}
                    >
                      <p className='flex gap-x-1 font-semibold text-primary laptop:text-xs'>
                        {menuItem.label}
                        {(menuItem.isDropdown ?? false) && (
                          <img
                            alt='arrow-chevron-icon'
                            src={ArrowChevronIcon.src}
                          />
                        )}
                      </p>
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
          <Button title='Book a call' className='mr-4 laptop:mr-0' />
          <BurgerMenu
            className={classNames('bg-transparent shadow-md laptop:hidden')}
            onClick={() => setIsMenuDrawerOpen((prev) => !prev)}
          />
        </div>
        {renderHeaderItems()}
      </header>

      <MenuDrawer
        className={classNames(
          'fixed top-0 z-[50] !overflow-hidden laptop:hidden',
          {
            block: isMenuDrawerOpen,
            hidden: !isMenuDrawerOpen,
          },
        )}
        onClose={() => setIsMenuDrawerOpen(false)}
      />
    </>
  );
};

export default Navbar;
