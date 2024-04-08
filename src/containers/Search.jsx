import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="fixed top-[0px] z-[4] w-full max-w-[350px] bg-white py-[3px] custom-1173:max-w-[310px]">
      <CiSearch className="absolute left-[20px] top-[16px] z-10 h-[19px] w-[19px]" />
      <input
        className="w-full rounded-full bg-[#EFF3F4] py-[11px] pl-[58px] text-[15px] placeholder:text-[#5C6C79] focus:outline-none"
        type="text"
        placeholder="Search"
        name="search"
      />
    </div>
  );
};

export default Search;
