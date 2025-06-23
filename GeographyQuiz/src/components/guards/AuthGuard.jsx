import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";



export default function AuthGuard(){

   const { isAuthenticated} = useContext(UserContext);

    if(!isAuthenticated){
        return <Navigate to="/login"></Navigate>
    }

    return( 
        <Outlet></Outlet>
    )
}