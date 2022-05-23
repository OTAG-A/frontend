import React from "react";
import DeleteCornerButton from "../../components/DeleteCornerButton";
import { openQuestionPopup } from "../../components/PopupQuestion";

import UserComponent from "./UserComponent";

function CommentComponent({ comment, onDelete = null, onDeleteUser = null }) {
  const comentDelete = (action) => {
    openQuestionPopup(
      "¿Quieres eliminar el comentario de `" + comment.user.username + "`?",
      () => {
        action(comment);
      }
    );
  };

  return (
    <div className="comment p-2 card mb-3">
      {(onDelete || onDeleteUser) && (
        <DeleteCornerButton
          action={() => comentDelete(onDelete || onDeleteUser)}
        />
      )}
      <div className="row">
        <UserComponent user={comment.user} />
        <p className="col-sm-10 ml-5">{comment.reply}</p>
      </div>
    </div>
  );
}

export default CommentComponent;
