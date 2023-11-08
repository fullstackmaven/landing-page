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
          'sticky bottom-0 flex h-[96px] w-full items-start justify-center bg-cultured p-4',
          props.className,
        )}
      >
        <Button title='Book a call' className='h-8 w-full text-xs' />
      </div>,
      document?.getElementById('book-call') as Element,
    );
  },
);

export default BookCall;
