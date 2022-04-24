import React from "react";

import { User } from "../models";

// UserContext stores the current logged user or None if not logged.
export var UserContext = React.createContext();

function UserProvider({ children }) {
  return <UserContext.Provider value={User.preview()}>{children}</UserContext.Provider>;
}

export default UserProvider;
