import React from "react";

import UserComponent from "./UserComponent";

// truncate returns the string truncated to a given length. If string would
// continue after the truncation, hyphens are added at the end.
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

// PostComponent describes either a thread post or the original post inside the
// thread.
function PostComponent({ post, compact = true }) {
  return (
    <div className="post p-2 card mb-3">
      <div className="row mb-3">
        {compact ? (
          <h2>
            <a href={post.get_url()} className="link-unstyled">
              {post.title}
            </a>
          </h2>
        ) : (
          <h1>{post.title}</h1>
        )}
      </div>

      <div className="row">
        <UserComponent user={post.user} />
        <p className="col-sm-10 ml-5">
          {compact ? truncate(post.body, 300) : post.body}
          {compact && (
            <a className="float-end" href={post.get_url()}>
              Leer más
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

export default PostComponent;
