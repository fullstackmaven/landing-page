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
      <ul className='min-w-[409px] border border-y-0 border-l-0 border-r-accent-6'>
        <li className='border border-x-0 border-t-0 border-b-accent-6 px-6 py-8'>
          <p className='text-s font-normal text-dark-gray '>CURRICULUM</p>
        </li>
        {curriculum.map((curr, index) => (
          <li
            key={`list-curriculum-${index}`}
            className='box-border flex cursor-pointer border border-x-0 border-t-0 border-b-accent-6'
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
              className='flex h-full w-full cursor-pointer items-center justify-between p-6 peer-checked:border peer-checked:border-y-0 peer-checked:border-l-4 peer-checked:border-r-0 peer-checked:border-l-dark'
            >
              <p className='text-base font-semibold text-dark'>{curr.title}</p>
              <p className='rounded-xs bg-success p-1 px-3 text-center text-s font-medium leading-5 text-[#2254B5]'>
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
