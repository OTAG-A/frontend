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

import { Link } from "react-router-dom";

function Thread() {
  const { user: currentUser } = useContext(UserContext);

  const [post, setPost] = useState(null);
  const { idThread } = useParams();

  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const [alertMsg, setAlertMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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
    if (successMsg) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    fetchPostDetails();
  }, [successMsg]); // eslint-disable-line react-hooks/exhaustive-deps

  const onPostDelete = (post) => {
    console.log("delete admin thread post with id " + post.id);
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
    console.log("delete admin thread comment with id " + comment.id);
    deleteComment({
      id_comment: comment.id,
      id_forum: post.id,
      id_user: comment.user.id,
    })
      .then((response) => {
        console.log(response);
        setAlertMsg("");
        setSuccessMsg("Respuesta eliminada con éxito");

        setTimeout(() => {
          setSuccessMsg("");
        }, 3000); // 3 seconds
      })
      .catch((error) => {
        console.log(error);
        setAlertMsg("No se pudo eliminar la respuesta");
        setSuccessMsg("");

        setTimeout(() => {
          setAlertMsg("");
        }, 3000); // 3 seconds
        return;
      });
  };

  const onPostDeleteUser = (post) => {
    console.log("delete user thread post with id " + post.id);
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
    console.log("delete user thread comment with id " + comment.id);
    deleteCommentUser({
      id_comment: comment.id,
      id_forum: post.id,
    })
      .then((response) => {
        console.log(response);
        setAlertMsg("");
        setSuccessMsg("Respuesta eliminada con éxito");

        setTimeout(() => {
          setSuccessMsg("");
        }, 3000); // 3 seconds
      })
      .catch((error) => {
        console.log(error);
        setAlertMsg("No se pudo eliminar la respuesta");
        setSuccessMsg("");

        setTimeout(() => {
          setAlertMsg("");
        }, 3000); // 3 seconds
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
        {alertMsg !== "" && (
          <div className="alert alert-danger">{alertMsg}</div>
        )}
        {successMsg !== "" && (
          <div className="alert alert-success">{successMsg}</div>
        )}
        <PostComponent
          post={post}
          compact={false}
          onDelete={currentUser && currentUser.isAdmin ? onPostDelete : null}
          onDeleteUser={
            currentUser && currentUser.id === post.user_id
              ? onPostDeleteUser
              : null
          }
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
              onDeleteUser={
                currentUser && currentUser.id === comment.user_id
                  ? onCommentDeleteUser
                  : null
              }
            />
          ))}

          {currentUser && (
            <Form
              className="comment p-2 card mb-5"
              onSubmit={handlePostComment}
            >
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
                <div className="col text-end ">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </Form>
          )}

          {!currentUser && (
            <div className="row align-items-center mb-5">
              <div className="container">
                <p
                  className="text-center my-2"
                  style={{ backgroundColor: "orange", color: "black" }}
                >
                  Para poder publicar un post o una respuesta es necesario{" "}
                  <b>
                    estar{" "}
                    <Link to="/registro" style={{ color: "black" }}>
                      registrado
                    </Link>
                  </b>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <></>;
}

export default Thread;
