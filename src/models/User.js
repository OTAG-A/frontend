class User {
  name;
  email;
  creationDate;
  messagesNum = 0;
  image;
  isAdmin = false;

  static from(json) {
    return Object.assign(new User(), json);
  }
}

export default User;
