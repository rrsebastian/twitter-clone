import React from "react";

const ProfileContainerNavbar = ({ title, text, showBtn }) => {
  return (
    <>
      <h1 className="mb-[5px] text-[31px] font-extrabold leading-9">{title}</h1>
      <p className="text-[15px] text-[#536471]">{text}</p>
      <button
        className={`mt-[30px] rounded-full bg-black px-[35px] py-[13px] text-[17px] font-extrabold text-white transition-opacity duration-[.25s] hover:opacity-85 ${showBtn ? "block" : "hidden"}`}
      >
        Subscribe to Premium
      </button>
    </>
  );
};

export default ProfileContainerNavbar;
