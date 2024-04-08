import React, { useContext, useEffect, useState } from "react";
import deafultProfilePic from "../assets/download.png";
import { IoArrowBack } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SharedContext } from "../context";
import EditProfile from "../containers/EditProfile";
import LikedTweets from "../containers/LikedTweets";
import TweetedTweet from "../containers/TweetedTweet";
import ProfileContainerNavbar from "../containers/ProfileContainerNavbar";

const ProfileContainer = () => {
  const {
    tweets,
    activeTab,
    setActiveTab,
    followedUsers,
    currentOption,
    setCurrentOption,
  } = useContext(SharedContext);
  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const [selectedPfp, setSelectedPfp] = useState("");
  const [editProfile, setEditProfile] = useState(false);
  const [profileBio, setProfileBio] = useState("");
  const bio = localStorage.getItem("bio");
  const profilePic = localStorage.getItem("profilePic");
  const bannerPic = localStorage.getItem("bannerPic");
  const likedTweets = JSON.parse(localStorage.getItem("likedTweets"));

  useEffect(() => {
    if (profilePic) {
      setSelectedPfp(profilePic);
    } else setSelectedPfp(deafultProfilePic);
  }, [profilePic]);

  useEffect(() => {
    if (bio) {
      setProfileBio(bio);
    } else {
      setProfileBio("");
    }
  }, [bio]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (editProfile) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [editProfile]);

  const getCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[currentMonth];
  };

  return (
    <>
      <div
        style={{ display: activeTab !== "profile" && "none" }}
        className="z-20 h-full"
      >
        <div className="sticky top-0 z-[9]">
          <div className="absolute inset-0 top-0 z-10 w-full backdrop-blur-md "></div>
          <div className="sticky top-0 z-[11] flex items-center gap-[22px]  bg-white bg-opacity-80 px-[11px] py-[2px]">
            <div
              onClick={() => {
                setActiveTab("home");
              }}
              className="z-30 cursor-pointer rounded-full p-[9px] transition-colors duration-[.25s] hover:bg-slate-200"
            >
              <IoArrowBack className="h-5 w-5" />
            </div>
            <div className="z-20 ">
              <h1 className="z-0 text-[20px] font-bold">{name}</h1>
              <p className="text-[13px] text-[#536471]">
                {tweets.length} {tweets.length === 1 ? "post" : "posts"}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${bannerPic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative h-full max-h-[200px] w-full bg-[#d1d8dd] pl-4"
        >
          <div className="absolute -bottom-[30%] h-full max-h-[145px] w-full max-w-[145px] rounded-full outline outline-4 outline-white">
            <img
              className="h-full w-full rounded-full"
              src={selectedPfp}
              alt="Profile"
            />
          </div>
        </div>
        <div className={`relative mb-[18px] px-4 pt-3 `}>
          <button
            onClick={() => setEditProfile(true)}
            className="absolute right-5 top-[12px] rounded-full px-[15px] py-[5px] text-[15px] font-bold outline outline-1 outline-gray-300 transition-colors duration-[.25s] hover:bg-gray-200"
          >
            Edit profile
          </button>
          <div className="break-words pt-[70px]">
            <p className="text-[20px] font-black">{name}</p>
            <p className="text-[15px] text-[#536471]">@{username}</p>
            <p className="mt-[12px] text-[15px]">{profileBio}</p>
            <p className="my-[12px] flex items-center gap-[5px] text-[15px] text-[#536471]">
              <FaRegCalendarAlt className="h-[15px] w-[15px]" fill="#536471" />{" "}
              Joined 2024 {getCurrentMonth()}
            </p>
            <div className="flex items-center gap-[20px]">
              <p className="text-[14px] text-[#536471]">
                <span className="font-bold text-[black]">0</span> Followers
              </p>
              <p className="text-[14px] text-[#536471]">
                <span className="font-bold text-[black]">
                  {followedUsers.length}
                </span>{" "}
                Following
              </p>
            </div>
          </div>
        </div>
        <div style={{ scrollbarWidth: "thin" }} className="overflow-x-auto ">
          <ul className="flex w-full border-b-[1px] custom-500:min-w-[590px]">
            <li
              onClick={() => setCurrentOption("posts")}
              className="w-full cursor-pointer bg-white bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
            >
              <p
                className={`m-auto w-fit cursor-pointer py-[10px] text-[15px] text-[#536471]  ${currentOption === "posts" && "border-b-[4px] border-[#1DA1F2] font-bold text-black"}`}
              >
                Posts
              </p>
            </li>
            <li
              onClick={() => setCurrentOption("replies")}
              className="w-full cursor-pointer bg-white bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
            >
              <p
                className={`m-auto w-fit cursor-pointer py-[10px] text-[15px] text-[#536471]  ${currentOption === "replies" && "border-b-[4px] border-[#1DA1F2] font-bold text-black"}`}
              >
                Replies
              </p>
            </li>
            <li
              onClick={() => setCurrentOption("highlights")}
              className="w-full cursor-pointer bg-white bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
            >
              <p
                className={`m-auto w-fit cursor-pointer py-[10px] text-[15px] text-[#536471]  ${currentOption === "highlights" && "border-b-[4px] border-[#1DA1F2] font-bold text-black"}`}
              >
                Highlights
              </p>
            </li>
            <li
              onClick={() => setCurrentOption("articles")}
              className="w-full cursor-pointer bg-white bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
            >
              <p
                className={`m-auto w-fit cursor-pointer py-[10px] text-[15px] text-[#536471]  ${currentOption === "articles" && "border-b-[4px] border-[#1DA1F2] font-bold text-black"}`}
              >
                Articles
              </p>
            </li>
            <li
              onClick={() => setCurrentOption("media")}
              className="w-full cursor-pointer bg-white bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
            >
              <p
                className={`m-auto w-fit cursor-pointer py-[10px] text-[15px] text-[#536471]  ${currentOption === "media" && "border-b-[4px] border-[#1DA1F2] font-bold text-black"}`}
              >
                Media
              </p>
            </li>
            <li
              onClick={() => setCurrentOption("likes")}
              className="w-full cursor-pointer bg-white bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
            >
              <p
                className={`m-auto w-fit cursor-pointer py-[10px] text-[15px] text-[#536471]  ${currentOption === "likes" && "border-b-[4px] border-[#1DA1F2] font-bold text-black"}`}
              >
                Likes
              </p>
            </li>
          </ul>
        </div>

        <div className={`${currentOption === "posts" ? "block" : "hidden"}`}>
          {tweets.length > 0 ? (
            <TweetedTweet />
          ) : (
            <div className="m-auto w-[320px] pt-[30px] text-left">
              <ProfileContainerNavbar
                title={"You haven't tweeted anything yet"}
                text={"After you tweet something it will show up here "}
              />
            </div>
          )}
        </div>

        <div
          className={`${currentOption === "replies" ? "block" : "hidden"} m-auto w-[320px] pt-[30px] text-left`}
        >
          <ProfileContainerNavbar
            title={"You have not replied to anything"}
            text={"Reply to a tweet, which then will show up here."}
          />
        </div>
        <div
          className={`${currentOption === "highlights" ? "block" : "hidden"} m-auto w-[320px] pt-[30px] text-left`}
        >
          <ProfileContainerNavbar
            title={"Highlight on your profile"}
            text={
              "You must be subscribed to Premium to highlight posts on your profile."
            }
            showBtn={true}
          />
        </div>
        <div
          className={`${currentOption === "articles" ? "block" : "hidden"} m-auto w-[320px] pt-[30px] text-left`}
        >
          <ProfileContainerNavbar
            title={"Write Articles on Twitter"}
            text={
              "You must be subscribed to Premium+ to write Articles on Twitter"
            }
            showBtn={true}
          />
        </div>
        <div
          className={`${currentOption === "media" ? "block" : "hidden"} m-auto w-[320px] pt-[30px] text-left`}
        >
          <ProfileContainerNavbar
            title={"Lights, camera … attachments!"}
            text={"When you post photos or videos, they will show up here."}
          />
        </div>
        <div className={`${currentOption === "likes" ? "block" : "hidden"}`}>
          {likedTweets && likedTweets.length > 0 ? (
            <LikedTweets />
          ) : (
            <div className=" m-auto w-[320px] pt-[30px] text-left">
              <ProfileContainerNavbar
                title={"You don’t have any likes yet"}
                text={
                  "Tap the heart on any post to show it some love. When you do, it’ll show up here."
                }
              />
            </div>
          )}
        </div>
      </div>
      {editProfile && (
        <>
          <div onClick={() => setEditProfile(false)} className="overlay"></div>
          <EditProfile
            setEditProfile={setEditProfile}
            selectedPfp={selectedPfp}
          />
        </>
      )}
    </>
  );
};

export default ProfileContainer;
