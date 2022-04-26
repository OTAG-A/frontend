class User {
  name = "";
  email = "";
  creationDate = Date();
  messagesNum = 0;
  image = "";
  isAdmin = false;

  static from(json) {
    return Object.assign(new User(), json);
  }

  static preview() {
    return User.from({
      name: "Test user",
      email: "test@test.com",
      creationDate: Date.now(),
      messagesNum: 500,
      image:
        "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg",
      isAdmin: true,
    });
  }
}

export default User;
