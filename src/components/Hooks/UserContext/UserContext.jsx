import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext()
export const useMenu = () => useContext(UserContext)
export const UserProvider = ({ children }) =>{
const roleData = localStorage.getItem('role')
const [role, setRole] = useState(roleData || "")
useEffect(()=>{
if(role!==""){
    localStorage.setItem('role', role)
}
},[role])
return(
    <UserContext.Provider value={{role, setRole}}>{children}</UserContext.Provider>
)
}