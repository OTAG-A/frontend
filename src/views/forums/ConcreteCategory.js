import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffectOnce } from "usehooks-ts";

import PostList from "./components/PostList";

import { Post, User } from "../../models";
import { postListByCategory, getUserDetails } from "../../api/Api";

function ConcreteCategory() {
  // const posts = [...Array(10)].map(() => Post.preview());
  const [posts, setPosts] = useState([]);

  let { category } = useParams();

  const [alertMsg, setAlertMsg] = useState("");

  useEffectOnce(() => {
    postListByCategory({
      category: category,
    })
      .then((result) => {
        let post_list = result.data.map((post) => Post.from(post));

        Promise.all(
          post_list.map((post_data) =>
            getUserDetails({ id: post_data.user_id })
          )
        ).then((all) => {
          let updatedPosts = structuredClone(post_list);
          updatedPosts = updatedPosts.map((post_data) => Post.from(post_data));
          let users = all.map(User.from);

          for (let i = 0; i < updatedPosts.length; i++) {
            updatedPosts[i].user = users[i];
          }
          setPosts(updatedPosts);
        });

        setPosts(post_list);
        setAlertMsg("");
        console.log(result);
      })
      .catch((error) => {
        setAlertMsg("Error al cargar los posts");
        console.error(error);
      });
  });

  return (
    <div className="row">
      {alertMsg !== "" && (
        <div className="alert alert-danger">{alertMsg}</div>
      )}
      <PostList posts={posts} />
    </div>
  );
}

export default ConcreteCategory;
