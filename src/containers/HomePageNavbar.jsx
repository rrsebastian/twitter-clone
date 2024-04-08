import React, { useContext, useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import HomeIcon from "../assets/homeoutline.png";
import ExploreIcon from "../assets/explore.png";
import NotificationIcon from "../assets/notification.png";
import MessageIcon from "../assets/messages.png";
import BookmarkIcon from "../assets/bookmarks.png";
import DefaultProfilePic from "../assets/download.png";
import ListIcon from "../assets/lists.png";
import ProfileIcon from "../assets/profileoutline.png";
import MoreIcon from "../assets/more.png";
import MorePopup from "./MorePopup";
import ProfilePopup from "./ProfilePopup";
import Tweet from "./Tweet";
import { SharedContext } from "../context";
import { GoPlusCircle } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { PiMoneyBold } from "react-icons/pi";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogin } from "react-icons/md";
import LogoutConfirmation from "./LogoutConfirmation";
import { useNavigate } from "react-router-dom";

const HomePageNavbar = ({ setIsLoginComplete }) => {
  const {
    showProfilePopup,
    setShowProfilePopUp,
    showMore,
    setShowMore,
    showMobileNavbar,
    setShowMobileNavbar,
    activeTab,
    setActiveTab,
  } = useContext(SharedContext);
  const newProfilePic = localStorage.getItem("profilePic");
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");
  const [tweet, setTweet] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isClickedLogout, setIsClickedLogout] = useState(false);
  const [profilePic, setProfilePic] = useState(DefaultProfilePic);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowMobileNavbar(false);
  }, [windowWidth]);

  useEffect(() => {
    if (newProfilePic) {
      setProfilePic(newProfilePic);
    }
  }, [newProfilePic]);

  return (
    <>
      <nav
        style={{
          width: showMobileNavbar && "280px",
        }}
        className="fixed mr-[10px] flex h-full w-fit flex-col justify-between self-end pt-5 custom-1300:mr-5 custom-1300:items-center custom-795:mr-[10px] custom-500:left-0 custom-500:z-[11] custom-500:bg-white"
      >
        <GoPlusCircle className="absolute right-[15px] hidden h-[30px] w-[30px] fill-gray-500 custom-500:inline" />
        <div className=" w-full custom-1300:flex custom-1300:flex-col custom-1300:items-center custom-500:mt-[150px]">
          <FaTwitter className="mb-[30px] h-[33px] w-[40px] cursor-pointer fill-[#1DA1F2] custom-1300:self-center custom-500:hidden" />
          <ul
            style={{
              display:
                windowWidth <= 500 && !showMobileNavbar ? "none" : "initial",
            }}
            className=" relative flex w-fit flex-col gap-[0px] custom-1300:items-center custom-500:w-full"
          >
            <li
              onClick={() => {
                setActiveTab("home");
                navigate("/home");
                window.scrollTo({
                  top: 0,
                });
              }}
              className={`flex h-[53px] w-fit -translate-x-[1.4px] cursor-pointer items-center gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:hidden custom-500:w-full custom-500:rounded-none custom-500:px-[15px] ${
                activeTab === "home" && "font-bold"
              }`}
            >
              <img className="h-[30px] w-[30px]" src={HomeIcon} />{" "}
              {windowWidth > 1300 ? "Home" : windowWidth <= 500 && "Home"}
            </li>
            <li
              onClick={() => setActiveTab("explore")}
              className={`flex h-[53px] w-fit cursor-pointer items-center gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:hidden custom-500:w-full custom-500:rounded-none custom-500:px-[15px] ${activeTab === "explore" && "font-bold"}`}
            >
              <img className="h-[24px] w-[25px]" src={ExploreIcon} />{" "}
              {windowWidth > 1300 ? "Explore" : windowWidth <= 500 && "Explore"}
            </li>
            <li
              onClick={() => setActiveTab("notification")}
              className={`flex w-fit cursor-pointer items-center  gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:hidden custom-500:w-full custom-500:rounded-none custom-500:px-[15px] ${activeTab === "notification" && "font-bold"}`}
            >
              <img className="h-[24px] w-[25px]" src={NotificationIcon} />{" "}
              {windowWidth > 1300
                ? "Notifications"
                : windowWidth <= 500 && "Notifications"}
            </li>
            <li
              onClick={() => setActiveTab("messages")}
              className={`flex w-fit cursor-pointer items-center  gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:hidden custom-500:w-full custom-500:rounded-none custom-500:px-[15px] ${activeTab === "messages" && "font-bold"}`}
            >
              <img className="h-[24px] w-[25px]" src={MessageIcon} />{" "}
              {windowWidth > 1300
                ? "Messages"
                : windowWidth <= 500 && "Messages"}
            </li>
            <li
              onClick={() => {
                setActiveTab("bookmarks");
              }}
              className={`flex w-fit cursor-pointer items-center  gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:w-full custom-500:rounded-none  custom-500:px-[15px] custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "bookmarks" && "font-bold"}`}
            >
              {" "}
              <img className="h-[24px] w-[25px]" src={BookmarkIcon} />{" "}
              {windowWidth > 1300
                ? "Bookmarks"
                : windowWidth <= 500 && "Bookmarks"}
            </li>
            <li
              onClick={() => setActiveTab("lists")}
              className={`flex w-fit cursor-pointer items-center  gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:w-full custom-500:rounded-none custom-500:px-[15px] custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "lists" && "font-bold"}`}
            >
              {" "}
              <img className="h-[24px] w-[25px]" src={ListIcon} />{" "}
              {windowWidth > 1300 ? "Lists" : windowWidth <= 500 && "Lists"}
            </li>

            <li
              onClick={() => {
                setActiveTab("profile");
                setShowMobileNavbar(false);
                navigate("/profile");
                window.scrollTo({
                  top: 0,
                });
              }}
              className={`flex w-fit cursor-pointer items-center gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:w-full custom-500:rounded-none custom-500:px-[15px] custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "profile" && "font-bold"}`}
            >
              {" "}
              <img className="h-[24px] w-[25px]" src={ProfileIcon} />{" "}
              {windowWidth > 1300 ? "Profile" : windowWidth <= 500 && "Profile"}
            </li>
            <li
              onClick={() => setShowMore(true)}
              className="flex w-fit cursor-pointer items-center  gap-[15px] rounded-full px-[10px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:px-[12px] custom-500:hidden custom-500:w-full custom-500:rounded-none custom-500:px-[15px]"
            >
              {" "}
              <img className="h-[24px] w-[25px]" src={MoreIcon} />{" "}
              {windowWidth > 1300 ? "More" : windowWidth <= 500 && "More"}
            </li>
            <li
              className={`hidden w-full cursor-pointer items-center gap-[15px] rounded-none px-[15px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-500:flex custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "communities" && "font-bold"}`}
            >
              <BsPeople className="h-[24px] w-[24px]" /> Communities
            </li>
            <li
              className={`hidden w-full cursor-pointer items-center gap-[15px] rounded-none px-[15px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-500:flex custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "monetization" && "font-bold"}`}
            >
              {" "}
              <PiMoneyBold className="h-[24px] w-[24px]" />
              Monetization
            </li>
            <li
              className={`hidden w-full cursor-pointer items-center gap-[15px] rounded-none px-[15px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-500:flex custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "ads" && "font-bold"}`}
            >
              {" "}
              <LuArrowUpRightSquare className="h-[24px] w-[24px]" /> Ads
            </li>
            <li
              className={`hidden w-full cursor-pointer items-center gap-[15px] rounded-none px-[15px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-500:flex custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "settings" && "font-bold"}`}
            >
              {" "}
              <CiSettings className="h-[24px] w-[24px]" />
              Settings and privacy
            </li>
            <li
              onClick={() => setIsClickedLogout(true)}
              className={`hidden w-full cursor-pointer items-center gap-[15px] rounded-none px-[15px] py-[12px] pr-[30px] text-[18px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-500:flex custom-500:py-[16px] custom-500:text-[20px] custom-500:font-bold ${activeTab === "logout" && "font-bold"}`}
            >
              <MdOutlineLogin className="h-[24px] w-[24px]" /> Log out
            </li>
            {showMore && (
              <>
                <div
                  onClick={() => setShowMore(false)}
                  className="fixed inset-0 z-30 opacity-0"
                ></div>
                <MorePopup />
              </>
            )}
          </ul>
          <button
            onClick={() => setTweet(true)}
            className="mt-[8px] flex max-h-[52px] w-[233px] justify-center custom-button custom-1300:w-[50px] custom-1300:translate-x-[-1px] custom-500:hidden"
          >
            {windowWidth > 1300 ? "Post" : <FaTwitter />}
          </button>
        </div>
        <div
          style={{
            display:
              windowWidth <= 500
                ? showMobileNavbar
                  ? "initial"
                  : "none"
                : windowWidth > 500 && "flex",
          }}
          onClick={() => windowWidth > 500 && setShowProfilePopUp(true)}
          className="mb-[10px] w-[255px] cursor-pointer items-center gap-[10px] rounded-full p-[10px] transition-colors duration-[.25s] ease-out hover:bg-gray-200 custom-1300:w-[70px] custom-500:absolute custom-500:left-[15px] custom-500:top-[15px] custom-500:h-fit custom-500:w-fit custom-500:p-[0px] custom-500:hover:bg-transparent"
        >
          <p className="absolute right-[15px] text-[20px] custom-1300:hidden">
            ⋯
          </p>
          <img
            src={profilePic}
            className="h-[50px] w-[50px] rounded-full custom-500:mb-[10px]"
          />
          <div className="relative custom-1300:hidden custom-500:inline">
            <p className="font-semibold">{name}</p>
            <p className="text-[#657786]">@{username}</p>
          </div>
          <div className="mt-[5px] hidden gap-[20px] custom-500:flex">
            <p>
              <span className="text-[15px] font-black">0</span> Following
            </p>
            <p>
              <span className="text-[15px] font-black">0</span> Followers
            </p>
          </div>
        </div>
        {showProfilePopup && (
          <>
            <div
              onClick={() => setShowProfilePopUp(false)}
              className="fixed inset-0 z-[9] w-full opacity-0"
            ></div>
          </>
        )}
        <ProfilePopup
          setShowProfilePopUp={setShowProfilePopUp}
          showProfilePopup={showProfilePopup}
          setIsLoginComplete={setIsLoginComplete}
          username={username}
        />
      </nav>
      {tweet && (
        <>
          <div
            onClick={() => {
              showEmojiPicker ? setShowEmojiPicker(false) : setTweet(false);
            }}
            className="overlay custom-500:hidden"
          ></div>
          <div
            onClick={() => {
              showEmojiPicker ? setShowEmojiPicker(false) : setTweet(false);
            }}
            className="fixed inset-0 z-[9] w-full opacity-0"
          ></div>
          <Tweet
            isTweeted={tweet}
            setIsTweeted={setTweet}
            showEmojiPicker={showEmojiPicker}
            setShowEmojiPicker={setShowEmojiPicker}
          />
        </>
      )}
      {windowWidth <= 500 && showMobileNavbar && (
        <div
          onClick={() => setShowMobileNavbar(false)}
          className="overlay"
        ></div>
      )}
      {isClickedLogout && (
        <div className="z-20">
          <div
            onClick={() => setIsClickedLogout(false)}
            className="overlay"
          ></div>
          <LogoutConfirmation
            setIsClickedLogout={setIsClickedLogout}
            isClickedLogout={isClickedLogout}
          />
        </div>
      )}
      <div className="fixed bottom-[80px] right-[20px] z-[9] hidden custom-500:inline">
        <button
          onClick={() => setTweet(true)}
          className={`mt-[8px] flex h-[56px] w-[56px] items-center justify-center custom-button  ${tweet ? "hidden" : "block"}`}
        >
          {windowWidth > 1300 ? "Post" : <FaTwitter />}
        </button>
      </div>
    </>
  );
};

export default HomePageNavbar;
