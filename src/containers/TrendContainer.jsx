import React, { useState } from "react";
import TrendsData from "../Trends.json";
import { BsThreeDots } from "react-icons/bs";
import TrendOptionsContainer from "./TrendOptionsContainer";

const TrendContainer = () => {
  const [trends, setTrends] = useState(TrendsData);
  const [showMoreOptions, setShowMoreOptions] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleOptions = (index) => {
    const updatedOptions = [...showMoreOptions];
    updatedOptions[index] = !updatedOptions[index];
    setShowMoreOptions(updatedOptions);
  };

  const handleClose = (index) => {
    const updatedOptions = [...showMoreOptions];
    updatedOptions[index] = false;
    setShowMoreOptions(updatedOptions);
  };

  const handleRemove = (index) => {
    const updatedOptions = trends.filter((_, i) => i !== index);
    setTrends(updatedOptions);
  };

  const handleRemoveAndClose = (index) => {
    handleRemove(index);
    handleClose(index);
  };

  return (
    <>
      {trends.map((trend, index) => (
        <div
          className={`relative flex flex-col gap-[2px] bg-[#F7F9F9] py-[15px] pl-[15px] transition-colors duration-[.25s] 
           ${!showMoreOptions[index] && "cursor-pointer hover:bg-[#e5eaeb]"}`}
          key={index}
        >
          <span className="group absolute right-[5px] top-[5px] rounded-full  transition-colors duration-[.2s] hover:bg-blue-100">
            <BsThreeDots
              onClick={() => toggleOptions(index)}
              className="h-[32.5px] w-[32.5px] cursor-pointer fill-[#536471] p-[8px] group-hover:fill-blue-500"
            />
          </span>
          <p className="text-[13px] text-[#536471]">{index + 1} - Trending</p>
          <p className="text-[15px] font-bold">{trend.name}</p>
          <p className="text-[13px] text-[#536471]">{trend.postCount} posts</p>
          {showMoreOptions[index] && (
            <>
              <div
                onClick={() => handleClose(index)}
                className="fixed inset-0 z-20 opacity-0"
              ></div>
              <TrendOptionsContainer
                handleRemoveAndClose={() => handleRemoveAndClose(index)}
              />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default TrendContainer;
