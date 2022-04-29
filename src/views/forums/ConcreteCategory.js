import React from "react";
import { Post } from "../../models";
import PostList from "./components/PostList";

function ConcreteCategory() {
  // TODO: replace with real data
  const posts = [...Array(10)].map(() => Post.preview());

  return (
    <PostList posts={posts} />
  );
}

export default ConcreteCategory;
