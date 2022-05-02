import React from "react";
import PostComponent from "./PostComponent";

function PostList({ posts, thread = false }) {
  return (
    <div>
      {posts.map((post, i) => (
        <PostComponent post={post} compact={!thread} key={i} />
      ))}
    </div>
  );
}

export default PostList;
