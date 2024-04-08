import React, { useContext, useEffect, useState } from "react";
import DefaultProfilePic from "../assets/download.png";
import { IoMdClose } from "react-icons/io";
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
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data/sets/14/twitter.json";
import TextareaAutosize from "react-textarea-autosize";
import { SharedContext } from "../context";
import { v4 as uuidv4 } from "uuid";

const Tweet = ({
  isTweeted,
  setIsTweeted,
  showEmojiPicker,
  setShowEmojiPicker,
}) => {
  const newProfilePic = localStorage.getItem("profilePic");
  const [tweetText, setTweetText] = useState("");
  const [profilePic, setProfilePic] = useState(DefaultProfilePic);
  const [whoCanReply, setWhoCanReply] = useState("everyone");
  const [changeWhoCanReply, setChangeWhoCanReply] = useState(false);
  const { tweets, setTweets } = useContext(SharedContext);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("UserTweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    if (isTweeted) {
      const tweetBox = document.getElementById("tweet-box");
      tweetBox.focus();
    }
  }, [isTweeted]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isTweeted) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [isTweeted]);

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
    setIsTweeted(false);
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
      <div className="fixed z-[8] hidden h-[100%] w-full bg-white custom-500:block">
        fsdfdsd
      </div>
      <div className="fixed left-2/4 top-[33px] z-10 w-full max-w-[600px] -translate-x-[50%] rounded-[16px] bg-white px-[15px] custom-500:top-0 custom-500:rounded-none">
        <div
          style={{ display: showEmojiPicker ? "initial" : "none" }}
          onClick={() => {
            showEmojiPicker && setShowEmojiPicker(false);
          }}
          className="fixed inset-0 z-[9] hidden w-full opacity-0 custom-500:block"
        ></div>
        <div className=" mb-5 flex justify-between pt-[7px]">
          <div
            onClick={() => setIsTweeted(false)}
            className="cursor-pointer rounded-full p-[8px] duration-[.25s] ease-out hover:bg-gray-200"
          >
            <IoMdClose className="h-[21px] w-[21px] cursor-pointer" />
          </div>
          <button className="rounded-full p-[4px] px-[15px] text-[14px] font-bold text-[#1d9bf0] transition-colors duration-[.2s] ease-out hover:bg-blue-100">
            Drafts
          </button>
        </div>
        <div className="flex min-h-[220px] flex-col justify-between">
          <div className="relative flex h-[100%]">
            <img className="h-[50px] w-[50px] rounded-full" src={profilePic} />
            <TextareaAutosize
              className="w-full resize-none pl-2 pt-[13px] text-[20px] leading-5 placeholder:text-[gray] focus:outline-none"
              onChange={handleChange}
              value={tweetText}
              name="tweet-box"
              placeholder="What is happening?!"
              id="tweet-box"
              maxLength={280}
            />
          </div>
          <div className="mt-[10px]">
            <button
              onClick={() => setChangeWhoCanReply(true)}
              className=" mb-[10px] rounded-full p-[4px] px-[15px] text-[14px] font-[800] text-[#1d9bf0] transition-colors duration-[.2s] ease-out hover:bg-blue-100"
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
            {showEmojiPicker && (
              <>
                <div
                  onClick={() => setShowEmojiPicker(false)}
                  className="fixed inset-0 z-[15] opacity-0 custom-500:hidden"
                ></div>
                <div className="z-60 absolute bottom-[-436px]">
                  <Picker
                    theme="light"
                    data={data}
                    set="twitter"
                    onEmojiSelect={handleEmojiSelect}
                  />
                </div>
              </>
            )}
            <div className="flex items-center justify-between border-t py-[6px]">
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
                  onClick={() => handlePostTweet()}
                  disabled={tweetText === ""}
                  style={{
                    padding: "0px 15px",
                    fontSize: "15px",
                    height: "33px",
                  }}
                  className={`p-0 text-[15px]  ${tweetText === "" ? "rounded-full bg-[#1DA1F2] font-bold text-[white] opacity-50" : "custom-button"}`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
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
        />
      </div>
    </>
  );
};

export default Tweet;
