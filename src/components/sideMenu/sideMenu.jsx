import React from 'react';
import SideMenuItem from '../sideMenuItem/sideMenuItem';
import logo from '../../assets/logo.jpeg'

const SideMenu = ({ open, toggleSideMenu }) => {
  const itemsArray = ['Home', 'My Account', 'My Library', 'Feedback', 'Settings'];

  // Add classes to control the visibility of the side menu
  const sideMenuClasses = open ? 'block' : 'hidden';

  return (
    <aside className={`w-64 ${sideMenuClasses} transition-all ease-in-out duration-300 `}>
      <div className="h-screen overflow-y-auto py-4 px-3 bg-white dark:bg-[#1b2536] rounded shadow dark:text-white md:max-h-screen">
        <div className="flex items-center justify-between px-3 mt-8 mb-10 gap-1">
          <img className="hidden h-16 lg:block rounded-xl " alt="Logo" src={logo}/>
          <span className="text-2xl font-semibold">Virtual Library</span>
        </div>
        <ul className="space-y-2">
          {itemsArray.map((item, index) => (
            <li key={index}>
              <SideMenuItem item={item} itemLink={'/'+item.split(' ').join('')} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;