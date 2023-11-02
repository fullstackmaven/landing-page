import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ description, topics }) => {
  return (
    <div className='w-full h-full'>
      <div className='flex items-center justify-start gap-x-3 lg:gap-x-0 w-full h-10 lg:h-fit rounded-l lg:min-h-[239px]'>
        <img src='https://placehold.co/41x39' className='block lg:hidden' />
        <img
          src='/qa-course/video-intro.svg'
          className='hidden lg:block w-full h-full'
        />
        <p className='text-primary/80 text-xxs font-semibold lg:hidden'>
          Watch a brief intro
        </p>
      </div>
      <p className='py-3 lg:py-6 text-dark-gray text-xxs font-normal lg:text-base'>
        {description}
      </p>
      <p className='hidden lg:block text-dark-gray text-base font-semibold'>
        What you'll focus on
      </p>
      <ul className='pl-5 list-disc text-dark-gray text-xxs font-medium lg:text-s '>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
