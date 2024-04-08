import React, { useContext, useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import TimelineSettings from "./TimelineSettings";
import { SharedContext } from "../context";
import { FaTwitter } from "react-icons/fa";
import DefaultProfilePic from "../assets/download.png";

const ForYouFollowing = ({ currentTimeline, setCurrentTimeline }) => {
  const newProfilePic = localStorage.getItem("profilePic");
  const { openTimelineSettings, setOpenTimelineSettings, setShowMobileNavbar } =
    useContext(SharedContext);
  const [profilePic, setProfilePic] = useState(DefaultProfilePic);

  useEffect(() => {
    if (newProfilePic) {
      setProfilePic(newProfilePic);
    }
  }, [newProfilePic]);

  return (
    <div className="sticky top-0 z-[9]">
      <div className="absolute inset-0 top-0 w-full backdrop-blur-md"></div>
      <div className="relative hidden items-center justify-between px-[20px] pb-[8px] pt-[8px] custom-500:flex">
        <img
          onClick={() => setShowMobileNavbar(true)}
          src={profilePic}
          className="h-[32px] w-[32px] cursor-pointer rounded-full"
        />
        <FaTwitter className="h-[30px] w-7 fill-[#1DA1F2]" />
        <div>
          <div
            onClick={() => setOpenTimelineSettings(true)}
            className="cursor-pointer rounded-full p-[5px] duration-[.25s] ease-out hover:bg-gray-200"
          >
            <CiSettings className="h-[25px] w-[25px] " />
          </div>
        </div>
      </div>
      <div className="relative z-[5] grid w-full grid-cols-[1fr_1fr_auto] border-b-[1px]">
        <div
          onClick={() => {
            setCurrentTimeline("for-you");
            window.scrollTo({
              top: 0,
            });
          }}
          className="cursor-pointer bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
        >
          <h1
            className={`text-[#536471 m-auto w-fit cursor-pointer py-[13px] text-[15px]
          ${currentTimeline === "for-you" && "border-b-[4px] border-[#1DA1F2] font-bold"}`}
          >
            For you
          </h1>
        </div>
        <div
          onClick={() => {
            setCurrentTimeline("following");
            window.scrollTo({
              top: 0,
            });
          }}
          className="cursor-pointer bg-opacity-60 duration-[.25s] ease-out hover:bg-gray-200"
        >
          <h1
            className={`text-[#536471 m-auto w-fit cursor-pointer py-[13px] text-[15px]
            ${currentTimeline === "following" && "border-b-[4px] border-[#1DA1F2] font-bold"}`}
          >
            Following
          </h1>
        </div>
        <div className="bg-white bg-opacity-60 px-[15px]  py-[5px] custom-500:hidden">
          <div
            onClick={() => setOpenTimelineSettings(true)}
            className="cursor-pointer rounded-full p-[5px] duration-[.25s] ease-out hover:bg-gray-200"
          >
            <CiSettings className="h-[25px] w-[25px] " />
          </div>
        </div>
        {openTimelineSettings && (
          <>
            <div
              onClick={() => setOpenTimelineSettings(false)}
              className="overlay"
            ></div>
            <TimelineSettings
              openTimelineSettings={openTimelineSettings}
              setOpenTimelineSettings={setOpenTimelineSettings}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ForYouFollowing;
