import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbCameraPlus } from "react-icons/tb";
import { SharedContext } from "../context";
import ProfilePic from "../assets/download.png";

const EditProfile = ({ setEditProfile }) => {
  const name = localStorage.getItem("name");
  const bio = localStorage.getItem("bio");
  const uploadedBannerImage = localStorage.getItem("bannerPic");
  const uploadedProfilePic = localStorage.getItem("profilePic");
  const [inputValue, setInputValue] = useState(name);
  const [inputFocused, setInputFocused] = useState(false);
  const [bioValue, setBioValue] = useState(bio || "");
  const [bioFocused, setBioFocused] = useState(false);
  const [profilePic, setProfilePic] = useState(
    uploadedProfilePic || ProfilePic,
  );
  const [bannerPic, setBannerPic] = useState(uploadedBannerImage || "");
  const { saveChanges, setSaveChanges } = useContext(SharedContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleBioChange = (e) => {
    setBioValue(e.target.value);
  };

  const handleBioFocus = () => {
    setBioFocused(true);
  };

  const handleBioBlur = () => {
    setBioFocused(false);
  };

  const handleBannerPicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setBannerPic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (saveChanges) {
      localStorage.removeItem("name");
      localStorage.setItem("name", inputValue);
      localStorage.setItem("bio", bioValue);
    }
  }, [saveChanges]);

  const handleSave = () => {
    setSaveChanges(true);
    setTimeout(() => {
      setEditProfile(false);
      setSaveChanges(false);
    }, 1);
  };

  useEffect(() => {
    if (saveChanges) {
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("bannerPic", bannerPic);
    }
  }, [saveChanges]);

  return (
    <div className="fixed left-1/2 top-1/2 z-[10] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white pb-[20px] custom-500:h-full custom-500:rounded-none">
      <div className="flex justify-between px-4 py-[10px]">
        <div className="flex items-center gap-[50px]">
          <div
            onClick={() => setEditProfile(false)}
            className="cursor-pointer rounded-full p-[8px] transition-colors duration-[.25s] hover:bg-gray-200"
          >
            <IoMdClose className="h-5 w-5" />
          </div>

          <h2 className="text-[20px] font-bold">Edit Profile</h2>
        </div>
        <button
          onClick={handleSave}
          className=" rounded-full bg-black px-[15px] text-[14px] font-bold text-white transition-opacity duration-[.25s] hover:opacity-80"
        >
          Save
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${bannerPic || uploadedBannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`"bg-[#a8aeb3]" relative  h-[190px]`}
      >
        <div className="absolute z-[9] h-full w-full bg-black opacity-[.4]"></div>
        <label
          htmlFor="banner-pic-input"
          className="group absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#a8aeb3] p-[10px] transition-colors duration-[.25s] hover:bg-[#9da3a8]"
        >
          <TbCameraPlus className="h-[22px] w-[22px]" />
        </label>
        <input
          id="banner-pic-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleBannerPicChange}
        />

        <input
          id="profile-pic-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleProfilePicChange}
        />
        <div className="absolute -bottom-[40%] left-[16px] z-10 h-full max-h-[126px] w-full max-w-[126px] rounded-full outline outline-4 outline-white">
          <div className="absolute z-10 h-full w-full rounded-full bg-black opacity-[.4]"></div>
          <img
            className="h-full w-full rounded-full"
            src={profilePic}
            alt="Profile"
          />
          <label
            htmlFor="profile-pic-input"
            className="absolute left-1/2  top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#a8aeb3] p-[8px] transition-colors duration-[.25s] hover:bg-[#9da3a8]"
          >
            <TbCameraPlus className="h-[22px] w-[22px]" />
          </label>
        </div>
      </div>
      <form className="mt-[90px] px-[16px] ">
        <div className="relative">
          <div
            className={`pointer-events-none absolute left-0 top-0  pl-2 pr-2  ${inputValue || inputFocused ? "top-[10px] text-[13px]" : "top-1/2 -translate-y-1/2 transform text-base"} ${!inputFocused ? "text-gray-500" : inputValue === "" && inputFocused ? "text-red-500" : inputFocused && "text-blue-300"} `}
          >
            Name
          </div>
          <input
            name="name-change"
            type="text"
            className={`w-full rounded-[4px] border-gray-300 pb-[5px] pl-2 pt-[30px]  focus:outline-none
             ${inputValue === "" && inputFocused ? "border-[2px] border-red-500 pb-[4px] pt-[29px]" : "border-[1px] focus:border-[2px] focus:border-blue-300 focus:pb-[4px] focus:pl-[7px] focus:pt-[29px]"} 
             ${inputValue === "" && !inputFocused && "border-red-500"}`}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            spellCheck={false}
            maxLength={15}
          />
          <div
            className={`absolute right-2 top-2 text-[13px] text-gray-500 ${inputValue === "" || inputFocused ? "block" : "hidden"}
            `}
          >
            {inputValue.length} / 15
          </div>
        </div>
        <p
          className={`ml-2 mt-[5px] text-[13px] text-red-500 ${inputValue === "" ? "block" : "hidden"}`}
        >
          Name cannot be blank
        </p>
        <div
          className={`relative mt-5 h-[100px] ${bioFocused ? "border-[2px] border-blue-300" : "border border-gray-300"}`}
        >
          <div
            className={`pointer-events-none absolute left-0 z-[5] pl-2 pr-2 ${bioValue || bioFocused ? "top-[10px] text-[13px] text-blue-300" : " top-[19px] transform  text-base text-gray-500 "}`}
          >
            Bio
          </div>
          <textarea
            name="bio"
            onChange={handleBioChange}
            onFocus={handleBioFocus}
            onBlur={handleBioBlur}
            value={bioValue}
            maxLength={160}
            className={` absolute bottom-0 h-[70%] w-full resize-none rounded-[4px] pb-[5px] pl-2 focus:outline-none
            
           `}
          ></textarea>
          <div
            className={`absolute right-2 top-2 text-[13px] text-gray-500 ${bioFocused ? "block" : "hidden"}
            `}
          >
            {bioValue ? bioValue.length : 0} / 160
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
