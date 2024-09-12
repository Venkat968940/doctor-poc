import {
  AppBar,
  Avatar,
  Backdrop,
  Button,
  Grid2,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../../hooks/userContext";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setRole } = useMenu();
  return (
    <AppBar sx={{ boxShadow: "0 1px 2px 0 rgb(21 94 117 / 0.25);" }}>
      <Toolbar variant="dense">
        <Grid2 className="flex w-full justify-between items-center">
          <Grid2>
            <Link to="/">Company Logo</Link>
          </Grid2>
          <Grid2 className="flex items-center gap-2">
            <Button variant="" onClick={() => setRole("admin")}>Admin</Button>
            <Button variant="" onClick={() => setRole("member")}>Member</Button>
            <Avatar sx={{ width: 35, height: 35 }}>C</Avatar>
          </Grid2>
        </Grid2>
      </Toolbar>
      <Backdrop open={open}></Backdrop>
    </AppBar>
  );
};

export default Header;
