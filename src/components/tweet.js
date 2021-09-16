import React, { Component } from "react";
import { connect } from "react-redux";
import {
  TiArrowBackOutline as Arrow,
  TiHeartOutline as Heart,
  TiHeartFullOutline as RedHeart,
} from "react-icons/ti";
import { handleToggleTweet } from "../actions/tweet";
import { formatTweet, formatDate } from "../utils/helpers";

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault();
    const { dispatch, tweet, authUser } = this.props;
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authUser,
      })
    );
  };
  toParent = (e, id) => {
    e.preventDefault(handleToggleTweet());
  };
  render() {
    const { tweet } = this.props;

    if (!tweet) {
      return <p>This tweet is not available</p>;
    }
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent,
    } = tweet;
    return (
      <div className="tweet">
        <img className="avatar" src={`${avatar}`} alt={`avatar for ${name}`} />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className="replying-to" onClick={this.toParent}>
                replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <Arrow className="tweet-icon" />
            {replies > 0 && <span>{replies}</span>}
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked ? (
                <RedHeart className="tweet-icon" style={{ color: "red" }} />
              ) : (
                <Heart className="tweet-icon" />
              )}
            </button>
            {likes > 0 && <span>{likes}</span>}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  const author = users[tweet.author];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authUser,
    tweet: tweet ? formatTweet(tweet, author, authUser, parentTweet) : null,
  };
}
export default connect(mapStateToProps)(Tweet);
