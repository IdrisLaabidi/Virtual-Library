import React from 'react';

const Navbar = ({user,isLoading,error}) => {
  const userName = user.firstName +' '+ user.lastName
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src="taswira.jpg" alt="Logo" />
            <img className="hidden lg:block h-8 w-auto" src="taswira.jpg" alt="Logo" />
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input type="text" placeholder="Search" className="bg-gray-100 text-gray-800 border-0 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full" src="taswira.jpg" alt="Profile" />
            <span className="ml-2 text-gray-800 text-sm font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;