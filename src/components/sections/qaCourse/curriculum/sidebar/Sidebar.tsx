import { useState, type FC } from 'react';
import { Button } from '../../../../Button';
import type { TCurriculum } from '../Curriculum.astro';
import Content from '../content/Content.tsx';

type TSidebarProps = {
  curriculum: TCurriculum[];
};

const Sidebar: FC<TSidebarProps> = ({ curriculum = [] }) => {
  const [activeCurriculum, setActiveCurriculum] = useState(0);
  return (
    <div className='rounded-l bg-white flex'>
      <ul className='min-w-[409px] border border-y-0 border-l-0 border-r-accent-6'>
        <li className='py-8 px-6 border border-x-0 border-t-0 border-b-accent-6'>
          <p className='text-dark-gray text-s font-normal tracking-[0.32px]'>
            CURRICULUM
          </p>
        </li>
        {curriculum.map((curr, index) => (
          <li
            key={`list-curriculum-${index}`}
            className='cursor-pointer border border-x-0 border-t-0 border-b-accent-6 flex box-border'
          >
            <input
              type='radio'
              name='curriculum-radio'
              id={`curriculum-${index}`}
              className='peer appearance-none hidden'
              hidden
              value={index}
              onChange={(e) => {
                setActiveCurriculum(Number(e.target.value));
              }}
            />
            <label
              htmlFor={`curriculum-${index}`}
              className='p-6 w-full h-full items-center cursor-pointer flex justify-between peer-checked:border peer-checked:border-r-0 peer-checked:border-y-0 peer-checked:border-l-dark peer-checked:border-l-4'
            >
              <p className='text-dark/80 text-base font-semibold tracking-[0.4px]'>
                {curr.title}
              </p>
              <p className='text-primary/75 bg-success px-3 p-1 text-center text-s font-medium leading-5 tracking-[0.32px] rounded-xs'>
                {curr.subtitle}
              </p>
            </label>
          </li>
        ))}
        <li className='py-8 px-6 flex justify-center items-center'>
          <Button title='Apply now' className='w-full px-6 py-4' />
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