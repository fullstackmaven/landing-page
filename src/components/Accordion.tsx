import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface TAccordionProps {
  title: string;
  subtitle: string;
}

const Accordion: FC<
  PropsWithChildren<TAccordionProps & HTMLAttributes<HTMLDetailsElement>>
> = ({ title, subtitle, children, className, ...otherProps }) => {
  return (
    <details
      className={classNames(
        'group flex w-full flex-row flex-wrap items-center rounded-s border border-gray-300 bg-white px-2 py-2 tablet:px-4 tablet:py-3',
        className,
      )}
      {...otherProps}
    >
      <summary className='flex flex-row justify-between'>
        <div className='flex'>
          <img
            src='/chevron-right-icon.svg'
            className='flex h-6 w-6 items-center justify-center group-open:hidden'
          ></img>
          <img
            src='/chevron-down-icon.svg'
            className='hidden h-6 w-6 items-center justify-center group-open:flex'
          ></img>
          <p className='text-dark pl-2 text-s font-semibold  leading-6'>
            {title}
          </p>
        </div>
        <p className='bg-success rounded-xs p-1 px-2 text-center text-xxs font-medium text-blue-500'>
          {subtitle}
        </p>
      </summary>
      <p className='max-h-max basis-full select-text overflow-hidden pt-3 transition-all'>
        {children}
      </p>

      {/* <input type='checkbox' id={id} className='peer appearance-none' hidden />
      <img
        src='/chevron-right-icon.svg'
        className='flex h-6 w-6 items-center justify-center peer-checked:hidden'
      ></img>
      <img
        src='/chevron-down-icon.svg'
        className='hidden h-6 w-6 items-center justify-center peer-checked:flex'
      ></img>
      <label
        htmlFor={id}
        className='flex grow items-center justify-between pl-2'
      >
        <p className='text-s font-semibold leading-6 text-dark'>{title}</p>
        <p className='rounded-xs bg-success p-1 px-2 text-center text-xxs font-medium text-blue-500'>
          {subtitle}
        </p>
      </label>
      <div className='max-h-0 basis-full select-text overflow-hidden transition-all peer-checked:max-h-max peer-checked:pt-3'>
        {children}
      </div> */}
    </details>
  );
};

export default Accordion;
