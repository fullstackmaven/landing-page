import type { FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';

type TContentProps = Pick<TCurriculum, 'topics' | 'description'>;

const Content: FC<TContentProps> = ({ description, topics }) => {
  return (
    <div className='h-full w-full space-y-4 pb-3 text-primary'>
      <p className='text-xs font-normal tablet:text-s laptop:py-6 laptop:text-base'>
        {description}
      </p>
      <ul className='grid list-inside list-disc gap-y-2 text-xs font-normal text-primary tablet:text-s laptop:text-s'>
        {topics.map((topic, index) => (
          <li key={`topics-${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
