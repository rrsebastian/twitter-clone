import React from "react";
import RandomTweetContainer from "./RandomTweetContainer";
import userTweets from "../userTweets.json";

const RandomTweets = () => {
  return (
    <div>
      {userTweets.map((tweet, index) => (
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
      ))}
    </div>
  );
};

export default RandomTweets;
