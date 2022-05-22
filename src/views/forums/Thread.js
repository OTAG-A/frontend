import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Form, FloatingLabel } from "react-bootstrap";

import { Post, User } from "../../models";
import PostComponent from "./components/PostComponent";
import CommentComponent from "./components/CommentComponent";
import { UserContext } from "../../environment";
import {
  deleteComment,
  deleteCommentUser,
  deleteForum,
  deleteForumUser,
} from "../../api/Api";

import { postDetails, newComment, getUserDetails } from "../../api/Api";
import { useNavigate } from "react-router-dom";

function Thread() {
  const { user: currentUser } = useContext(UserContext);

  const [post, setPost] = useState(null);
  const { idThread } = useParams();

  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const fetchPostDetails = () => {
    postDetails({
      id_forum: idThread,
    })
      .then((result) => {
        let post = Post.from(result.data);
        getUserDetails({ id: post.user_id })
          .then((result) => {
            post.user = User.from(result);
          })
          .catch((error) => {
            console.error(error);
          });

        console.log(post.replies);

        Promise.all(
          post.replies.map((reply_data) =>
            getUserDetails({ id: reply_data.user_id })
          )
        ).then((all) => {
          let updatedPost = structuredClone(post);
          let users = all.map(User.from);

          for (let i = 0; i < updatedPost.replies.length; i++) {
            updatedPost.replies[i].user = users[i];
          }
          setPost(updatedPost);
        });

        console.log(post);

        setPost(post);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPostDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const onCommentDelete = (comment) => {
    console.log("delete comment with id " + comment.id);
    deleteComment({
      id_comment: comment.id,
      id_forum: post.id,
      id_user: comment.user.id,
    })
      .then((response) => {
        console.log(response);
        //TODO:reload o set comments de nuevo para que se quite el eliminado
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
        navigate("/foro/" + post.category);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const onCommentDeleteUser = (comment) => {
    console.log("delete comment with id " + comment.id);
    deleteCommentUser({
      id_comment: comment.id,
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
        //TODO:reload o set comments de nuevo para que se quite el eliminado
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  const handlePostComment = () => {
    newComment({
      id_forum: idThread,
      comment: comment,
    })
      .then((result) => {
        // Update post details
        fetchPostDetails();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (post !== null) {
    return (
      <div>
        <PostComponent
          post={post}
          compact={false}
          onDelete={currentUser && currentUser.isAdmin ? onPostDelete : null}
        />

        <h2 className="mt-5 mb-3">Respuestas</h2>
        <div className="col m-auto">
          {post.replies.map((comment, i) => (
            <CommentComponent
              comment={comment}
              key={i}
              onDelete={
                currentUser && currentUser.isAdmin ? onCommentDelete : null
              }
            />
          ))}

          <Form className="comment p-2 card mb-3" onSubmit={handlePostComment}>
            <div className="row">
              <div className="col">
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingTextarea2"
                  label="Escribe aquí tu comentario"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Escribe aquí tu comentario"
                    style={{ height: "200px" }}
                    value={comment}
                    onInput={(e) => setComment(e.target.value)}
                  />
                </FloatingLabel>
              </div>
            </div>
            <div className="row">
              <div className="col text-end">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  return <></>;
}

export default Thread;
