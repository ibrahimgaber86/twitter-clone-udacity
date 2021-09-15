import React, { Component } from "react";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

import DashBoard from "./dashBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        <DashBoard />
      </div>
    );
  }
}

export default connect()(App);
