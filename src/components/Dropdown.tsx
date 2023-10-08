import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative text-left dropdown">
      <div>
        <button
          className="inline-flex justify-center w-full dropdown"
          onClick={()=> {
            setIsOpen(!isOpen)
          }}
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {options.map((option, i) => (
            <span
              key={i}
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => selectOption(option)}
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
