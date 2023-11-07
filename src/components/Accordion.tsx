import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface TAccordionProps {
  title: string;
  subtitle: string;
}

const Accordion: FC<
  PropsWithChildren<TAccordionProps & HTMLAttributes<HTMLDivElement>>
> = ({ title, subtitle, children, className, id, ...otherProps }) => {
  return (
    <div
      className={classNames(
        'flex w-full flex-row flex-wrap items-center rounded-s border border-[#DFDBD1] bg-white px-2 py-2 md:px-4 md:py-3',
        className,
      )}
      {...otherProps}
    >
      <input type='checkbox' id={id} className='peer appearance-none' hidden />
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
        <p className='rounded-xs bg-success p-1 px-2 text-center text-xxs font-medium text-[#2254B5]'>
          {subtitle}
        </p>
      </label>
      <div className='max-h-0 basis-full select-text overflow-hidden transition-all peer-checked:max-h-max peer-checked:pt-3'>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
