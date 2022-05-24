export const baseUrl = "http://localhost:8080/api";

function serverRequest(path, requestOptions, tokenOverride = null) {
  let token = null;
  if (tokenOverride) {
    token = tokenOverride;
  } else {
    token = localStorage.getItem("token");
  }

  // Añadimos el token de sesión a la petición si estamos loggeados
  if (token) {
    if (!tokenOverride) token = JSON.parse(token);
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

function getRequest(path, body = {}, tokenOverride = null) {
  let params = new URLSearchParams();
  for (let [key, value] of Object.entries(body)) {
    if (value) params.append(key, value);
  }

  let requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return serverRequest(path + "?" + params, requestOptions, tokenOverride);
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
  return putRequest("/users/bio", arguments[0]);
}

export async function updatePassword({
  password = null,
  newPassword = null,
  repeatedNewPassword = null,
}) {
  return putRequest("/users/password", arguments[0]);
}

export async function updateUsername({ newUsername = null }) {
  return putRequest("/users/username", arguments[0]);
}

export async function postList({ starts = null, rows = null }) {
  return getRequest("/forum/list", arguments[0]);
}

export async function postListByCategory({
  starts = null,
  rows = null,
  category = null,
}) {
  return getRequest("/forum/category", arguments[0]);
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
  return getRequest("/forum/numberofforums");
}

export async function getNumberForumsByCategory({ category = null }) {
  return getRequest("/forum/numberofforumscategory", arguments[0]);
}

export async function getNumberReplies() {
  return getRequest("/forum/admin/numberofreplies");
}

export async function getBestCategory() {
  return getRequest("/forum/admin/bestcategory");
}

export async function updateAvatar({ imgFile = null }) {
  let path = "/users/avatar";

  let data = new FormData();
  data.append("avatar", imgFile);

  let requestOptions = {
    method: "PUT",
    headers: {},
    body: data,
  };
  return serverRequest(path, requestOptions);
}

export async function getSpecies() {
  return getRequest("/species");
}

// export async function getAvatar({ avatarId = null }) {
//   return getRequest("/users/avatar/" + avatarId);
// }

export function toImageUrl(avatarId) {
  return baseUrl + "/users/avatar/" + avatarId;
}

export function getInfoUser(token) {
  return getRequest("/users/info/me", {}, token);
}
