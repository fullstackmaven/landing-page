import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface TAccordionProps {
  title?: string;
  subtitle?: string;
}

const Accordion: FC<
  PropsWithChildren<TAccordionProps & HTMLAttributes<HTMLDetailsElement>>
> = ({ title, subtitle, children, className, ...otherProps }) => {
  return (
    <details
      className={classNames(
        'group flex w-full flex-row flex-wrap items-center rounded-s border border-gray-300 bg-white px-4 py-2 tablet:py-3',
        className,
      )}
      {...otherProps}
    >
      <summary className='flex flex-row justify-between'>
        <div className='flex'>
          <img
            src='src/assets/chevron-right-icon.svg'
            className='flex h-5 w-5 items-center justify-center self-center text-gray-500 group-open:hidden'
          ></img>
          <img
            src='src/assets/chevron-down-icon.svg'
            className='hidden h-5 w-5 items-center justify-center self-center group-open:flex'
          ></img>
          {typeof title !== 'undefined' && (
            <p className='ml-2 self-center text-xs font-semibold tracking-wide text-primary tablet:ml-3 tablet:text-s tablet:tracking-wider'>
              {title}
            </p>
          )}
        </div>
        {typeof subtitle !== 'undefined' && (
          <p className='rounded-xs bg-blue-100 px-2 py-0.5 text-center text-xxs font-medium text-blue-500'>
            {subtitle}
          </p>
        )}
      </summary>
      <p className='max-h-max basis-full select-text pt-3 transition-all'>
        {children}
      </p>
    </details>
  );
};

export default Accordion;
