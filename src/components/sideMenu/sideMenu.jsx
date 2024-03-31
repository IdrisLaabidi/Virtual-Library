import React from 'react';

const SideMenu = () => {
  return (
    <aside className="w-64 ">
      <div className="overflow-y-auto py-4 px-3 bg-white rounded shadow h-screen">
      <div className="space-y-2 text-4xl px-1 mt-5 mb-10">
            Virtual Library
        </div>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">Catalog</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">My Account</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">My Library</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">Contact Us</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">Feedback</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-700 rounded-lg hover:bg-gray-100">
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;