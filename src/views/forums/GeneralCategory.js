import React, { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import { Link } from "react-router-dom";

import { Post } from "../../models";
import PostList from "./components/PostList";
import { openPopupCreatePost } from "./components/PopupCreatePost";

import { postList, newPost } from "../../api/Api";

function GeneralCategory() {
  // TODO: replace with real data
  const [posts, setPosts] = useState([]);
  // const posts = [...Array(10)].map(() => Post.preview());
  // TODO: replace with real data
  const categories = ["gatos", "perros", "canarios", "cocodrilos"];
  // TODO: replace with real data
  const popular_posts = posts.slice(0, 4);

  useEffectOnce(() => {
    postList()
      .then((result) => {
        let post_list = result.data.map((post) => Post.from(post));
        setPosts(post_list);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const handleNewPost = (fields) => {
    newPost(fields)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <PostList posts={posts} />
      </div>

      <div className="col-md-3">
        <div className="row px-3 mb-4">
          <button onClick={() => openPopupCreatePost(handleNewPost)} className="btn btn-primary py-2">
            Crear hilo
          </button>
        </div>

        <div className="categories card p-3 mb-4">
          <h2>Categorias</h2>
          <input
            type={"text"}
            id="category"
            className="mb-3"
            placeholder="Filtrar categorias"
          />
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <Link to={"/foro/" + category}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="most-popular card p-3">
          <h2>Más populares</h2>
          <ul>
            {popular_posts.map((post, i) => (
              <li key={i}>
                <Link to={post.get_url()}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GeneralCategory;
