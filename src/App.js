import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "./redux/actions";
import logo from "./logo.svg";

// components
import Community from "./components/community/Community";
import Feed from "./components/feed/Feed";

// services
import UserService from "./services/User";

class App extends Component {
  state = {};

  componentDidMount() {
    this.init();
  }

  init = () => {
    const userId = "5eebe738a0f30538306ef082";
    // set current user login
    UserService.getUser(userId).then((res) => {
      this.props.setCurrentUser(res.data[0]);
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <img src={logo} alt="Logo" style={{ width: "40px" }}></img>
        </nav>
        <div className="row mt-5">
          <div className="col-md-3">
            <Community />
          </div>
          <div className="col-md-6">
            <Feed />
          </div>
          <div className="col-md-3">Chat Component</div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
