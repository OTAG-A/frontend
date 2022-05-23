import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Post, User } from "../../models";
import PostList from "./components/PostList";
import { openPopupCreatePost } from "./components/PopupCreatePost";

import { postList, newPost, getUserDetails } from "../../api/Api";

function GeneralCategory() {
  // const posts = [...Array(10)].map(() => Post.preview());
  const [posts, setPosts] = useState([]);

  const [alertMsg, setAlertMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // TODO: replace with real data
  const categories = ["gatos", "perros", "canarios", "cocodrilos"];
  // TODO: replace with real data
  const popular_posts = posts.slice(0, 4);

  useEffect(() => {
    if (successMsg) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    postList()
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
          console.log(updatedPosts);
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
  }, [successMsg]);

  const handleNewPost = (fields) => {
    newPost(fields)
      .then((result) => {
        setAlertMsg("");
        setSuccessMsg("Post publicado con éxito");

        setTimeout(() => {
          setSuccessMsg("");
        }, 3000); // 3 seconds
        console.log(result);
      })
      .catch((error) => {
        setAlertMsg("No se pudo publicar el post");
        setSuccessMsg("");

        setTimeout(() => {
          setAlertMsg("");
        }, 3000); // 3 seconds
        console.error(error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-9 ">
        {alertMsg !== "" && (
          <div className="alert alert-danger">{alertMsg}</div>
        )}
        {successMsg !== "" && (
          <div className="alert alert-success">{successMsg}</div>
        )}
        <PostList
          posts={posts}
          onDelete={() => {
            setSuccessMsg("Eliminado con éxito");
            setTimeout(() => {
              setSuccessMsg("");
            }, 2000); // 2 seconds
          }}
        />
      </div>

      <div className="col-md-3">
        <div className="row px-3 mb-4">
          <button
            onClick={() => openPopupCreatePost(handleNewPost)}
            className="btn btn-primary py-2"
          >
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

        <div className="most-popular card p-3 mb-5">
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
