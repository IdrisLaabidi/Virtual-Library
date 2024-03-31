import React from "react";
import NavBar from "../navBar/navBar";
import SideMenu from "../sideMenu/sideMenu";
import useConnect from "../../Hooks/useConnect";

const Layout = ({ children}) => {
  const [user , isLoading , error] = useConnect();
  return (
    <div className="flex dark:bg-[#141a28]">
      <SideMenu/>
      <div className="flex flex-col w-full ">
        <NavBar user={user}/>
        <div className="px-4 py-6 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
