import React from "react";

import UserComponent from "./UserComponent";

function CommentComponent({ comment }) {
  return (
    <div className="comment p-2 card mb-3">
      <div className="row">
        <UserComponent user={comment.user} />
        <p className="col-sm-10 ml-5">{comment.body}</p>
      </div>
    </div>
  );
}

export default CommentComponent;
