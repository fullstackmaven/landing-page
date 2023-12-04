import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description' | 'title'>;

const Content: FC<TContentProps> = ({ description, topics, title }) => {
  return (
    <div className='h-full w-full space-y-4 text-primary'>
      <h2 className='hidden text-xl font-bold laptop:block'>{title}</h2>
      <p className='text-xs font-normal tablet:text-s laptop:text-base'>
        {description}
      </p>
      <ul className='grid list-inside list-disc text-xs font-normal text-primary tablet:text-s laptop:text-s'>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
