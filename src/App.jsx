import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./components/Routes/Routes";
import { ThemeSetup } from "./components/Theme/Theme";
import { CustomizedSnackbar } from "./components/Hooks/Snackbar/Snackbar";
import { UserProvider } from "./components/Hooks/UserContext/UserContext";

const App = () => (
  <ThemeSetup>
    <CustomizedSnackbar />
    <UserProvider>
      <Router><AppRoutes /></Router>
    </UserProvider>
  </ThemeSetup>
);

export default App;
