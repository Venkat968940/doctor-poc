import React from "react";
import Success from "../../../assets/Gifs/success.gif";
import { Avatar, Box, Button, Divider, Grid2, Typography } from "@mui/material";
import { CalendarMonth, Schedule, Verified } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate()
  return (
    <Grid2 container sx={{padding:2}}>
      <Grid2 size={{xs:12, md:6}} sx={{ display:'flex',}}>
        <img
          src={Success}
          style={{ width: "240px", margin: "0 auto" }}
        />
      </Grid2>
      <Grid2 size={{xs:12, md:6}}>
    <Grid2 sx={{display:"flex"}}>
        <Avatar variant="rounded" sx={{width: 70, height: 70, marginRight:1}}/>
        <Grid2>
        <Box sx={{display:"flex", alignItems:"center"}}>
        <Typography variant="body1" fontWeight={600} marginRight={1} >Doctor Name</Typography>
            <Verified  color="primary" fontSize="15"/> 
        </Box>
        <Typography variant="subtitle2" color="textSecondary">Doctor Specialist</Typography>
        </Grid2>
    </Grid2>
    <Divider sx={{marginBlock:1}}/>
    <Typography fontWeight={600} >Appointment Info</Typography>
    <Box sx={{display:"flex", alignItems:"center"}}>
            <CalendarMonth color="primary"sx={{fontSize:22}}/> 
        <Typography variant="body1"  marginLeft={1} >Date</Typography>
        </Box>
        <Box sx={{display:"flex", alignItems:"center"}}>
            <Schedule  color="primary" sx={{fontSize:22}} /> 
        <Typography variant="body1" marginLeft={1} >Time</Typography>
        </Box>

        <Box sx={{display:"flex",gap:1, marginBlockStart:1.5}}>
            <Button variant="contained" onClick={()=> navigate('/my-appointments')}>Go to Appointment</Button>
            <Button variant="contained" onClick={()=> navigate('/')}>Go to Home</Button>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default PaymentSuccess;
