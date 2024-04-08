import React from "react";
import { PiMoneyBold } from "react-icons/pi";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineTableRows } from "react-icons/md";

const MorePopup = () => {
  return (
    <div className="absolute bottom-[0px] left-0 z-40  w-[290px] rounded-xl bg-white box-shadow">
      <ul>
        <li className="flex cursor-pointer items-center gap-[30px] rounded-t-xl py-4 pl-[20px] text-[20px] font-bold transition-all duration-[.25s] hover:bg-gray-50">
          <PiMoneyBold className="h-[24px] w-[24px]" /> Monetization
        </li>
        <li className="flex cursor-pointer items-center gap-[30px] py-4 pl-[20px] text-[20px] font-bold transition-all duration-[.25s] hover:bg-gray-50">
          <MdOutlineTableRows className="h-[24px] w-[24px]" /> Pro
        </li>
        <li className="flex cursor-pointer items-center gap-[30px]  py-4 pl-[20px] text-[20px] font-bold transition-all duration-[.25s] hover:bg-gray-50">
          <LuArrowUpRightSquare className="h-[24px] w-[24px]" /> Ads
        </li>
        <li className="flex cursor-pointer items-center gap-[30px] rounded-b-xl py-4 pl-[20px] text-[20px] font-bold transition-all duration-[.25s] hover:bg-gray-50">
          <CiSettings className="h-[24px] w-[24px]" /> Settings and privacy
        </li>
      </ul>
    </div>
  );
};

export default MorePopup;
