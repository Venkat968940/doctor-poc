import { Navigate, useRoutes } from "react-router-dom";
import { RouteData } from "./RouteList";
import MainLayout from "../../app/Layout/mainLayout";
import PageNotFound from "../Utils/NoAccess/PageNotFound";
import Login from "../../app/Pages/Login/Login";
import Register from "../../app/Pages/Login/Register";
import { Auth, IsLoggedIn } from "./Auth";

export const AppRoutes = () => {
  const routeConfig = RouteData()
    const routes = [
      {path : '/', element : <Navigate to="/dashboard" replace/>},
      {
        path: '/',
        element: <Auth><MainLayout /></Auth>, 
        children: routeConfig.map(val=>({
          path : val.path, element : <val.element/>
        }))
      },
      {path:'/sign-in', element : <IsLoggedIn><Login /></IsLoggedIn>},
      {path:'/sign-up', element : <Register />},
      // Catch-all route for unknown paths (Optional)
      { path: '*', element: PageNotFound }
    ];
  
    const element = useRoutes(routes);
    return element;
  };