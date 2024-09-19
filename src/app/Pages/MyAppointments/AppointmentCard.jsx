import { CalendarMonth, CurrencyRupee, Language, Schedule, Star, Verified } from "@mui/icons-material";
import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import moment from "moment";
import React, { Fragment, useState } from "react";

const AppointmentCard = ({info}) => {
    const [open, setOpen] = useState(false)

    const handleAppointment=()=>{
  setOpen(!open)
      }
  return (
<Fragment>
<Grid2 container sx={{ margin: 1.5, padding: 1.5, background: "white", borderRadius:2,
        boxShadow:'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
        '&:hover':{
            boxShadow:'0 10px 15px -3px rgb(59 130 246 / 0.5), 0 4px 6px -4px rgb(59 130 246 / 0.5);',
        }
     }}>
      <Grid2 size="auto" sx={{ marginRight: 1 }}>
        <Avatar variant="rounded" sx={{ width: 60, height: 70 }} />
      </Grid2>
      <Grid2 size="grow">
      <Box sx={{display:"flex", alignItems:"center"}}>
        <Typography variant="body1" fontWeight={600} marginRight={1} >{info?.doctor_name}</Typography>
            <Verified  color="primary" fontSize="15"/> 
        </Box>
        <Typography variant="subtitle2" color="textSecondary">{info?.specialization}</Typography>
        {/* <Typography variant="subtitle2" color="primary">View Info</Typography> */}
       
      </Grid2>
      <Grid2 size="auto">
        <Grid2 sx={{ display: "flex", alignItems: "center" }}>
          <Star sx={{ color: "gold" }} fontSize="small" />
          <Typography fontWeight={600} variant="subtitle2">{info?.rating}</Typography>
        </Grid2>
       
      </Grid2> 
        <Grid2
          size={12}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBlock: 1,
          }}
        >
           <CalendarMonth color='primary' sx={{marginRight:1}}/>
           <Typography variant='body2' fontWeight={600}>{moment(info?.startTime).format('DD/MM/YYYY')}</Typography>
        </Grid2>
        <Grid2 sx={{display:"flex", alignItems:"center", marginBlock:0.5}}>
            <Schedule color='primary' sx={{marginRight:1}}/>
            <Typography variant='body2'>{moment(info?.startTime).format('h:mm A')} - {moment(info?.endTime).format('h:mm A')}</Typography>
           </Grid2>
    </Grid2>
</Fragment>
  );
};

export default AppointmentCard;
