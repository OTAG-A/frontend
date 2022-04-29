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

  if (post !== null) {
    return (
      <div>
        <PostComponent post={post} compact={false} />
        <h2 className="mt-5 mb-3">Respuestas</h2>
        <div className="col m-auto">
          {post.comments.map((comment, i) => (
            <CommentComponent comment={comment} key={i} />
          ))}
        </div>
      </div>
    );
  }

  return <></>;
}

export default Thread;
