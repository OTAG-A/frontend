import React from "react";
import { useNavigate } from "react-router-dom";

import UserComponent from "./UserComponent";

// truncate returns the string truncated to a given length. If string would
// continue after the truncation, hyphens are added at the end.
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

// PostComponent describes either a thread post, the original post inside the
// thread and the comments.
function PostComponent({ post, compact = true }) {
  const navigate = useNavigate();

  return (
    <div
      className="post p-2 card mb-3"
      onClick={() => navigate("/foro/" + post.id)}
    >
      <div className="row mb-3">
        <h2>{post.title}</h2>
      </div>

      <div className="row">
        <UserComponent user={post.user} />
        <p className="col-8 ml-5">
          {compact ? truncate(post.body, 300) : post.body}
        </p>
      </div>
    </div>
  );
}

export default PostComponent;
