import React, { Component } from "react";
import { getDate } from "./../../util";
import { FaCommentAlt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import FeedComment from "./FeedComment";

export default class FeedItem extends Component {
  render() {
    return (
      <div className="card box-shadow mb-2">
        <div className="card-header">
          <small className="font-weight-normal">
            <i>{getDate()}</i>
          </small>
        </div>
        <div className="card-body">
          <h4 className="card-title">{this.props.feed.title}</h4>
          <p className="card-text">{this.props.feed.description}</p>
          <hr />
          <FeedComment />
        </div>
        <div className="card-footer box-shadow">
          <div className="input-group">
            <BsFillStarFill
              className="mt-2 mr-2 input-group-append"
              style={{ cursor: "pointer" }}
              size="1.5em"
            />

            <input
              className="form-control float-right"
              placeholder="Comment"
            ></input>

            <FaCommentAlt
              className="mt-2 ml-2 input-group-append"
              style={{ cursor: "pointer" }}
              size="1.5em"
            />
          </div>
        </div>
      </div>
    );
  }
}
