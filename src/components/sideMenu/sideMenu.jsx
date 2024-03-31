import React from 'react';
import SideMenuItem from '../sideMenuItem/sideMenuItem';

const SideMenu = () => {
  const itemsArray = ['Home', 'My Account', 'My Library', 'FAQ', 'Feedback', 'Settings'];
  
  return (
    <aside className="w-64">
      <div className="h-screen overflow-y-auto py-4 px-3 bg-white dark:bg-[#1b2536] rounded shadow dark:text-white">
        <div className="flex items-center justify-between px-1 mt-5 mb-10">
          <img className="block h-8 lg:hidden" src='#' alt="Logo" />
          <img className="hidden h-8 lg:block" src='#' alt="Logo" />
          <span className="text-2xl font-semibold">Virtual Library</span>
        </div>
        <ul className="space-y-2">
          {itemsArray.map((item, index) => (
            <li key={index}>
              <SideMenuItem item={item} itemLink={item.split(' ').join('')} />{/*used split-join to delete spaces between item lables 
                                                                                to match link in app.jsx*/}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
