import React from "react";
import PostComponent from "./PostComponent";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, i) => (
        <PostComponent post={post} compact={true} key={i} />
      ))}
    </div>
  );
}

export default PostList;
