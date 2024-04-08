import React from "react";
import { PiSmileySadBold } from "react-icons/pi";

const TrendOptionsContainer = ({ handleRemoveAndClose }) => {
  return (
    <div className="absolute right-[14px] top-[10px] z-[25] rounded-[8px] bg-white">
      <div
        onClick={handleRemoveAndClose}
        className="flex cursor-pointer items-center gap-[10px] rounded-t-[12px] py-[10px] pl-[20px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-100"
      >
        <PiSmileySadBold className="h-[19px] w-[19px]" /> Not interested in this
      </div>
      <div
        onClick={handleRemoveAndClose}
        className="flex cursor-pointer items-center gap-[10px] rounded-b-[8px] px-[20px] py-[10px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-100"
      >
        <PiSmileySadBold className="h-[19px] w-[19px]" /> This trend is harmful
        or spammy
      </div>
    </div>
  );
};

export default TrendOptionsContainer;
