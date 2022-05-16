import React, { useState } from "react";

import { useLocalStorage } from "../extensions/localStorage";

// UserContext stores the current logged user or None if not logged.
export var UserContext = React.createContext({
  user: null,
  setUser: (_) => { },
});

function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
