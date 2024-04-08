import React, { useContext, useEffect, useState } from "react";
import DefaultProfilePic from "../assets/download.png";
import { BsThreeDots } from "react-icons/bs";
import TweetedTweetOptions from "./TweetedTweetOptions";
import { SharedContext } from "../context";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegComment } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { MdOutlineIosShare } from "react-icons/md";

const TweetedTweet = ({ filter }) => {
  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const newProfilePic = localStorage.getItem("profilePic");
  const [likedTweets, setLikedTweets] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const [selectedTweet, setSelectedTweet] = useState(null);
  const [profilePic, setProfilePic] = useState(DefaultProfilePic);
  const { addAccount, tweets, setTweets, activeTab, currentOption } =
    useContext(SharedContext);

  useEffect(() => {
    const initialLikeCounts = {};
    tweets.forEach((tweet) => {
      initialLikeCounts[tweet.id] = 0;
    });
    setLikeCounts(initialLikeCounts);
  }, [tweets]);

  const timeAgo = (date) => {
    const currentDate = new Date();
    const tweetDate = new Date(date);
    const timeDifference = currentDate - tweetDate;
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 1) {
      return "Now";
    } else if (minutes < 60) {
      return `${minutes}m`;
    } else if (hours < 24) {
      return `${hours}h`;
    } else if (days < 2) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(date).toLocaleString(undefined, options);
    }
  };

  useEffect(() => {
    const storedLikedTweets =
      JSON.parse(localStorage.getItem("likedTweets")) || [];
    setLikedTweets(storedLikedTweets);

    const storedLikeCounts =
      JSON.parse(localStorage.getItem("likeCounts")) || {};

    const initialLikeCounts = {};
    tweets.forEach((tweet) => {
      initialLikeCounts[tweet.id] = storedLikeCounts[tweet.id] || 0;
    });
    setLikeCounts(initialLikeCounts);
  }, [tweets, activeTab, currentOption]);

  const handleLike = (tweetId) => {
    setLikedTweets((prevLikedTweets) => {
      const newLikedTweets = prevLikedTweets.includes(tweetId)
        ? prevLikedTweets.filter((id) => id !== tweetId)
        : [...prevLikedTweets, tweetId];

      localStorage.setItem("likedTweets", JSON.stringify(newLikedTweets));

      return newLikedTweets;
    });

    setLikeCounts((prevLikeCounts) => {
      const isLiked = likedTweets.includes(tweetId);
      const updatedCount = isLiked
        ? prevLikeCounts[tweetId] - 1
        : prevLikeCounts[tweetId] + 1;
      setLikeCounts((prev) => ({ ...prev, [tweetId]: updatedCount }));

      localStorage.setItem(
        "likeCounts",
        JSON.stringify({ ...prevLikeCounts, [tweetId]: updatedCount }),
      );

      return { ...prevLikeCounts, [tweetId]: updatedCount };
    });
  };

  const handleMoreOptionsClick = (tweetId) => {
    setSelectedTweet(tweetId);
  };

  const handleDeleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);
    setTweets(updatedTweets);

    const storedLikedTweets =
      JSON.parse(localStorage.getItem("likedTweets")) || [];
    const updatedLikedTweets = storedLikedTweets.filter((id) => id !== tweetId);
    localStorage.setItem("likedTweets", JSON.stringify(updatedLikedTweets));

    const storedLikeCounts =
      JSON.parse(localStorage.getItem("likeCounts")) || {};
    delete storedLikeCounts[tweetId];
    localStorage.setItem("likeCounts", JSON.stringify(storedLikeCounts));
  };

  useEffect(() => {
    if (newProfilePic) {
      setProfilePic(newProfilePic);
    }
  }, [newProfilePic]);

  return (
    <div>
      {tweets
        .filter((tweet) => (filter ? likedTweets.includes(tweet.id) : true))
        .slice(0)
        .reverse()
        .map((tweet) => (
          <div
            style={{ zIndex: addAccount && "-1" }}
            className={`relative grid grid-cols-[auto_1fr] gap-[8px] border-b-[1px] px-5 py-[10px] transition-colors duration-[.25s] ${
              showExtraInfo === false ? "cursor-pointer hover:bg-gray-100" : ""
            }`}
            key={tweet.id}
          >
            <img className="h-[50px] w-[50px] rounded-full" src={profilePic} />
            <div>
              <div className="relative flex items-center gap-[5px]">
                <p className="text-[15px] font-semibold">{name}</p>
                <p className="text-[15px] text-[#657786]">@{username}</p>
                <time className="text-[15px] text-[#657786]">
                  {timeAgo(tweet.date)}
                </time>
                <span
                  onClick={() => {
                    handleMoreOptionsClick(tweet.id);
                    setShowExtraInfo(true);
                  }}
                  className="group absolute right-[0px] rounded-full transition-colors duration-[.2s] hover:bg-blue-100"
                >
                  <BsThreeDots className="h-[32.5px] w-[32.5px] cursor-pointer fill-[#536471] p-[8px] group-hover:fill-blue-500" />
                </span>
              </div>
              <p>{tweet.text}</p>
              <div className="mt-[7px] flex -translate-x-[8px] justify-between">
                <span className="group flex items-center rounded-full p-[8px] transition-colors duration-[.2s] hover:bg-blue-100">
                  <FaRegComment className="w-[15.5px] fill-[#536471] group-hover:fill-blue-500" />
                </span>
                <span className="group flex items-center rounded-full p-[8px] transition-colors duration-[.2s] hover:bg-green-200">
                  <LiaRetweetSolid className="ease h-[18px] w-[18px] fill-[#536471] transition-colors duration-[.2s] group-hover:fill-green-500" />
                </span>
                <span
                  onClick={() => handleLike(tweet.id)}
                  className="relative flex items-center rounded-full p-[8px] transition-colors duration-[.2s] hover:bg-pink-200"
                >
                  {!likedTweets.includes(tweet.id) ? (
                    <IoIosHeartEmpty className="fill-[#536471] transition-colors duration-[.2s] group-hover:fill-[#f91880]" />
                  ) : (
                    <IoIosHeart className="fill-[#f91880]" />
                  )}
                  {likeCounts[tweet.id] > 0 && (
                    <span className="absolute bottom-[3.5px] right-[-5px] text-[13px] text-[#F91880]">
                      {likeCounts[tweet.id]}
                    </span>
                  )}
                </span>

                <span className="group flex items-center rounded-full p-[8px] transition-colors duration-[.2s] hover:bg-blue-100">
                  <MdBarChart className="fill-[#536471] transition-colors duration-[.2s] group-hover:fill-blue-500" />
                </span>
                <span className="group flex translate-x-[8px] items-center rounded-full p-[8px]  transition-colors duration-[.2s] hover:bg-blue-100">
                  <MdOutlineIosShare className="fill-[#536471] group-hover:fill-blue-500" />
                </span>
              </div>
            </div>
            {selectedTweet === tweet.id && (
              <>
                <div
                  onClick={() => {
                    handleMoreOptionsClick(false);
                    setShowExtraInfo(false);
                  }}
                  className="fixed inset-0 z-20 opacity-0"
                ></div>
                <TweetedTweetOptions
                  setShowExtraInfo={setShowExtraInfo}
                  onDeleteTweet={() => handleDeleteTweet(tweet.id)}
                />
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default TweetedTweet;
