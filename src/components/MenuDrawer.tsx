import CloseIcon from '@assets/common/close-icon.svg';
import classNames from 'classnames';
import { type FC, type HTMLAttributes } from 'react';

interface TMenuDrawerProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

const MenuDrawer: FC<TMenuDrawerProps> = ({ onClose, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={classNames(
        ' h-screen w-screen overflow-y-hidden bg-cultured px-6 py-4 laptop:p-8',
        otherProps.className,
      )}
    >
      <ul>
        <li className='flex items-center justify-between'>
          <p className='text-l font-extrabold text-primary'>Cyram</p>
          <img src={CloseIcon.src} className='h-5 w-5' onClick={onClose} />
        </li>
        <li className='border border-x-0 border-t-0 border-b-gray-75 py-4'>
          <p className='pb-4 text-l font-semibold text-primary'>Bootcamps</p>

          <ul className='flex flex-col gap-y-4 pl-6 font-medium'>
            <li>
              <a
                href='/software-engineering-bootcamp'
                className='text-base text-primary'
              >
                Software Engineering
              </a>
            </li>
            <li>
              <a href='/qa-bootcamp' className='text-base text-primary'>
                Quality Assurance
              </a>
            </li>
            <li>
              <a href='/ui-architecture' className='text-base text-primary'>
                Frontend Architecture
              </a>
            </li>
          </ul>
        </li>
        <li className='border border-x-0 border-t-0 border-b-gray-75 py-4'>
          <p className='pb-4 text-l font-semibold text-primary'>
            Free Video Courses
          </p>
          <ul className='flex flex-col gap-y-4 pl-6 font-medium'>
            <li>
              <p className='text-base text-primary'>
                HTML and CSS video courses
              </p>
            </li>
            <li>
              <p className='text-base text-primary'>
                Javascript Programming Courses
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p className='py-4 pb-4 text-l font-semibold text-primary'>
            Resources
          </p>
          <ul className='flex flex-col gap-y-4 pl-6 font-medium'>
            <li>
              <p className='text-base text-primary'>FAQ</p>
            </li>
            <li>
              <p className='text-base text-primary'>Blog</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuDrawer;
