import { useState } from "react";
import Cookies from "js-cookie";

export default function useToken(defaultValue = null) {
  const [token, setToken] = useState(() => Cookies.get("auth-token") || defaultValue);

  const setPersistedToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      Cookies.set("auth-token", newToken, { expires: 7 });
    } else {
      Cookies.remove("auth-token");
    }
  };

  return [token, setPersistedToken];
}
