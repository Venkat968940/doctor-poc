import { Navigate } from "react-router-dom";
import { useMenu } from "../Hooks/UserContext/UserContext";

export const Auth = ({children}) =>{
    const {role} = useMenu()
    console.log(role)
    const token = localStorage.getItem('token');
    return token && role ? children : <Navigate to="/sign-in"/>
}

export const IsLoggedIn = ({children}) =>{
    const {role} = useMenu()
    console.log(role)
    const token = localStorage.getItem('token');
    return token && role ? <Navigate to="/"/> : children 
}