import { useEffect, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import Cookies from 'js-cookie';


export default function Logout() {
  const { logoutHandler } = useContext(UserContext);


  useEffect(() => {
    logoutHandler();
    console.log(Cookies.get('auth-token'));
  }, [logoutHandler]);

  return null; 
}
