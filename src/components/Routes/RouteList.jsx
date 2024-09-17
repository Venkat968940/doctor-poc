import Appointment from "../../app/Pages/Appointment/Appointment";
import DoctorProfile from "../../app/Pages/Appointment/DoctorProfile";
import Dashboard from "../../app/Pages/Dashboard/Dashboard";
import MyAppointment from "../../app/Pages/MyAppointments/MyAppointment";
import { DefineAbilityFor } from "../Hooks/Casl/DefineAbility";
import { useMenu } from "../Hooks/UserContext/UserContext";
import AccessDenied from "../Utils/NoAccess/NoAccess";

export const RouteData = () =>{
    const { role } = useMenu()
    const ability = DefineAbilityFor(role)
    // console.log(ability)
    const RouteList = [
        {
            title:"Dashboard",
            path:'dashboard',
            element : Dashboard,
            ability: true,
        },
        {
            title:"Book Appointment",
            path:'book-appointment',
            element: ability.can('visit', 'member') ? Appointment : AccessDenied,
            ability : ability.can('visit', 'member'),
        },
        {
            title:"My Appointment",
            path:'my-appointments',
            element: ability.can('visit', 'member') ? MyAppointment : AccessDenied,
            ability : ability.can('visit', 'member'),
        },

    ]
    return RouteList
}