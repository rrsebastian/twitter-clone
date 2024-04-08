import React, { useEffect, useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import { SharedContext } from "../context";

const LogoutConfirmation = ({ isClickedLogout, setIsClickedLogout }) => {
  const { setLogOut } = useContext(SharedContext);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isClickedLogout) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [isClickedLogout]);

  return (
    <div className="fixed left-2/4 top-[25%] z-[11] flex w-full max-w-[320px] -translate-x-1/2 flex-col rounded-2xl bg-white p-8">
      <FaTwitter className=" mb-[12px] h-[45px] w-[45px] self-center fill-[#1DA1F2]" />
      <h1 className="text-[20px] font-bold">Log out of Twitter?</h1>
      <p className="mb-[20px] mt-[10px] text-[#536471]">
        You can always log back in at any time. If you just want to switch
        accounts, you can do that by adding an existing account.
      </p>
      <div className="flex flex-col gap-[10px]">
        <button
          onClick={() => setLogOut(true)}
          className="hover: rounded-full bg-[#1DA1F2] py-[10px] text-[15px] font-bold text-[white] transition-opacity duration-[.25s] hover:opacity-75"
        >
          Log out
        </button>
        <button
          onClick={() => setIsClickedLogout(false)}
          className="rounded-full border py-[10px] text-[15px] font-bold transition-colors duration-[.25s] hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
