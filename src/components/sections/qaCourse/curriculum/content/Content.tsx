import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ description, topics }) => {
  return (
    <div className='h-full w-full space-y-4 pb-3 pl-8'>
      <p className='text-xxs font-normal text-gray-700 tablet:text-s laptop:py-6 laptop:text-base'>
        {description}
      </p>
      <ul className='list-disc pl-5 text-xxs font-medium text-gray-700 tablet:text-s laptop:text-s '>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
