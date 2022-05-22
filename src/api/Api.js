const baseUrl = "http://localhost:8080/api";

function serverRequest(path, requestOptions) {
  let token = localStorage.getItem("token");
  // Añadimos el token de sesión a la petición si estamos loggeados
  if (token) {
    token = JSON.parse(token);
    if (token) requestOptions.headers["Authorization"] = "Bearer " + token;
  }

  return fetch(baseUrl + path, requestOptions).then(async (response) => {
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  });
}

function postRequest(path, body) {
  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return serverRequest(path, requestOptions);
}

function putRequest(path, body) {
  let requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return serverRequest(path, requestOptions);
}

function getRequest(path, body = {}) {
  let params = new URLSearchParams();
  for (let [key, value] of Object.entries(body)) {
    if (value) params.append(key, value);
  }

  let requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return serverRequest(path + "?" + params, requestOptions);
}

export async function registerUser({
  username,
  email,
  password,
  repeatedPassword,
}) {
  return postRequest("/users", arguments[0]);
}

export async function loginUser({ email, password }) {
  return postRequest("/users/login", arguments[0]);
}

export async function logoutUser() {
  return getRequest("/users/logout");
}

// TODO: no me dicen si algo esta o no listo
// export async function updateUser({ bio, avatar }) {
//   return putRequest("/users", arguments[0]);
// }

export async function getAnimals({
  starts = null,
  rows = null,
  specie = null,
  breed = null,
}) {
  return getRequest("/pets", arguments[0]);
}

export async function getStatistics() {
  return getRequest("/statistics");
}

export async function getAnimalPublicDetails({ id = null }) {
  return getRequest("/pet/public", arguments[0]);
}

export async function getAnimalPrivateDetails({ id = null }) {
  return getRequest("/pet", arguments[0]);
}

export async function updateBio({ bio = null }) {
  return putRequest("/users/biography", arguments[0]);
}

export async function updatePassword({ password = null, newPassword = null, repeatedNewPassword = null }) {
  return putRequest("/users/password", arguments[0]);
}

export async function updateUsername({ newUsername = null }) {
  return putRequest("/users/username", arguments[0]);
}

export async function postList() {
  return getRequest("/forum/list");
}

export async function postDetails({ id_forum = null }) {
  return getRequest("/forum", arguments[0]);
}

export async function newPost({
  title = null,
  user_explanation = null,
  category = null,
}) {
  return postRequest("/forum/new", arguments[0]);
}

export async function newComment({ id_forum = null, comment = null }) {
  return postRequest("/forum/reply", arguments[0]);
}

export async function getUsers() {
  return getRequest("/users");
}

export async function getUserDetails({ id = null }) {
  return getRequest("/users/" + id);
}

export async function getNumberForums() {
  return getRequest("/forum/admin/numberofforums");
}

export async function getNumberReplies() {
  return getRequest("/forum/admin/numberofreplies");
}

export async function getBestCategory() {
  return getRequest("/forum/admin/bestcategory");
}
