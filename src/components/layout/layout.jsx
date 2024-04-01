import React, { useState } from "react";
import NavBar from "../navBar/navBar";
import SideMenu from "../sideMenu/sideMenu";
import useConnect from "../../Hooks/useConnect";

const Layout = ({ children }) => {
  const [user, isLoading, error] = useConnect();
  const [open, setOpen] = useState(true);

  const toggleSideMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex dark:bg-[#141a28]">
      {/* Pass the open state to the SideMenu component */}
      <SideMenu open={open}/>
      <div className="flex flex-col w-full">
        <NavBar user={user}/>
        <main className="px-4 py-6 flex-grow">{children}</main>
      </div>
      {/* Add a button to toggle the SideMenu */}
      <button
        className="fixed top-0 left-0 z-50 p-4 text-white"
        onClick={toggleSideMenu}
        aria-label="Toggle Side Menu"
      >
        {open ? 'Close Menu' : 'Open Menu'}
      </button>
    </div>
  );
};

export default Layout;