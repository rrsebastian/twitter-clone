import React, { useState, useEffect, useContext } from "react";
import userTweets from "../userTweets.json";
import { SharedContext } from "../context";
import RandomTweetContainer from "./RandomTweetContainer";

const FollowingTweets = () => {
  const { followedUsers } = useContext(SharedContext);
  const [filteredTweets, setFilteredTweets] = useState([]);

  useEffect(() => {
    const filtered = [];
    followedUsers.forEach((user) => {
      const filteredUserTweets = userTweets.filter(
        (tweet) => tweet.username === user,
      );
      filtered.push(...filteredUserTweets);
    });
    setFilteredTweets(filtered);
  }, [followedUsers, userTweets]);

  return (
    <div style={{ display: followedUsers.length > 0 ? "initial" : "none" }}>
      {filteredTweets.map((tweet, index) => (
        <div key={index}>
          <RandomTweetContainer
            key={index}
            pfp={tweet.pfp}
            name={tweet.name}
            username={tweet.username}
            timeAgo={tweet.time_ago}
            tweetText={tweet.tweet}
            verified={tweet.verified}
            comments={tweet.comments}
            likes={tweet.likes}
            views={tweet.views}
            retweets={tweet.retweets}
            id={tweet.id}
          />
        </div>
      ))}
    </div>
  );
};

export default FollowingTweets;
