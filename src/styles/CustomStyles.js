import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

export const MainLayoutTheme = makeStyles((theme) => ({
  root: root,
  gridLayout : gridLayout
}));

const root = {
  width: "100%",
  height: "100dvh",
};

const gridLayout = {
  width: "100%",
  height: "calc(100% - 50px)",
  display: "flex",
};

// const 
