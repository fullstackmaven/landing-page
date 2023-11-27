import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const options = ['123', '123', '123'];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: string): void => {
    setSelectedOption(option);
  };

  return (
    <div className='dropdown relative text-left'>
      <div>
        <button
          className='dropdown md:px-3 md:py-2 md:text-xxs inline-flex w-full justify-center rounded-l border border-[#EBEBEB] px-5 py-4'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selectedOption}
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='w-56 rounded-md absolute right-0 mt-2 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {options.map((option, i) => (
              <span
                key={i}
                className='text-sm hover:text-gray-900 block px-4 py-2 hover:bg-gray-100'
                role='menuitem'
                onClick={() => {
                  selectOption(option);
                }}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
