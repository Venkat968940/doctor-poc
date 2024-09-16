import { Navigate } from "react-router-dom";

export const Auth = ({children}) =>{
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/sign-in"/>
}

export const IsLoggedIn = ({children}) =>{
    const token = localStorage.getItem('token');
    return token ? <Navigate to="/"/> : children 
}