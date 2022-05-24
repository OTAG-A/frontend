import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Post, User } from "../../models";
import PostList from "./components/PostList";
import { openPopupCreatePost } from "./components/PopupCreatePost";
import { UserContext } from "../../environment";

import {
  postList,
  newPost,
  getUserDetails,
  getSpecies,
  getNumberForums,
} from "../../api/Api";

function GeneralCategory() {
  const navigate = useNavigate();
  let { user: currentUser } = useContext(UserContext);

  // const posts = [...Array(10)].map(() => Post.preview());
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  const [alertMsg, setAlertMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [categories, setCategories] = useState(["General"]);
  const [categoriesFilter, setCategoriesFilter] = useState("");
  // TODO: replace with real data
  const popular_posts = posts.slice(0, 4);

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

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    let firstLetter = str.charAt(0);
    return firstLetter.toUpperCase() + lower.slice(1);
  };

  useEffect(() => {
    if (successMsg) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const pag = pagina || 1;
    console.log(pag, postsPerPage);
    postList({
      starts: (pag - 1) * postsPerPage,
      rows: postsPerPage,
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

    getSpecies()
      .then((result) => {
        let response_categories = result.data.map((specie) =>
          capitalize(specie._id)
        );
        response_categories = response_categories.concat("General");
        console.log(response_categories);
        setCategories(response_categories);
      })
      .then((error) => {});

    getNumberForums()
      .then((result) => {
        setTotalPosts(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [successMsg, totalPosts, pagina, postsPerPage]);

  const gotoPage = (page) => {
    navigate({
      pathname: "/foro",
      search: "?pagina=" + page,
    });
  };

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

      <div className="col-md-3">
        {currentUser && (
          <div className="row px-3 mb-4">
            <button
              onClick={() =>
                openPopupCreatePost({
                  onSubmit: handleNewPost,
                  categories: categories,
                })
              }
              className="btn btn-primary py-2"
            >
              Crear hilo
            </button>
          </div>
        )}

        <div className="categories card p-3 mb-4">
          <h2>Categorias</h2>
          <input
            type={"text"}
            id="category"
            className="mb-3"
            placeholder="Filtrar categorias"
            value={categoriesFilter}
            onChange={(e) => setCategoriesFilter(e.target.value)}
          />
          <ul>
            {categories
              .filter(
                (f) =>
                  categoriesFilter === "" ||
                  f.toLowerCase().includes(categoriesFilter)
              )
              .map((category, i) => (
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

export default GeneralCategory;
