import { useState, type FC } from 'react';
import type { TCurriculum } from 'src/types/Curriculum.ts';
import Content from '../content/Content.tsx';

interface TSidebarProps {
  curriculum: TCurriculum[];
}

const Sidebar: FC<TSidebarProps> = ({ curriculum = [] }) => {
  const [activeCurriculum, setActiveCurriculum] = useState(0);
  return (
    <div className='flex flex-col rounded-l border border-gray-300 bg-white'>
      <h1 className='border-b-[0.5px] border-b-gray-300 p-6 text-l font-bold text-primary'>
        Curriculum
      </h1>
      <div className='flex gap-x-6'>
        <ul className='min-w-[409px] border-b-[0.5px] border-b-gray-300'>
          {curriculum.map((curr, index) => (
            <li
              key={`list-curriculum-${index}`}
              className='box-border flex cursor-pointer border-b-[0.5px] border-r-[0.5px] border-b-gray-300'
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
                className='flex h-full w-full cursor-pointer items-center justify-between p-6 peer-checked:bg-yellow-100 laptop:px-6 laptop:py-3'
              >
                <p className='text-s font-semibold text-primary'>
                  {curr.title}
                </p>
                <p className='rounded-xs bg-blue-100 p-1 px-3 text-center text-s font-medium leading-5 text-blue-500'>
                  {curr.subtitle}
                </p>
              </label>
            </li>
          ))}
          {/* <li className='flex items-center justify-center px-6 py-8'>
            <Button title='Enroll now' className='w-full px-6 py-4' />
          </li> */}
        </ul>
        <div className='flex gap-y-10 py-10 pr-6'>
          <Content
            description={curriculum[activeCurriculum].description}
            topics={curriculum[activeCurriculum].topics}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
