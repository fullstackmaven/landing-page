import { Button } from '@components/Button';
import classNames from 'classnames';
import { forwardRef, type HTMLAttributes, type Ref } from 'react';
import ReactDOM from 'react-dom';

const BookCall = forwardRef(
  (props: HTMLAttributes<HTMLDivElement>, ref: Ref<HTMLDivElement>) => {
    if (document === undefined) return <></>;

    return ReactDOM.createPortal(
      <div
        ref={ref}
        {...props}
        className={classNames(
          'sticky bottom-0 flex h-[96px] w-full items-start justify-center border border-x-0 border-b-0 border-t-[#DEDCD3] bg-[#F2F0E9] p-4',
          props.className,
        )}
      >
        <Button title='Book a call' className='w-full !py-2 text-xs' />
      </div>,
      document?.getElementById('book-call') as Element,
    );
  },
);

export default BookCall;
