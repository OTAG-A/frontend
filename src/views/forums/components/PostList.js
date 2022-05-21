import React, { useContext } from "react";
import { UserContext } from "../../../environment";
import PostComponent from "./PostComponent";
import { deleteForum } from "../../../api/Api";

function PostList({ posts, thread = false }) {
  let { user: currentUser } = useContext(UserContext);

  const onPostDelete = (post) => {
    console.log("delete post with id " + post.id);
    deleteForum({
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
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
