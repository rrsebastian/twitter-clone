import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlinePushPin } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import ConfirmDelete from "./ConfirmDelete";

const TweetedTweetOptions = ({ onDeleteTweet, setShowExtraInfo }) => {
  const username = localStorage.getItem("username");
  const [deleteTweet, setDeleteTweet] = useState(false);

  return (
    <>
      <div
        style={{ display: deleteTweet ? "none" : "initial" }}
        className="absolute right-5 top-[10px] z-30 w-[340px] rounded-[10px] bg-white shadow-2xl"
      >
        <span
          onClick={() => setDeleteTweet(true)}
          className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold text-[red] transition-colors duration-[0.2s] hover:bg-gray-100"
        >
          <RiDeleteBin6Line fill="red" />
          Delete
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          <MdOutlinePushPin />
          Pin to your profile
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          <WiStars />
          Highlight on your profile
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          <MdFormatListBulletedAdd />
          Add/remove {username} from Lists
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          <FaRegComment />
          Change who can reply
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          <IoStatsChartSharp />
          View post engagements
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          {"</>"}
          <p>Embed post</p>
        </span>
        <span className="flex cursor-pointer items-center gap-[12px] p-[10px] px-[15px] text-[15px] font-bold transition-colors duration-[0.2s] hover:bg-gray-100">
          <IoStatsChartSharp />
          View post analytics
        </span>
      </div>
      {deleteTweet && (
        <>
          <div onClick={() => setDeleteTweet(false)} className="overlay"></div>
          <ConfirmDelete
            setShowExtraInfo={setShowExtraInfo}
            onDeleteTweet={onDeleteTweet}
            deleteTweet={deleteTweet}
            setDeleteTweet={setDeleteTweet}
          />
        </>
      )}
    </>
  );
};

export default TweetedTweetOptions;
