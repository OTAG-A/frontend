class User {
  id = 0;
  name = "";
  bio = "";
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
      id: 0,
      name: "Test user",
      email: "test@test.com",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      creationDate: new Date(),
      messagesNum: 500,
      image:
        "https://i.imgur.com/qJ4UV1i.png",
      isAdmin: true,
    });
  }
}

export default User;
