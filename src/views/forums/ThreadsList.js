import React from "react";
import { Post } from "../../models";
import PostComponent from "./components/PostComponent";

function ThreadsList() {
  // TODO: replace with real data
  const posts = [...Array(10)].map(() => Post.preview());

  return (
    <div>
      {posts.map((post, i) => <PostComponent post={post} compact={true} key={i} />)}
    </div>
  );
}

export default ThreadsList;
