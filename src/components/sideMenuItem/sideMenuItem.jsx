import React from 'react';

const SideMenuItem = (props) => {
  return (
    <div>
      <a 
        href={props.itemLink} 
        className="flex items-center p-2 text-base font-normal rounded-lg dark:text-white dark:hover:text-white dark:bg-[rgb(27, 37, 54)] hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-transparent border-transparent">
        <span className="ml-3">{props.item}</span>
      </a>
    </div>
  );
};

export default SideMenuItem;
