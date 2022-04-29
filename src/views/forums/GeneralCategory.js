import React from "react";
import { Post } from "../../models";
import PostList from "./components/PostList";

function GeneralCategory() {
  // TODO: replace with real data
  const posts = [...Array(10)].map(() => Post.preview());
  // TODO: replace with real data
  const categories = ["gatos", "perros", "canarios", "cocodrilos"];
  // TODO: replace with real data
  const popular_posts = posts.slice(0, 4);

  return (
    <div className="row">

      <div className="col-md-9">
        <PostList posts={posts} />
      </div>

      <div className="col-md-3">

        <div className="categories card p-3 mb-5">
          <h2>Categorias</h2>
          <input type={"text"} id="category" className="mb-3" placeholder="Filtrar categorias" />
          <ul>
            {categories.map((category, i) => <li key={i}><a href={"/foro/" + category}>{category}</a></li>)}
          </ul>
        </div>

        <div className="most-popular card p-3">
          <h2>Más populares</h2>
          <ul>
            {popular_posts.map((post, i) => <li key={i}><a href={post.get_url()}>{post.title}</a></li>)}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default GeneralCategory;
