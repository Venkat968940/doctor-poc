import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

export const MainLayoutTheme = makeStyles((theme) => ({
  root: root,
  gridLayout : gridLayout
}));

export const AppointmentTheme = makeStyles(()=>({
  root: boxLayout,
  gridRoot : gridContainer,
  profileRoot : profileCard,
  gridBtw : gridStyle
}))


export const PaginationTheme = makeStyles(()=>({
  root: paginationRoot
}))

export const LoginTheme = makeStyles(()=>({
  root: loginRoot,
  maincard: loginCard
}))

const root = {
  width: "100%",
  height: "100dvh",
};

const gridLayout = {
  width: "100%",
  height: "calc(100% - 50px)",
  display: "flex",
};

const boxLayout ={
  height: "90%",
  marginTop: 1,
  borderRadius: '0.5rem',
  border: "1px solid #ccc",
  display: "flex",
  flexDirection: "column",
} 

const gridContainer = {
  height: "fit-content",
  maxHeight: "92%",
  overflowY: "auto",
}

const profileCard = {
  margin: '0.5rem',
  padding: '1rem',
  background: "white",
  borderRadius: '0.5rem',
  boxShadow: "0 10px 20px -3px rgb(0 0 0 / 0.1), 0 4px 5px -4px rgb(0 0 0 / 0.1);",
  "&:hover": {
    boxShadow: "0 10px 10px -3px rgb(59 130 246 / 0.5), 0 2px 5px -4px rgb(59 130 246 / 0.5);",
  },
}

const gridStyle={
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

const paginationRoot={
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: '1rem',
  marginTop: "auto",
}

const loginRoot={
  display: "flex",
  width: "100%",
  height: "100dvh",
  justifyContent: "center",
  alignItems: "center",
  background: "#F6F6F6",
}

const loginCard = {
  backdropFilter: "blur(16px) saturate(180%)",
  backgroundColor: "rgba(255, 255, 255, 0.75);",
  border: "1px solid rgba(209, 213, 219, 0.3)",
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow:
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
}