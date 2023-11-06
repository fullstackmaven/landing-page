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
        'h-full w-full border bg-cultured px-6 py-4 lg:p-8',
        otherProps.className,
      )}
    >
      <ul>
        <li className='flex items-center justify-between'>
          <p className='text-l font-extrabold text-primary'>Cyram</p>
          <img src='/close-icon.svg' className='h-5 w-5' onClick={onClose} />
        </li>
        <li className='border border-x-0 border-t-0 border-b-[#CBCBCB] py-4'>
          <p className='pb-4 text-l font-bold text-dark'>Bootcamps</p>

          <ul className='gap-y-4 pl-6'>
            <li>
              <p className='text-base font-semibold text-dark'>
                Software Engineering
              </p>
            </li>
            <li>
              <p className='text-base font-semibold text-dark'>
                Quality Assurance
              </p>
            </li>
            <li>
              <p className='text-base font-semibold text-dark'>UX/UI Design</p>
            </li>
          </ul>
        </li>
        <li className='border border-x-0 border-t-0 border-b-[#CBCBCB] py-4'>
          <p className='pb-4 text-l font-bold text-dark'>Free Video Courses</p>
          <ul className='gap-y-4 pl-6'>
            <li>
              <p className='text-base font-semibold text-dark'>
                HTML and CSS video courses
              </p>
            </li>
            <li>
              <p className='text-base font-semibold text-dark'>
                Javascript Programming Courses
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p className='py-4 pb-4 text-l font-bold text-dark'>Resources</p>
          <ul className='gap-y-4 pl-6'>
            <li>
              <p className='text-base font-semibold text-dark'>FAQ</p>
            </li>
            <li>
              <p className='text-base font-semibold text-dark'>Blog</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuDrawer;
