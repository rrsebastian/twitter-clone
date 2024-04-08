import { createContext, useState } from "react";

const SharedContext = createContext();

const SharedContextProvider = ({ children }) => {
  const [addAccount, setAddAccount] = useState(false);
  const [openTimelineSettings, setOpenTimelineSettings] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [showProfilePopup, setShowProfilePopUp] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [followedUsers, setFollowedUsers] = useState(() => {
    const storedFollowedUsers = localStorage.getItem("followedUsers");
    return storedFollowedUsers ? JSON.parse(storedFollowedUsers) : [];
  });
  const [activeTab, setActiveTab] = useState("home");
  const [saveChanges, setSaveChanges] = useState(false);
  const [currentOption, setCurrentOption] = useState("posts");

  return (
    <SharedContext.Provider
      value={{
        addAccount,
        setAddAccount,
        openTimelineSettings,
        setOpenTimelineSettings,
        showEmojiPicker,
        setShowEmojiPicker,
        tweets,
        setTweets,
        showProfilePopup,
        setShowProfilePopUp,
        showMore,
        setShowMore,
        setShowMobileNavbar,
        showMobileNavbar,
        logOut,
        setLogOut,
        followedUsers,
        setFollowedUsers,
        activeTab,
        setActiveTab,
        saveChanges,
        setSaveChanges,
        currentOption,
        setCurrentOption,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};

export { SharedContextProvider, SharedContext };
