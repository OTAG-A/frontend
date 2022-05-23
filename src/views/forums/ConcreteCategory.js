import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Pagination } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PostList from "./components/PostList";

import { Post, User } from "../../models";
import {
  postListByCategory,
  getUserDetails,
  getNumberForumsByCategory,
} from "../../api/Api";

function ConcreteCategory() {
  const navigate = useNavigate();

  // const posts = [...Array(10)].map(() => Post.preview());
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  const postsPerPage = 7;

  const loc = useLocation();

  const getNumPages = () => {
    if (postsPerPage === 0) {
      return 1;
    }
    let pages = Math.ceil(totalPosts / postsPerPage);
    if (pages <= 0) {
      return 1;
    }
    return pages;
  };
  // Obtenemos la pagina de los parametros de url
  const paginaParam =
    parseInt(new URLSearchParams(loc.search).get("pagina")) || 1;
  const pagina = Math.max(1, Math.min(getNumPages(), paginaParam));

  let { category } = useParams();

  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    const pag = pagina || 1;
    console.log(pag, postsPerPage);

    postListByCategory({
      starts: (pag - 1) * postsPerPage,
      rows: postsPerPage,
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

    getNumberForumsByCategory({
      category: category,
    })
      .then((result) => {
        setTotalPosts(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category, totalPosts, pagina, postsPerPage]);

  const gotoPage = (page) => {
    navigate({
      pathname: "/foro/" + category,
      search: "?pagina=" + page,
    });
  };

  return (
    <div className="row">
      {alertMsg !== "" && <div className="alert alert-danger">{alertMsg}</div>}
      <PostList posts={posts} />

      <div className="row">
        <Pagination className="justify-content-end">
          <Pagination.First onClick={() => gotoPage(1)} />
          {pagina - 3 > 0 && <Pagination.Ellipsis />}

          {pagina - 2 > 0 && (
            <Pagination.Item onClick={() => gotoPage(pagina - 2)}>
              {pagina - 2}
            </Pagination.Item>
          )}
          {pagina - 1 > 0 && (
            <Pagination.Item onClick={() => gotoPage(pagina - 1)}>
              {pagina - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{pagina}</Pagination.Item>
          {pagina + 1 <= getNumPages() && (
            <Pagination.Item onClick={() => gotoPage(pagina + 1)}>
              {pagina + 1}
            </Pagination.Item>
          )}
          {pagina + 2 <= getNumPages() && (
            <Pagination.Item onClick={() => gotoPage(pagina + 2)}>
              {pagina + 2}
            </Pagination.Item>
          )}

          {pagina + 3 <= getNumPages() && <Pagination.Ellipsis />}

          <Pagination.Last onClick={() => gotoPage(getNumPages())} />
        </Pagination>
      </div>
    </div>
  );
}

export default ConcreteCategory;
