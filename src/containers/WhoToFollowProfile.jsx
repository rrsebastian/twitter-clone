import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";

const WhoToFollowProfile = ({
  pfp,
  name,
  username,
  isVerified,
  handleFollowToggle,
}) => {
  const [followed, setFollowed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const storedFollowed = localStorage.getItem(`followedAccount_${username}`);
    if (storedFollowed === "true") {
      setFollowed(true);
    }
  }, [username]);

  const handleToggleFollow = () => {
    const newFollowed = !followed;
    setFollowed(newFollowed);
    localStorage.setItem(`followedAccount_${username}`, newFollowed.toString());
    handleFollowToggle(username);
  };

  return (
    <div className="ease relative grid cursor-pointer grid-cols-[auto_1fr] gap-[5px] py-[12px] pl-5 transition-colors duration-[.25s] hover:bg-[#e5eaeb]">
      <img className="h-[50px] w-[50px] rounded-full" src={pfp} />
      <div>
        <div className="flex items-center gap-[5px]">
          <p className="text-[15px] font-black">{name}</p>
          {isVerified && <MdVerified className="fill-[#1D9BF0]" />}
        </div>
        <p className="text-[15px]">{username}</p>
      </div>
      <button
        onClick={handleToggleFollow}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`absolute right-5 top-[30%] rounded-full px-[15px] py-[5px] text-[15px] font-black transition-opacity duration-[.25s] hover:opacity-80 
         ${followed ? "border border-[light-gray] bg-white text-[black]" : "bg-black text-white"} 
         
        ${hovered && followed ? "border border-[#fdc9ce] px-[18px]	text-[red] hover:bg-[#f4212f3a]" : ""}`}
      >
        {followed && hovered ? "Unfollow" : followed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default WhoToFollowProfile;
