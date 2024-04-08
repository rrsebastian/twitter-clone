import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const TimelineSettings = ({
  openTimelineSettings,
  setOpenTimelineSettings,
}) => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (openTimelineSettings) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [openTimelineSettings]);

  return (
    <div className="fixed left-2/4 top-[50%] z-20 h-[90%] max-h-[650px] w-full max-w-[600px] -translate-x-[50%] -translate-y-[50%] rounded-[16px] bg-white p-[8px] opacity-100 custom-630:h-[100%] custom-630:max-h-[100%] custom-630:max-w-full custom-630:rounded-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <div
            onClick={() => setOpenTimelineSettings(false)}
            className="cursor-pointer rounded-full p-[8px] duration-[.25s] ease-out hover:bg-gray-200"
          >
            <IoMdClose className="h-[21px] w-[21px] cursor-pointer" />
          </div>

          <h1 className="text-[20px] font-bold">Timeline settings</h1>
        </div>
        <button
          onClick={() => setOpenTimelineSettings(false)}
          className="mr-[6px] rounded-full px-[16px] py-[6px] text-[14px] font-bold button-hover"
        >
          Done
        </button>
      </div>
      <div className="w-full">
        <div className="m-auto mt-[35px] max-w-[350px] text-left">
          <h2 className="text-[31px] font-extrabold">Nothing here yet</h2>
          <p className="text-[15px] text-[#536471]">
            Try pinning a{" "}
            <span className="cursor-pointer text-[#1D9BF0]">List</span> or a{" "}
            <span className="cursor-pointer text-[#1D9BF0]">Community</span> to
            have easier access to your favorite content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSettings;
