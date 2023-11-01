import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TAccordionProps = {
  title: string;
  subtitle: string;
};

const Accordion: FC<
  PropsWithChildren<TAccordionProps & HTMLAttributes<HTMLDivElement>>
> = ({ title, subtitle, children, className, id, ...otherProps }) => {
  return (
    <div
      className={classNames(
        'bg-white w-full flex flex-row items-center flex-wrap p-2 rounded-s border border-[#DFDBD1]',
        className,
      )}
      {...otherProps}
    >
      <input type='checkbox' id={id} className='peer appearance-none' hidden />
      <i className='fa-solid fa-chevron-right peer-checked:hidden flex items-center justify-center w-6 h-6'></i>
      <i className='fa-solid fa-chevron-down peer-checked:flex items-center hidden justify-center w-6 h-6'></i>
      <label
        htmlFor={id}
        className='items-center grow flex justify-between pl-2'
      >
        <p className='text-[#2D2D2D] text-s font-semibold leading-4'>{title}</p>
        <p className='text-[#2254B5] bg-success px-2 p-1 text-center text-xxs font-medium  rounded-xs'>
          {subtitle}
        </p>
      </label>
      <div className='peer-checked:max-h-max max-h-0 basis-full peer-checked:pt-3 overflow-hidden transition-all select-text'>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
