import React, { useContext } from "react";
import HomeIcon from "../assets/homeoutline.png";
import { CiSearch } from "react-icons/ci";
import NotificationIcon from "../assets/notification.png";
import MessageIcon from "../assets/messages.png";
import { SharedContext } from "../context";

const MobileHomepageNavbar = () => {
  const { setActiveTab } = useContext(SharedContext);

  return (
    <nav className="fixed bottom-0 hidden w-full bg-white custom-500:block">
      <ul className="flex justify-around py-[8px] pr-[4px]">
        <li
          onClick={() => setActiveTab("home")}
          className="ease translate-y-[2px] cursor-pointer rounded-full p-[8px] transition-colors duration-[.25s] hover:bg-gray-200"
        >
          <img className="h-[30px] w-[30px]" src={HomeIcon} />
        </li>
        <li className="ease cursor-pointer rounded-full p-[10px] transition-colors duration-[.25s] hover:bg-gray-200">
          <CiSearch className="h-[26px] w-[26px]" />
        </li>
        <li className="ease cursor-pointer rounded-full p-[10px] transition-colors duration-[.25s] hover:bg-gray-200">
          <img className="h-[26px] w-[26px]" src={NotificationIcon} />
        </li>
        <li className="ease cursor-pointer rounded-full p-[10px] transition-colors duration-[.25s] hover:bg-gray-200">
          <img className="h-[26px] w-[26px]" src={MessageIcon} />
        </li>
      </ul>
    </nav>
  );
};

export default MobileHomepageNavbar;
