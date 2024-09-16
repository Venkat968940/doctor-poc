import { Grid2, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import ProfileCard from '../../../components/Utils/ProfileCard/ProfileCard'

const Appointment = () => {
const data=[1,2,3,4,5,6,7,8,9,10]
  return (
   <Fragment>
       <Typography variant='h6'>Schedule Appointment</Typography>
   <Grid2 container sx={{height:'100%',
    maxHeight: "92%",
    overflowY: "auto",    
    border:"1px solid #ccc",
    marginTop:1,
    borderRadius:3
   }}>
   {data.map(val=>(
     <Grid2 key={val} size={{xs:12, sm:6, md:4, lg:3,}} >
     <ProfileCard />
  </Grid2>
   ))}
   </Grid2>
   </Fragment>
  )
}

export default Appointment