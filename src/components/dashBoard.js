import React, { Component } from "react";
import { connect } from "react-redux";

class DashBoard extends Component {
  render() {
    const { tweetIds } = this.props;
    return (
      <div>
        {tweetIds.map((id) => (
          <h3>{id}</h3>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  console.log(tweets);
  return { tweetIds: Object.keys(tweets.tweets || tweets) };
}

export default connect(mapStateToProps)(DashBoard);
