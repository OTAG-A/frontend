import React, { useContext } from "react";
import { UserContext } from "../../../environment";
import PostComponent from "./PostComponent";
import { deleteForum, deleteForumUser } from "../../../api/Api";
import { useNavigate } from "react-router-dom";

function PostList({ posts, thread = false }) {
  let { user: currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const onPostDelete = (post) => {
    console.log("delete post with id " + post.id);
    deleteForum({
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
        navigate("/foro/" + post.category);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const onPostDeleteUser = (post) => {
    console.log("delete post with id " + post.id);
    deleteForumUser({
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
        //TODO:reload o set comments de nuevo para que se quite el eliminado
        navigate("/foro/" + post.category);
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
