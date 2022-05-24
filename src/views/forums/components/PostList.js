import React, { useContext } from "react";
import { UserContext } from "../../../environment";
import PostComponent from "./PostComponent";
import { deleteForum, deleteForumUser } from "../../../api/Api";

function PostList({ posts, thread = false, onDelete = () => {} }) {
  let { user: currentUser } = useContext(UserContext);

  const onPostDelete = (post) => {
    console.log("delete admin post with id " + post.id);
    deleteForum({
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
        onDelete();
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const onPostDeleteUser = (post) => {
    console.log("delete user post with id " + post.id);
    deleteForumUser({
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
        onDelete();
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  return (
    <div className="mb-5 pb-5">
      {posts.map((post, i) => (
        <PostComponent
          post={post}
          compact={!thread}
          key={i}
          onDelete={currentUser && currentUser.isAdmin ? onPostDelete : null}
          onDeleteUser={
            currentUser && currentUser.id === post.user_id
              ? onPostDeleteUser
              : null
          }
        />
      ))}
    </div>
  );
}

export default PostList;
