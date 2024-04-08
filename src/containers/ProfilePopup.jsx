import React, { useEffect, useContext } from "react";
import { SharedContext } from "../context";
import LoginForm from "./LoginForm";

const ProfilePopup = ({
  username,
  showProfilePopup,
  setIsLoginComplete,
  setShowProfilePopUp,
}) => {
  const { addAccount, setAddAccount, logOut, setLogOut } =
    useContext(SharedContext);

  useEffect(() => {
    if (addAccount) {
      setShowProfilePopUp(false);
    }
  }, [addAccount, setShowProfilePopUp]);

  useEffect(() => {
    if (logOut) {
      window.location.href = "/";
      localStorage.removeItem("isUserLoggedIn");
    }
  }, [logOut]);

  return (
    <>
      <div
        style={{
          opacity: showProfilePopup ? "1" : "0",
          transition: "all 0.2s ease-out",
          visibility: showProfilePopup ? "visible" : "hidden",
          zIndex: "20",
        }}
        className="invisible absolute bottom-[90px] left-[-20px] z-30 w-[300px] rounded-xl bg-white box-shadow hover:bg-white custom-630:left-0"
      >
        <ul>
          <li
            style={{ zIndex: "20" }}
            onClick={() => setAddAccount(true)}
            className={` rounded-t-xl p-[20px] pb-[10px] pl-[15px] text-[15px] font-bold transition-colors duration-[.25s] ease-out hover:bg-gray-50 ${showProfilePopup ? "cursor-pointer" : "cursor-default"}`}
          >
            Add an existing account
          </li>
          <li
            onClick={() => setLogOut(true)}
            className={`z-30 cursor-pointer rounded-b-xl p-[20px] pl-[15px] pt-[10px] text-[15px] font-bold transition-colors duration-[.25s]  ease-out hover:bg-gray-50 ${showProfilePopup ? "cursor-pointer" : "cursor-default"}`}
          >
            Log out @{username}
          </li>
        </ul>
        {/* <div className="absolute bottom-[-5px] right-1/2 z-10 -mt-1 h-[10px] w-[10px] translate-x-1/2 rotate-45 transform border-transparent bg-white before:z-10"></div> */}
      </div>
      {addAccount && (
        <>
          <div className="overlay"></div>
          <LoginForm
            setAddAccount={setAddAccount}
            addAccount={addAccount}
            setIsLoginComplete={setIsLoginComplete}
          />
        </>
      )}
    </>
  );
};

export default ProfilePopup;
