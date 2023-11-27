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
          <img src='/close-icon.svg' className='h-5 w-5' onClick={onClose} />
        </li>
        <li className='border border-x-0 border-t-0 border-b-gray-75 py-4'>
          <p className='text-dark pb-4 text-l font-semibold'>Bootcamps</p>

          <ul className='flex flex-col gap-y-4 pl-6 font-medium'>
            <li>
              <p className='text-dark text-base'>Software Engineering</p>
            </li>
            <li>
              <p className='text-dark text-base'>Quality Assurance</p>
            </li>
            <li>
              <p className='text-dark text-base'>UX/UI Design</p>
            </li>
          </ul>
        </li>
        <li className='border border-x-0 border-t-0 border-b-gray-75 py-4'>
          <p className='text-dark pb-4 text-l font-semibold'>
            Free Video Courses
          </p>
          <ul className='flex flex-col gap-y-4 pl-6 font-medium'>
            <li>
              <p className='text-dark text-base'>HTML and CSS video courses</p>
            </li>
            <li>
              <p className='text-dark text-base'>
                Javascript Programming Courses
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p className='text-dark py-4 pb-4 text-l font-semibold'>Resources</p>
          <ul className='flex flex-col gap-y-4 pl-6 font-medium'>
            <li>
              <p className='text-dark text-base'>FAQ</p>
            </li>
            <li>
              <p className='text-dark text-base'>Blog</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuDrawer;
