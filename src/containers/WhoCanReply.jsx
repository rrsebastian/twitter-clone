import React, { useState } from "react";
import { IoEarthOutline } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import { MdDone } from "react-icons/md";

const WhoCanReply = ({
  whoCanReply,
  setChangeWhoCanReply,
  setWhoCanReply,
  changeWhoCanReply,
}) => {
  const handleClick = (value) => {
    setWhoCanReply(value);
    setChangeWhoCanReply(false);
  };

  return (
    <div
      style={{
        opacity: changeWhoCanReply ? "1" : "0",
        transition: "all 0.2s ease-out",
        visibility: changeWhoCanReply ? "visible" : "hidden",
      }}
      className="custom-795:left-0 absolute bottom-[-278px] left-[-50px] z-50 max-w-[320px] rounded-[16px] bg-white text-left shadow-xl"
    >
      <div className="p-[15px]">
        <h1 className="text-[15px] font-bold">Who can reply?</h1>
        <p className="text-[15px] leading-5 text-[#536471]">
          Choose who can reply to this post. Anyone mentioned can always reply.
        </p>
      </div>
      <ul>
        <li
          onClick={() => handleClick("everyone")}
          className="flex cursor-pointer items-center gap-3 py-[10px] pl-[15px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-100"
        >
          {" "}
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1DA1F2]">
            <IoEarthOutline className="h-5 w-5 text-[white]" />
          </div>
          Everyone
          {whoCanReply === "everyone" && (
            <MdDone
              fill="#1DA1F2"
              className="absolute right-[15px] h-[20px] w-[20px]"
            />
          )}
        </li>
        <li
          onClick={() => handleClick("you-follow")}
          className="flex cursor-pointer items-center gap-3 py-[10px] pl-[15px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-100"
        >
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1DA1F2]">
            <MdOutlineSupervisorAccount className="h-5 w-5 text-[white]" />
          </div>
          Accounts you follow
          {whoCanReply === "you-follow" && (
            <MdDone
              fill="#1DA1F2"
              className="absolute right-[15px] h-[20px] w-[20px]"
            />
          )}
        </li>
        <li
          onClick={() => handleClick("verified")}
          className="flex cursor-pointer items-center gap-3 py-[10px] pl-[15px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-100"
        >
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1DA1F2]">
            <MdOutlineVerified className="h-5 w-5 text-[white]" />
          </div>
          Verified accounts
          {whoCanReply === "verified" && (
            <MdDone
              fill="#1DA1F2"
              className="absolute right-[15px] h-[20px] w-[20px]"
            />
          )}
        </li>
        <li
          onClick={() => handleClick("you-mention")}
          className="flex cursor-pointer items-center gap-3 rounded-b-[16px] py-[10px] pl-[15px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-100"
        >
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1DA1F2]">
            <FiAtSign className="h-5 w-5 text-[white]" />
          </div>
          Only accounts you mention
          {whoCanReply === "you-mention" && (
            <MdDone
              fill="#1DA1F2"
              className="absolute right-[15px] h-[20px] w-[20px]"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default WhoCanReply;
