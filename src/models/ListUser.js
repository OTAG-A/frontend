class ListUser {
  avatar = "";
  id = "";
  role = "";
  username = "";

  get isAdmin() {
    return this.role === "admin";
  }

  static from(json) {
    return Object.assign(new ListUser(), json);
  }

  static preview() {
    return ListUser.from({
      avatar:
        "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg",
      id: "627e5523c791d10def31fa65",
      role: "user",
      username: "Pepe",
    });
  }
}

export default ListUser;
