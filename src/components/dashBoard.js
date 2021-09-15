import React, { Component } from "react";
import { connect } from "react-redux";

import Tweet from "./tweet";

class DashBoard extends Component {
  render() {
    console.log(this.props);
    const { tweetIds } = this.props;
    return (
      <div>
        <h3 className="center">Your TimeLine</h3>
        <ul className="dashboard-list">
          {tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(DashBoard);
