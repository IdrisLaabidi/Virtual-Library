import React from 'react';

const Navbar = ({ user, isLoading, error }) => {
  const userName = user.firstName + ' ' + user.lastName;
  return (
    <nav className="bg-white dark:bg-[#141a28] rounded shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white border-0 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full" src="taswira.jpg" alt="Profile" />
            <span className="ml-2 text-gray-800 dark:text-white text-sm font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
