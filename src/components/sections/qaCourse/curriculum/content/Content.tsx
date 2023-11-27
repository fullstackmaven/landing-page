import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ description, topics }) => {
  return (
    <div className='h-full w-full'>
      <div className='lg:h-fit lg:min-h-[239px] lg:gap-x-0 flex h-10 w-full items-center justify-start gap-x-3 rounded-l'>
        <img src='https://placehold.co/41x39' className='lg:hidden block' />
        <img
          src='/qa-course/video-intro.svg'
          className='lg:block hidden h-full w-full'
        />
        <p className='lg:hidden text-xxs font-semibold text-primary/80'>
          Watch a brief intro
        </p>
      </div>
      <p className='text-dark-gray lg:py-6 lg:text-base py-3 text-xxs font-normal'>
        {description}
      </p>
      <p className='text-dark-gray lg:block hidden text-base font-semibold'>
        What you'll focus on
      </p>
      <ul className='text-dark-gray lg:text-s list-disc pl-5 text-xxs font-medium '>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
