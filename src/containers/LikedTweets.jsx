import React from "react";
import RandomTweetContainer from "./RandomTweetContainer";
import userTweets from "../userTweets.json";
import TweetedTweet from "./TweetedTweet";

const LikedTweets = () => {
  const likedTweets = JSON.parse(localStorage.getItem("likedTweets")) || [];

  return (
    <div>
      {userTweets.map((tweet, index) => {
        if (likedTweets.includes(tweet.id)) {
          return (
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
          );
        }
        return null;
      })}
      <TweetedTweet filter={true} />
    </div>
  );
};

export default LikedTweets;
