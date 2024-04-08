import React, { useContext, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import DefaultProfilePic from "../assets/download.png";
import { IoEarthOutline } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import PhotosIcon from "../assets/photosIcon.png";
import GifIcon from "../assets/gifIcon.png";
import ChartIcon from "../assets/chartIcon.png";
import EmojiIcon from "../assets/emojiIcon.png";
import CalendarIcon from "../assets/calendarIcon.png";
import WhoCanReply from "./WhoCanReply";
import { SharedContext } from "../context";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data/sets/14/twitter.json";
import { v4 as uuidv4 } from "uuid";

const HomeTweetContainer = () => {
  const newProfilePic = localStorage.getItem("profilePic");
  const [tweetText, setTweetText] = useState("");
  const [clickTextbox, setClickTextbox] = useState(false);
  const [whoCanReply, setWhoCanReply] = useState("everyone");
  const [clickWhoCanReplyHome, setClickWhoCanReplyHome] = useState(false);
  const [changeWhoCanReply, setChangeWhoCanReply] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [profilePic, setProfilePic] = useState(DefaultProfilePic);
  const { addAccount, openTimelineSettings, tweets, setTweets } =
    useContext(SharedContext);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("UserTweets")) || [];
    setTweets((prevTweets) => {
      const uniqueTweets = storedTweets.filter(
        (storedTweet) =>
          !prevTweets.some((tweet) => tweet.id === storedTweet.id),
      );
      return [...uniqueTweets, ...prevTweets];
    });
  }, []);

  const handleChange = (event) => {
    const newText = event.target.value;
    setTweetText(newText);
  };

  const handleEmojiSelect = (emoji) => {
    setTweetText((prevText) => prevText + emoji.native);
  };

  const remainingCharacters = 280 - tweetText.length;

  const handlePostTweet = () => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = new Date().toLocaleString(undefined, options);

    const newTweet = {
      id: uuidv4(),
      text: tweetText,
      date: formattedDate,
    };

    setTweets((prevTweets) => [...prevTweets, newTweet]);
    setTweetText("");
    setClickTextbox(false);
  };
  useEffect(() => {
    localStorage.setItem("UserTweets", JSON.stringify(tweets));
  }, [tweets]);

  useEffect(() => {
    if (newProfilePic) {
      setProfilePic(newProfilePic);
    }
  }, [newProfilePic]);

  return (
    <>
      <div
        style={{ zIndex: openTimelineSettings ? "-1" : addAccount && "-1" }}
        className="relative w-full border-b-[1px] bg-white px-[15px] pb-[0px] pt-[15px] custom-500:hidden"
      >
        <div className="grid grid-cols-[auto_1fr]">
          <img className="h-[50px] w-[50px] rounded-full" src={profilePic} />
          <div className="flex flex-col">
            {" "}
            <TextareaAutosize
              onClick={() => setClickTextbox(true)}
              className="custom-textarea mb-[10px] max-h-[74vh] w-full resize-none bg-white pl-2 pt-[13px] text-[20px] leading-5 placeholder:text-[gray] focus:outline-none"
              value={tweetText}
              placeholder="What is happening?!"
              id="tweet-box-home"
              onChange={handleChange}
              maxLength={280}
            />
            <button
              style={{ display: clickTextbox ? "initial" : "none" }}
              onClick={() => setChangeWhoCanReply(true)}
              className=" mb-[10px] w-fit rounded-full p-[4px] px-[15px] text-[14px] font-[800] text-[#1d9bf0] 
              transition-colors duration-[.2s] ease-out hover:bg-blue-100"
            >
              {whoCanReply === "everyone" && (
                <div className="flex items-center gap-[5px]">
                  <IoEarthOutline className="h-4 w-4" />{" "}
                  <p>Everyone can reply</p>
                </div>
              )}
              {whoCanReply === "you-follow" && (
                <div className="flex items-center gap-[5px]">
                  <MdOutlineSupervisorAccount className="h-4 w-4" />
                  <p> Accounts you follow can reply</p>
                </div>
              )}
              {whoCanReply === "verified" && (
                <div className="flex items-center gap-[5px]">
                  <MdOutlineVerified className="h-4 w-4" />
                  <p>Only Verified accounts can reply</p>
                </div>
              )}
              {whoCanReply === "you-mention" && (
                <div className="flex items-center gap-[5px]">
                  <FiAtSign className="h-4 w-4" />
                  <p>Only accounts you mention can reply</p>
                </div>
              )}
            </button>
            <div
              className={`flex items-center justify-between py-[8px] ${clickTextbox && "border-t-[1px]"}`}
            >
              <div className="flex items-center ">
                <span className="cursor-pointer rounded-full p-[10px] duration-[.2s] ease-out hover:bg-blue-100">
                  <img className="h-[17px] w-[17px]" src={PhotosIcon} />
                </span>
                <span className="cursor-pointer rounded-full p-[10px] duration-[.2s] ease-out hover:bg-blue-100">
                  <img className="h-[17px] w-[17px]" src={GifIcon} />
                </span>
                <span className="cursor-pointer rounded-full p-[10px] duration-[.2s] ease-out hover:bg-blue-100">
                  <img className="h-[17px] w-[17px]" src={ChartIcon} />
                </span>
                <span
                  onClick={() => setShowEmojiPicker(true)}
                  className="cursor-pointer rounded-full p-[10px] duration-[.2s] ease-out hover:bg-blue-100"
                >
                  <img className="h-[17px] w-[17px]" src={EmojiIcon} />
                </span>
                <span className="cursor-pointer rounded-full p-[10px] duration-[.2s] ease-out hover:bg-blue-100">
                  {" "}
                  <img className="h-[17px] w-[17px]" src={CalendarIcon} />
                </span>
              </div>
              <div>
                <span
                  style={{ display: tweetText !== "" ? "initial" : "none" }}
                  className="mr-5 text-gray-500"
                >
                  {remainingCharacters}
                </span>
                <button
                  onClick={() => {
                    handlePostTweet();
                  }}
                  style={{
                    zIndex: openTimelineSettings ? "-1" : addAccount && "-1",
                  }}
                  disabled={tweetText === ""}
                  className={`z-0 rounded-full px-[16px]  py-[6px] text-[14px] font-bold text-[white] button-hover
                 ${tweetText === "" ? "opacity-50" : "opacity-100"}`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          {showEmojiPicker && (
            <>
              <div
                onClick={() => setShowEmojiPicker(false)}
                className="fixed inset-0 z-[9] opacity-0"
              ></div>
              <div className="absolute bottom-[-450px] z-10">
                <Picker
                  theme="light"
                  data={data}
                  set="twitter"
                  onEmojiSelect={handleEmojiSelect}
                />
              </div>
            </>
          )}
        </div>
        {changeWhoCanReply && (
          <div
            onClick={() => setChangeWhoCanReply(false)}
            className="fixed inset-0 z-20 opacity-0"
          ></div>
        )}
        <WhoCanReply
          whoCanReply={whoCanReply}
          setWhoCanReply={setWhoCanReply}
          setChangeWhoCanReply={setChangeWhoCanReply}
          changeWhoCanReply={changeWhoCanReply}
          setClickWhoCanReplyHome={setClickWhoCanReplyHome}
          clickWhoCanReplyHome={clickWhoCanReplyHome}
        />
      </div>
    </>
  );
};

export default HomeTweetContainer;
