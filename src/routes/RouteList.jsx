import { Dashboard } from "@mui/icons-material";
import { defineAbilityFor } from "../hooks/defineAbility"
import { useMenu } from "../hooks/userContext"

export const RouteList = () =>{
const { role } = useMenu()
const ability = defineAbilityFor(role)

    const routesData = [
        {
            path:'/',
            title: 'Dashboard',
            icon : Dashboard,
            ability : ability,
        },
        {
            path:'/admin',
            title : 'Admin',
            icon : ""
        }
    ]
    return routesData
}