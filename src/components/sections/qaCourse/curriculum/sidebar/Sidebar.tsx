import { useState, type FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum.ts';
import { Button } from '../../../../Button';
import Content from '../content/Content.tsx';

interface TSidebarProps {
  curriculum: TCurriculum[];
}

const Sidebar: FC<TSidebarProps> = ({ curriculum = [] }) => {
  const [activeCurriculum, setActiveCurriculum] = useState(0);
  return (
    <div className='flex rounded-l bg-white'>
      <ul className='border-r-orange-800-6 min-w-[409px] border border-y-0 border-l-0'>
        <li className='border-b-orange-800-6 border border-x-0 border-t-0 px-6 py-8'>
          <p className='text-s font-normal text-gray-700 '>CURRICULUM</p>
        </li>
        {curriculum.map((curr, index) => (
          <li
            key={`list-curriculum-${index}`}
            className='border-b-orange-800-6 box-border flex cursor-pointer border border-x-0 border-t-0'
          >
            <input
              type='radio'
              name='curriculum-radio'
              id={`curriculum-${index}`}
              className='peer hidden appearance-none'
              hidden
              value={index}
              onChange={(e) => {
                setActiveCurriculum(Number(e.target.value));
              }}
            />
            <label
              htmlFor={`curriculum-${index}`}
              className='peer-checked:border-l-dark flex h-full w-full cursor-pointer items-center justify-between p-6 peer-checked:border peer-checked:border-y-0 peer-checked:border-l-4 peer-checked:border-r-0'
            >
              <p className='text-base font-semibold text-primary'>
                {curr.title}
              </p>
              <p className='rounded-xs bg-secondary p-1 px-3 text-center text-s font-medium leading-5 text-blue-500'>
                {curr.subtitle}
              </p>
            </label>
          </li>
        ))}
        <li className='flex items-center justify-center px-6 py-8'>
          <Button title='Enroll now' className='w-full px-6 py-4' />
        </li>
      </ul>
      <div className='p-8'>
        <Content
          description={curriculum[activeCurriculum].description}
          topics={curriculum[activeCurriculum].topics}
        />
      </div>
    </div>
  );
};

export default Sidebar;
