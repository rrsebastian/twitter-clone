import React, { useContext, useEffect, useState } from "react";
import HomePageNavbar from "../containers/HomePageNavbar";
import { SharedContext } from "../context";
import Search from "../containers/Search";
import WhoToFollow from "../containers/WhoToFollow";
import Trends from "../containers/Trends";
import HomeContainer from "./HomeContainer";
import ProfileContainer from "./ProfileContainer";
import MobileHomepageNavbar from "../containers/MobileHomepageNavbar";

function MainContent({ setIsLoginComplete }) {
  const { addAccount, showProfilePopup, showMore } = useContext(SharedContext);

  return (
    <section className="relative m-auto grid h-full max-w-[1440px] grid-cols-[.7fr_1.1fr_1fr] custom-1300:grid-cols-[.5fr_1fr_1fr] custom-1173:grid-cols-[.3fr_1fr_1fr] custom-1080:grid-cols-[.1fr_auto] custom-1080:justify-center custom-1080:pl-[20px] custom-795:grid-cols-[.2fr_1fr] custom-795:pl-0 custom-500:grid-cols-1">
      <div className="flex flex-col">
        <HomePageNavbar setIsLoginComplete={setIsLoginComplete} />
      </div>
      <div
        style={{
          zIndex: showProfilePopup || addAccount ? "-1" : showMore && "-1",
        }}
        className="relative h-full w-[598px] border-l border-r border-[#D8D8D8] custom-1080:w-[598px] custom-795:w-full custom-500:absolute custom-500:top-0"
      >
        <HomeContainer />
        <ProfileContainer />
        <MobileHomepageNavbar />
      </div>
      <div
        style={{
          zIndex: addAccount || showMore ? "-1" : showProfilePopup && "-1",
        }}
        className="ml-5 w-full max-w-[350px] py-[70px] custom-1173:ml-0 custom-1173:px-5 custom-1080:hidden"
      >
        <Search />
        <WhoToFollow />
        <Trends />
      </div>
    </section>
  );
}

export default MainContent;
