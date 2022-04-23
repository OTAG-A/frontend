import React from "react";

import { User } from "../models";

// UserContext stores the current logged user or None if not logged.
export var UserContext = React.createContext();

const user = User.from({
  name: "Test user",
  email: "test@test.com",
  creationDate: Date.now(),
  messagesNum: 500,
  image:
    "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg",
  isAdmin: true,
});

function UserProvider({ children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
