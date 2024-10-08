import moment from "moment";
import { Navigate } from "react-router-dom";
import { useMenu } from "../Hooks/UserContext/UserContext";

export const Auth = ({ children }) => {
  const { role } = useMenu();
  const token = localStorage.getItem("accessToken");
//   let base64Url = token?.split(".")[1];
//   const decoded = JSON.parse(window?.atob(base64Url));
//   const expires_in = moment(new Date(decoded?.exp * 1000)).format("LT");
//   console.log(expires_in);

  return token ? children : <Navigate to="/sign-in" />;
};

export const IsLoggedIn = ({ children }) => {
  const { role } = useMenu();
  const token = localStorage.getItem("accessToken");
  return token  ? <Navigate to="/" /> : children;
};
