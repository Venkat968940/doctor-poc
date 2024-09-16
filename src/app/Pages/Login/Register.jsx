import { Avatar, Grid2 } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../components/Utils/CustomInput/CustomTextField'

const Register = () => {
  return (
   <Grid2 sx={{
    display: "flex",
    width: "100%",
    height: "100dvh",
    justifyContent: "center",
    alignItems: "center",
    background: "#F6F6F6",
   }}>
<Grid2 sx={{
     backdropFilter: "blur(16px) saturate(180%)",
     backgroundColor: "rgba(255, 255, 255, 0.75);",
     border: "1px solid rgba(209, 213, 219, 0.3)",
     padding: 2,
     borderRadius: 2,
     boxShadow:
       "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
}}>
 <Avatar sx={{ margin: "0 auto" }} />
 <Grid2>
    {/* <CustomTextField /> */}
 </Grid2>
</Grid2>

   </Grid2>
  )
}

export default Register