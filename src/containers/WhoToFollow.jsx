import React, { useContext, useEffect } from "react";
import UserTweets from "../userTweets.json";
import WhoToFollowProfile from "./WhoToFollowProfile";
import { SharedContext } from "../context";

const WhoToFollow = () => {
  const { followedUsers, setFollowedUsers } = useContext(SharedContext);

  useEffect(() => {
    localStorage.setItem("followedUsers", JSON.stringify(followedUsers));
  }, [followedUsers]);
  const handleFollowToggle = (username) => {
    if (!followedUsers.includes(username)) {
      setFollowedUsers((prevUsers) => [username, ...prevUsers]);
    } else {
      setFollowedUsers((prevUsers) =>
        prevUsers.filter((user) => user !== username),
      );
    }
  };

  return (
    <div className="rounded-b-[10px] rounded-t-[10px] bg-[#F7F9F9]">
      <div className="py-[8px]">
        <h1 className="ml-5 text-[20px] font-black">Who to follow</h1>
      </div>
      <WhoToFollowProfile
        pfp={UserTweets[4].pfp}
        name={UserTweets[4].name}
        username={UserTweets[4].username}
        isVerified={UserTweets[4].verified}
        handleFollowToggle={handleFollowToggle}
      />
      <WhoToFollowProfile
        pfp={UserTweets[2].pfp}
        name={UserTweets[2].name}
        username={UserTweets[2].username}
        isVerified={UserTweets[2].verified}
        handleFollowToggle={handleFollowToggle}
      />
      <WhoToFollowProfile
        pfp={UserTweets[5].pfp}
        name={UserTweets[5].name}
        username={UserTweets[5].username}
        isVerified={UserTweets[5].verified}
        handleFollowToggle={handleFollowToggle}
      />
      <div className="ease cursor-pointer rounded-b-[10px] py-[15px] pl-5 transition-colors duration-[.25s] hover:rounded-b-[10px] hover:bg-gray-200">
        <p className="text-[#1D9BF0]">Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
