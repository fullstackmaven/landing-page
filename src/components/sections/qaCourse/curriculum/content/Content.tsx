import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ description, topics }) => {
  return (
    <div className='h-full w-full'>
      <div className='flex h-10 w-full items-center justify-start gap-x-3 rounded-l lg:h-fit lg:min-h-[239px] lg:gap-x-0'>
        <img src='https://placehold.co/41x39' className='block lg:hidden' />
        <img
          src='/qa-course/video-intro.svg'
          className='hidden h-full w-full lg:block'
        />
        <p className='text-xxs font-semibold text-primary/80 lg:hidden'>
          Watch a brief intro
        </p>
      </div>
      <p className='py-3 text-xxs font-normal text-dark-gray lg:py-6 lg:text-base'>
        {description}
      </p>
      <p className='hidden text-base font-semibold text-dark-gray lg:block'>
        What you'll focus on
      </p>
      <ul className='list-disc pl-5 text-xxs font-medium text-dark-gray lg:text-s '>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
