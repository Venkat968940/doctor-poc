import { Box, Grid2, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ProfileCard from "../../../components/Utils/ProfileCard/ProfileCard";
import { data } from "./data";

const Appointment = () => {

  return (
    <Fragment>
      <Typography variant="h6" fontWeight={600}>
        Schedule Appointment
      </Typography>
      <Box
      sx={{
        height:"90%", 
          marginTop:1,
        borderRadius:3, 
        border:"1px solid #ccc",
      }}>
  <Grid2
        container
        sx={{
          height: "fit-content",
          maxHeight: "92%",
          overflowY: "auto",
        }}
      >
        {data.map((val, idx) => (
          <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProfileCard value={val}/>
          </Grid2>
        ))}
      </Grid2>
      </Box>
    
    </Fragment>
  );
};

export default Appointment;
