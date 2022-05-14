const baseUrl = "http://localhost:8080/api";

function serverRequest(path, requestOptions) {
  return fetch(baseUrl + path, requestOptions)
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      }
      throw await response.json();
    });
}

function postRequest(path, body) {
  let requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return serverRequest(path, requestOptions);
}

function getRequest(path, body) {
  let requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  return serverRequest(path, requestOptions);
}

export async function registerUser({ username, email, password, repeatedPassword }) {
  return postRequest("/users", arguments[0]);
}

export async function loginUser({ email, password }) {
  return getRequest("/users/login", arguments[0]);
}
