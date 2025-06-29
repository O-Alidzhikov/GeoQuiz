import { useState } from "react";

export default function usePersistedUser(defaultValue = null) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user-data");
    return storedUser ? JSON.parse(storedUser) : defaultValue;
  });

  const setPersistedUser = (newUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("user-data", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user-data");
    }
  };

  return [user, setPersistedUser];
}
