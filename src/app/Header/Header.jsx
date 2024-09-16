import { AccountCircle, Logout, MenuSharp, Person } from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  Grid2,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMenu } from "../../components/Hooks/UserContext/UserContext";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { role } = useMenu()
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const IsMobile = useMediaQuery('(max-width: 600px)')

  function handleLogout() {
    setAnchorEl(null);
    localStorage.clear();
    navigate("/sign-in");
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  const handleMobDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar
      sx={{ boxShadow: "0 1px 2px 0 rgb(21 94 117 / 0.25);", }}
    >
      <Toolbar variant="dense">
        <Grid2 sx={{display:"flex", justifyContent:"space-between", width:"100%"}} alignItems="center">
          <Grid2 sx={{display:"flex", alignItems:"center"}}>
            {IsMobile && <IconButton onClick={handleMobDrawer}><MenuSharp sx={{color:theme.palette.common.white, marginRight:1}}/></IconButton>}
            <Link to="/dashboard" style={{textDecoration:"none", color: theme.palette.common.white}}><Typography variant="h6">Company Name</Typography></Link>
          </Grid2>
          <Grid2 
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
           {!IsMobile && role==='member' && <Link to="/book-appointment" style={{textDecoration:"none", marginRight:1}}><Typography variant="body1" color={theme.palette.common.white}>Book Appointment</Typography></Link>}
            <IconButton
              onClick={handleMenu}
              disableRipple={false}
              sx={{ padding: 0.5, marginLeft:1 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              id="basic-button"
              aria-expanded={open ? "true" : undefined}
            >
              <AccountCircle
                sx={{ color: theme.palette.common.white, fontSize: 30 }}
              />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem
                sx={{ color: theme.palette.error.main }}
                onClick={handleLogout}
              >
                <ListItemIcon sx={{ color: theme.palette.error.main }}>
                  <Logout />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Grid2>
        </Grid2>
      </Toolbar>
      <Drawer open={openDrawer && IsMobile} onClose={handleMobDrawer} sx={{width:240}}>
       <Toolbar />
        <Grid2 sx={{paddingInline:2}}>
        <Link to="/book-appointment" style={{textDecoration:"none",}}><Typography variant="body1" color={theme.palette.primary.main}>Book Appointment</Typography></Link>
        </Grid2>
      </Drawer>
    </AppBar>
  );
};

export default Header;
