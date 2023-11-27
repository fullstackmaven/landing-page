import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ description, topics }) => {
  return (
    <div className='h-full w-full'>
      <div className='flex h-10 w-full items-center justify-start gap-x-3 rounded-l laptop:h-fit laptop:min-h-[239px] laptop:gap-x-0'>
        <img src='https://placehold.co/41x39' className='block laptop:hidden' />
        <img
          src='/qa-course/video-intro.svg'
          className='hidden h-full w-full laptop:block'
        />
        <p className='text-xxs font-semibold text-primary/80 laptop:hidden'>
          Watch a brief intro
        </p>
      </div>
      <p className='text-dark-gray py-3 text-xxs font-normal laptop:py-6 laptop:text-base'>
        {description}
      </p>
      <p className='text-dark-gray hidden text-base font-semibold laptop:block'>
        What you'll focus on
      </p>
      <ul className='text-dark-gray list-disc pl-5 text-xxs font-medium laptop:text-s '>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
