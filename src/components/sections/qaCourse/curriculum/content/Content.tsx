import React from 'react';
import type { TCurriculum } from '../Curriculum.astro';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ topics, description }) => {
  return (
    <div className='space-y-3 w-full h-full lg:space-y-6'>
      <div className='flex items-center justify-start space-x-3 lg:space-x-0 lg:w-full w-10 h-10 lg:h-fit rounded-l lg:min-h-[239px]'>
        <img src='https://placehold.co/41x39' className='lg:hidden' />
        <img src='/qa-course/video-intro.png' className='w-full h-full' />
        <p className='text-primary/80 text-xxs font-semibold lg:hidden'>
          Watch a brief intro
        </p>
      </div>
      <p className='text-dark-gray text-xxs font-medium tracking-[0.4px] lg:text-base'>
        {description}
      </p>
      <p className='hidden lg:block text-dark-gray text-base font-semibold tracking-[0.4px]'>
        What you'll focus on
      </p>
      <ul className='pl-3 list-disc text-dark-gray text-xxs font-medium lg:text-s tracking-[0.32px]'>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
