import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { SharedContext } from "../context";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegComment } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { MdOutlineIosShare } from "react-icons/md";

const RandomTweetContainer = ({
  name,
  pfp,
  username,
  timeAgo,
  tweetText,
  verified,
  comments,
  id,
  likes: initialLikes,
  views,
  retweets: initialRetweets,
}) => {
  const { addAccount } = useContext(SharedContext);
  const [likes, setLikes] = useState(initialLikes);
  const [retweets, setRetweets] = useState(initialRetweets);
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const likedTweets = JSON.parse(localStorage.getItem("likedTweets"));

  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked_${id}`);
    const retweetedStatus = localStorage.getItem(`retweeted_${id}`);
    const likesCount = localStorage.getItem(`likesCount_${id}`);
    const retweetsCount = localStorage.getItem(`retweetsCount_${id}`);

    if (likedStatus) {
      setLiked(likedStatus === "true");
    }

    if (retweetedStatus) {
      setRetweeted(retweetedStatus === "true");
    }

    if (likesCount) {
      setLikes(parseInt(likesCount, 10));
    }

    if (retweetsCount) {
      setRetweets(parseInt(retweetsCount, 10));
    }
  }, [id]);

  useEffect(() => {
    const likedTweets = JSON.parse(localStorage.getItem("likedTweets")) || [];
    setLiked(likedTweets.includes(id));
  }, [id, likedTweets]);

  const handleLikeClick = () => {
    const likedTweets = JSON.parse(localStorage.getItem("likedTweets")) || [];
    if (!liked) {
      localStorage.setItem("likedTweets", JSON.stringify([...likedTweets, id]));
    } else {
      localStorage.setItem(
        "likedTweets",
        JSON.stringify(likedTweets.filter((tweetId) => tweetId !== id)),
      );
    }
    setLiked(!liked);
  };

  const handleRetweetClick = () => {
    setRetweeted(!retweeted);
    setRetweets((prevRetweets) =>
      retweeted ? prevRetweets - 1 : prevRetweets + 1,
    );

    localStorage.setItem(`retweeted_${id}`, !retweeted);
    localStorage.setItem(
      `retweetsCount_${id}`,
      retweeted ? retweets - 1 : retweets + 1,
    );
  };

  return (
    <div
      style={{ zIndex: addAccount && "-1" }}
      className="relative grid cursor-pointer grid-cols-[auto_1fr] gap-[8px] border-b-[1px] px-5 py-[10px] transition-colors duration-[.25s] hover:bg-gray-100"
    >
      <img className="h-[50px] w-[50px] rounded-full" src={pfp} />
      <div>
        <div className="relative flex items-center gap-[5px]">
          <p className="text-[15px] font-semibold">{name}</p>
          <span>
            {verified ? <MdVerified className="fill-[#1D9BF0]" /> : ""}
          </span>
          <p className="text-[15px] text-[#657786]">{username}</p>
          <time className="text-[15px] text-[#657786]">{timeAgo}</time>
          <span className="group absolute right-[0px] rounded-full  transition-colors duration-[.2s] hover:bg-blue-100">
            <BsThreeDots className="h-[32.5px] w-[32.5px] cursor-pointer fill-[#536471] p-[8px] group-hover:fill-blue-500" />
          </span>
        </div>
        <p>{tweetText}</p>
        <div className="mt-[7px] flex -translate-x-[8px] justify-between">
          <div className="group flex w-full max-w-[30px] cursor-pointer items-center">
            <span className="flex  items-center gap-[3px] rounded-full p-[8px] transition-colors duration-[.2s] group-hover:bg-blue-100">
              <FaRegComment className="w-[15.5px] fill-[#536471] group-hover:fill-blue-500" />
            </span>
            <span className="mt-[6px] -translate-x-[5px] text-[13px] group-hover:text-blue-500">
              {comments}
            </span>
          </div>
          <div
            onClick={() => handleRetweetClick()}
            className="group flex w-full max-w-[30px] cursor-pointer items-center"
          >
            <span className="group flex items-center rounded-full p-[8px] transition-colors duration-[.2s] group-hover:bg-green-200">
              <LiaRetweetSolid
                className={`ease h-[18px] w-[18px] transition-colors duration-[.2s] group-hover:fill-green-500 ${retweeted ? "fill-[#00BA7C]" : "fill-[#536471]"}`}
              />
            </span>
            <span
              style={{ color: retweeted && "#00BA7C" }}
              className="mt-[6px] -translate-x-[5px] text-[13px] transition-colors duration-[.2s] group-hover:text-[#00BA7C]"
            >
              {retweets}
            </span>
          </div>
          <div
            onClick={() => handleLikeClick()}
            className="group flex w-full max-w-[30px] cursor-pointer items-center"
          >
            <span className="flex  items-center rounded-full p-[8px] transition-colors duration-[.2s] group-hover:bg-pink-200">
              {!liked ? (
                <IoIosHeartEmpty className="fill-[#536471] transition-colors duration-[.2s] group-hover:fill-[#f91880]" />
              ) : (
                <IoIosHeart className="fill-[#f91880]" />
              )}
            </span>
            <span className="mt-[6px] -translate-x-[5px] text-[13px] transition-colors duration-[.2s] group-hover:text-[#f91880]">
              {liked ? likes + 1 : likes}
            </span>
          </div>
          <div className="group flex h-fit w-full max-w-[30px] cursor-pointer items-center">
            <span className=" flex items-center rounded-full p-[8px] transition-colors duration-[.2s] group-hover:bg-blue-100">
              <MdBarChart className="fill-[#536471] group-hover:fill-blue-500" />
            </span>
            <span className="mt-[6px] -translate-x-[5px] text-[13px] transition-colors duration-[.2s] group-hover:text-blue-500">
              {views}
            </span>
          </div>
          <span className="group flex translate-x-[8px] cursor-pointer items-center rounded-full p-[8px] transition-colors duration-[.2s] hover:bg-blue-100">
            <MdOutlineIosShare className="fill-[#536471] group-hover:fill-blue-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RandomTweetContainer;
