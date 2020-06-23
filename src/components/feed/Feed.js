import React, { Component, Fragment } from "react";
import FeedItem from "./FeedItem";
import { BsStar } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineAppstoreAdd } from "react-icons/ai";

import { connect } from "react-redux";
import actions from "./../../redux/actions";

import { objIsChanged } from "./../../util";
import FeedService from "./../../services/Feed";

import FeedForm from "./FeedForm";

class Feed extends Component {
  state = {
    currentUser: {},
    feeds: [],
  };

  init = () => {
    FeedService.getFeedsOfUser(this.props.currentUser._id).then((res) => {
      this.props.setFeed(res.data);
    });
  };

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser,
    });
  }

  componentDidUpdate(prevProps) {
    if (objIsChanged(prevProps.currentUser, this.props.currentUser)) {
      this.setState({ currentUser: this.props.currentUser });
      this.init();
    }
    if (this.props.feeds.length !== prevProps.feeds.length) {
      this.setState({ feeds: this.props.feeds });
    }
  }

  onAdd = (feed) => {
    console.log("feed onAdd()", feed);
    this.props.addFeed(feed);
  };

  onEdit = (feed) => {
    console.log("feed onEdit()", feed);
  };

  onDelete = (_id) => {
    console.log("feed onDelete()", _id);
  };

  render() {
    return (
      <Fragment>
        <div
          className="border box-shadow mt-2 mb-2 clearfix"
          style={{ height: "50px" }}
        >
          <AiOutlineHeart className="mr-2 ml-2 mt-2" size="1.7em" />
          <small className="mr-1">
            <i>120</i>
          </small>
          <BsStar className="mr-2 mt-2" size="1.5em" />
          <small className="mr-1">
            <i>220</i>
          </small>
          <AiOutlineAppstoreAdd
            className="mt-2 mr-2 float-right"
            size="1.5em"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#feedForm"
          />
        </div>
        <div style={{ height: "500px", overflow: "auto" }}>
          {this.state.feeds.map((feed) => (
            <FeedItem key={feed._id} feed={feed} />
          ))}
        </div>
        <FeedForm onAdd={this.onAdd} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    feeds: state.feed.feeds,
  };
};

export default connect(mapStateToProps, actions)(Feed);
