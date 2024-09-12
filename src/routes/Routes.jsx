import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../app/Pages/Dashboard/Dashboard"
import LoginPage from "../app/Pages/Login/LoginPage"
import Layout from "../app/Layout/Layout"
import { Suspense } from "react"
import MainLoader from "../utils/Loader/mainLoader"
import PageNotFound from "../utils/PageNotFound/PageNotFound"
import { IsLoggedIn, ProtectRoute } from "./Auth"
import NoAccess from "../utils/NoAccess/NoAccess"
import { defineAbilityFor } from "../hooks/defineAbility"
import Home from "../app/Pages/Dashboard/Home"
import { useMenu } from "../hooks/userContext"

export const Router = ()=>{
    const {role} = useMenu()
    const ability = defineAbilityFor(role)
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Suspense fallback={<MainLoader isLoading={true}/>}><ProtectRoute><Layout /></ProtectRoute></Suspense>}>
                <Route index  element={<Dashboard />}/>
                <Route path="home" element={ability.can('visit', 'admin') ? <Home /> :<NoAccess />}/>
            </Route>
            <Route path="/login" element={<Suspense fallback={<MainLoader isLoading={true}/>}><IsLoggedIn><LoginPage /></IsLoggedIn></Suspense>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </BrowserRouter>
    )
}