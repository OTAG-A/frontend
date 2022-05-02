import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

import Post from "../../models/Post";
import PostComponent from "./components/PostComponent";
import CommentComponent from "./components/CommentComponent";

function Thread() {
  const [post, setPost] = useState(null);
  // const threadId = useParams("threadId");

  useEffect(() => {
    // TODO: get post given id
    setPost(Post.preview());
  }, []);

  function autoResize(event) {
    console.debug(event);
    const elem = event.target;
    elem.style.height = "";
    elem.style.height = elem.scrollHeight + 3 + "px";
  }

  function resetSize(event) {
    const elem = event.target;
    elem.style.height = "";
  }

  if (post !== null) {
    return (
      <div>
        <PostComponent post={post} compact={false} />
        <h2 className="mt-5 mb-3">Respuestas</h2>
        <div className="col m-auto">
          {post.comments.map((comment, i) => (
            <CommentComponent comment={comment} key={i} />
          ))}
          <div className="comment p-2 card mb-3">
            <div className="row">
              <div className="col">
                <textarea
                  className="w-100 mx-1 border-0 overflow-hidden"
                  placeholder="Escribe aquí tu respuesta"
                  rows={4}
                  onFocus={autoResize}
                  onBlur={resetSize}
                  onInput={autoResize}
                />
              </div>
            </div>
            <div className="row">
              <div className="col text-end">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}

export default Thread;