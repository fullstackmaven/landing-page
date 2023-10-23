import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TAccordionProps = {
  title: string;
  subtitle: string;
};

const Accordion: FC<
  PropsWithChildren<TAccordionProps & HTMLAttributes<HTMLDivElement>>
> = ({ title, subtitle, children, className, ...otherProps }) => {
  return (
    <div
      className={classNames(
        'bg-white w-full flex flex-row items-center flex-wrap select-none p-2 rounded border border-[#DFDBD1]',
        className,
      )}
      {...otherProps}
    >
      <input type='checkbox' id='faq1' className='peer appearance-none' />
      <i className='fa-solid fa-chevron-right peer-checked:hidden flex items-center w-6 h-6'></i>
      <i className='fa-solid fa-chevron-down peer-checked:flex items-center hidden w-6 h-6'></i>
      <label
        htmlFor='faq1'
        className='items-center cursor-pointer grow flex justify-between'
      >
        <p className='text-[#2D2D2D] text-s font-semibold leading-4'>{title}</p>
        <p className='text-primary/75 bg-success px-2 p-1 text-center text-xxs font-medium leading-normal rounded-xxs'>
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