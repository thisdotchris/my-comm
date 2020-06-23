import React, { Fragment } from "react";
import FeedCommentItem from "./FeedCommentItem";

function FeedComment() {
  return (
    <Fragment>
      {[1].map((i) => {
        return <FeedCommentItem key={i} />;
      })}
    </Fragment>
  );
}

export default FeedComment;
