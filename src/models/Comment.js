import { default as User } from "./User";

class Comment {
  id = "";
  user_id = "";
  reply = "";
  reply_date = "";

  user = new User();

  static from(json) {
    return Object.assign(new Comment(), json);
  }

  static preview() {
    return Comment.from({
      user_id: "6286c608be23981510abb356",
      reply: "reply1",
      id: "6286c608be23981510abb356",
      reply_date: "2022-05-17T09:00:02.265Z",
    });
  }
}

export default Comment;
