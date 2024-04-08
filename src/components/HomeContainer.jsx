import React, { useContext, useState } from "react";
import HomeTweetContainer from "../containers/HomeTweetContainer";
import ForYouFollowing from "../containers/ForYouFollowing";
import TweetedTweet from "../containers/TweetedTweet";
import RandomTweets from "../containers/RandomTweets";
import Following from "../containers/Following";
import FollowingTweets from "../containers/FollowingTweets";
import { SharedContext } from "../context";

const HomeContainer = () => {
  const [currentTimeline, setCurrentTimeline] = useState("for-you");
  const { tweets, followedUsers, activeTab } = useContext(SharedContext);

  return (
    <div style={{ display: activeTab !== "home" && "none" }} className="h-full">
      <ForYouFollowing
        currentTimeline={currentTimeline}
        setCurrentTimeline={setCurrentTimeline}
      />
      <HomeTweetContainer />

      <TweetedTweet />
      {currentTimeline === "for-you" ? (
        <RandomTweets />
      ) : (
        <>
          <div
            style={{
              display:
                (tweets.length > 0 && "none") ||
                (followedUsers.length > 0 && "none"),
            }}
          >
            <Following />
          </div>
          <FollowingTweets />
        </>
      )}
    </div>
  );
};

export default HomeContainer;
