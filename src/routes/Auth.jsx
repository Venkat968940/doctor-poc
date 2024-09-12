import { Navigate } from "react-router-dom"

export const IsLoggedIn = ({children}) =>{
const token = localStorage.getItem('token')
    return token ? <Navigate to="/"/> : children
}

export const ProtectRoute = ({children}) =>{
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to="/login"/>
}