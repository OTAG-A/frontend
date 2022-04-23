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

  static placeholderImage() {
    return "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
  }
}

export default User;
