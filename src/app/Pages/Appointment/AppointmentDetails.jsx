import { CalendarMonth, Close, EventAvailable, Language, Place, Schedule, Verified } from '@mui/icons-material'
import { Avatar, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid2, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'

const AppointmentDetails = () => {
  return (
    <Grid2 container>
    <Grid2 size={{xs:12, md: 6}}>
    <Typography variant='body1' fontWeight={600} marginBottom={1}>Appointment Info</Typography>
           <Grid2 sx={{display:"flex", alignItems:"center", marginBottom:0.5}}>
           <Typography variant="body2" fontWeight={600} marginRight={1} >Doctor Name</Typography>
           <Verified  color="primary" fontSize="15"/> 
           </Grid2>
           <Grid2 sx={{display:"flex", alignItems:"center"}}>
            <CalendarMonth color='primary' sx={{marginRight:1}}/>
            <Typography variant='body2'>Date</Typography>
           </Grid2>
           <Grid2 sx={{display:"flex", alignItems:"center", marginBlock:0.5}}>
            <Schedule color='primary' sx={{marginRight:1}}/>
            <Typography variant='body2'>Time</Typography>
           </Grid2>
           <Grid2 sx={{display:"flex", alignItems:"center"}}>
            <EventAvailable color='primary' sx={{marginRight:1}}/>
            <Typography variant='body2'>Appointment Type</Typography>
           </Grid2>
    </Grid2>
    <Grid2 size={{xs:12, md: 6}} sx={{marginBlock : {xs:2, sm:0}}}>
       <Typography variant='body1' fontWeight={600} marginBottom={1}>Payment Info</Typography>
       <Grid2 sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
       <Typography variant='body2' fontWeight={600}>Consultation Fee</Typography>
       <Typography variant='body2' fontWeight={600}>500</Typography>
       </Grid2>
       <Grid2 sx={{display:"flex", alignItems:"center", justifyContent:"space-between",marginBlock:0.5}}>
       <Typography variant='body2' fontWeight={600}>Total</Typography>
       <Typography variant='body2' fontWeight={600}>500</Typography>
       </Grid2>
       <Typography variant='caption'>By continuing , you agree to our Terms of service & Privacy policy</Typography>
    </Grid2>
</Grid2>
  )
}

export default AppointmentDetails