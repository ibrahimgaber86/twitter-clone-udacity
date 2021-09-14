import React, { Component } from "react";

import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return <div>Starter Code</div>;
  }
}

export default connect()(App);
