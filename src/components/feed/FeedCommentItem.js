import React from "react";
import { BsPersonSquare, BsHeartFill } from "react-icons/bs";

function FeedCommentItem() {
  return (
    <div className="border mb-1 clearfix">
      <div className="clearfix">
        <BsPersonSquare className="float-left ml-1 mr-1 mt-1" size="2em" />
        <p className="float-left">John Doe </p>
        <small className="float-right m-1">
          <i>Posted on February 19, 2016</i>
        </small>
      </div>
      <p style={{ fontSize: "10px", marginLeft: "10%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      <small>
        <i>100 Hearts</i>
      </small>
      <BsHeartFill
        className="float-right mb-1 mr-2"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default FeedCommentItem;
