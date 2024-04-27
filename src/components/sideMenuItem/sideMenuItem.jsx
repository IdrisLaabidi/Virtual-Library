import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideMenuItem = (props) => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleItemClick = (path) => {
    // Navigate and hide the dropdown handler
    navigate(path);
    setIsDropdownVisible(false);
  };

  return (
    <><div
      className="relative"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <button
        className="flex items-center justify-between w-full p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        onClick={() => handleItemClick(props.itemLink)}
      >
        <span>{props.item}</span>
        {props.item === 'My Library' && (
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${isDropdownVisible ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7" />
          </svg>
        )}
      </button>
      {props.item === 'My Library' && isDropdownVisible && (
        <div className="absolute left-0 top-full mt-1 w-full bg-white dark:bg-gray-800 shadow-md rounded-lg z-10">
          <a
            className="block px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => handleItemClick('/MyLibrary/AddNewCollection')}
          >
            Add a new collection
          </a>
          <a
            className="block px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => handleItemClick('/newItem')}
          >
            Add a new item
          </a>
        </div>
      )}
    </div>
    <div>
    {props.item === 'Feedback' && (
        <div className="absolute left-0 top-full mt-1 w-full bg-white dark:bg-gray-800 shadow-md rounded-lg z-10">
          <a
            className="block px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => handleItemClick('/feedback')}
          >
           
          </a>
          
        </div>
      )}
    </div></>

    
  );
};

export default SideMenuItem;
