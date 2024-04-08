import React from "react";
import TrendContainer from "./TrendContainer";

const Trends = () => {
  return (
    <div className="mt-5">
      <div className="rounded-t-[10px] bg-[#F7F9F9] py-[10px] pl-[15px]">
        <h1 className="text-[20px] font-black">Poland trends</h1>
      </div>
      <TrendContainer />
      <div className="ease cursor-pointer rounded-b-[10px] bg-[#F7F9F9] py-[15px] pl-[15px] transition-colors duration-[.25s] hover:rounded-b-[10px] hover:bg-gray-200">
        <p className="text-[#1D9BF0]">Show more</p>
      </div>
    </div>
  );
};

export default Trends;
