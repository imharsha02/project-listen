"use client";
import { IoIosMenu } from "react-icons/io";
import {useState} from 'react';
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { IoPersonOutline } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
  const [openSidebar,setOpenSidebar] = useState(false);
  return (
    // Header container
    <div className="flex items-center justify-between px-4">
      {/* Logo container */}
      <div className="flex items-center">
        {/* Menu icon (hamburger) */}
        <div>

        <IoIosMenu className="p-2 w-10 h-10" onClick={() => {setOpenSidebar(!openSidebar)}}/>
        {
          openSidebar && <Sidebar />
        }
        </div>

        {/* Icon */}
        <Logo />
      </div>

      {/* Search bar */}
      <Searchbar />

      {/* Song count */}
      <div className="mr-10 flex items-center gap-3">
        <span className=" bg-slate-100 px-5 py-2 rounded-sm cursor-pointer">Add song +</span>
        <div className="rounded-full bg-slate-100 p-1 cursor-pointer">
        <IoPersonOutline className="border-none w-full h-full"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
