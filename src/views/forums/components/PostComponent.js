import React from "react";

import { Link } from "react-router-dom";

import UserComponent from "./UserComponent";

import DeleteCornerButton from "../../components/DeleteCornerButton";
import { openQuestionPopup } from "../../components/PopupQuestion";
import moment from "moment";

// truncate returns the string truncated to a given length. If string would
// continue after the truncation, hyphens are added at the end.
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

const postDelete = (post, action) => {
  openQuestionPopup("¿Quieres eliminar el post `" + post.title + "`?", () => {
    action(post);
  });
};

// PostComponent describes either a thread post or the original post inside the
// thread.
function PostComponent({
  post,
  compact = true,
  onDelete = null,
  onDeleteUser = null,
}) {
  return (
    <div className="post p-2 card mb-3">
      {(onDelete || onDeleteUser) && (
        <DeleteCornerButton
          action={() => postDelete(post, onDelete || onDeleteUser)}
        />
      )}

      <div className="row">
        {compact ? (
          <h2>
            <Link to={post.get_url()} className="link-unstyled">
              {post.title}
            </Link>
          </h2>
        ) : (
          <h1>{post.title}</h1>
        )}
        <p className="text-secondary">
          Publicado el: {moment(post.createdAt).format("DD-MM-YYYY HH:mm")}
        </p>
      </div>

      <div className="row">
        <UserComponent user={post.user} />
        {compact ? (
          <>
            <p className="col-sm-8 ml-5">
              {truncate(post.user_explanation, 300)}
            </p>
            <Link to={post.get_url()} className="col-sm-2 mt-auto text-end">
              Leer más
            </Link>
          </>
        ) : (
          <>
            <p className="col-sm-10 ml-5">{post.user_explanation}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default PostComponent;
