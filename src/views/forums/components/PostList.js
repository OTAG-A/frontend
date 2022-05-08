import React, { useContext } from "react";
import { UserContext } from "../../../environment";
import PostComponent from "./PostComponent";

function PostList({ posts, thread = false }) {
  let { user: currentUser } = useContext(UserContext);

  const onPostDelete = (post) => {
    console.log("delete post with id " + post.id);
  };

  return (
    <div>
      {posts.map((post, i) => (
        <PostComponent
          post={post}
          compact={!thread}
          key={i}
          onDelete={currentUser && currentUser.isAdmin ? onPostDelete : null}
        />
      ))}
    </div>
  );
}

export default PostList;
