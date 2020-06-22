import React, { Component, Fragment } from "react";
import logo from "./../../logo.svg";
import CommunityForm from "./CommunityForm";
import { objIsChanged, removeSpaces } from "./../../util";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

export default class CommunityItem extends Component {
  state = {
    community: {},
    currentUser: {},
  };

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser,
      community: this.props.community,
    });
  }

  componentDidUpdate(prevProps) {
    if (objIsChanged(this.props.community, prevProps.community)) {
      this.setState({ community: this.props.community });
    }
  }

  getBadge = (type, name, onClick, attr, icon) => {
    // const spanClass = "m-1 badge badge-pill badge-" + type;
    const spanClass = "m-1 float-right";
    return (
      <span
        className={spanClass}
        style={{ cursor: "pointer" }}
        onClick={onClick}
        {...attr}
      >
        {icon ? icon : name}
      </span>
    );
  };

  canBeUpdate = () => {
    if (this.props.community.creator._id === this.state.currentUser._id) {
      return this.getBadge(
        "warning",
        "Edit",
        () => {},
        {
          "data-toggle": "modal",
          "data-target": "#" + removeSpaces(this.state.community.name),
        },
        <AiFillEdit />
      );
    }
  };

  canBeRemove = () => {
    if (this.props.community.creator._id === this.state.currentUser._id) {
      return this.getBadge(
        "danger",
        "Delete",
        () => {
          this.props.onDelete(this.state.community);
        },
        {},
        <AiFillDelete />
      );
    }
  };

  check = () => {
    if (this.state.currentUser.communities) {
      const found = this.state.currentUser.communities.find(
        (comm) => comm._id === this.props.community._id
      );
      return found;
    }
  };

  checkCreator = () =>
    this.props.community.creator._id === this.props.currentUser._id
      ? true
      : false;

  canLeave = () =>
    this.checkCreator()
      ? null
      : !this.check()
      ? null
      : this.getBadge(
          "secondary",
          "Leave",
          () => {
            this.props.onLeave(this.state.community);
          },
          {},
          <AiOutlineClose />
        );

  canJoin = () => {
    return this.check()
      ? null
      : this.getBadge(
          "success",
          "Join",
          () => {
            this.props.onJoin(this.state.community);
          },
          {},
          <AiOutlineCheck />
        );
  };

  render() {
    return (
      <Fragment>
        <div className="clearfix shadow-sm">
          <img
            src={logo}
            alt="img"
            className="rounder-circle m-2"
            style={{ width: "25px" }}
          ></img>
          <span className="m-2">{this.state.community.name}</span>
          {this.canBeUpdate()}
          {this.canBeRemove()}
          {this.canLeave()}
          {this.canJoin()}
        </div>
        <CommunityForm
          title="Edit"
          id={removeSpaces(this.state.community.name)}
          _id={this.state.community._id}
          name={this.state.community.name}
          description={this.state.community.description}
          onEdit={this.props.onEdit}
        />
      </Fragment>
    );
  }
}
