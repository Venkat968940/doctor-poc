import { Grid2, Toolbar, useTheme } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const theme = useTheme()
  return (
    <Grid2 sx={{width:"100%", height:"100dvh"}}>
        <Header/>
        <Toolbar variant='dense'/>
        <Grid2 sx={{width:"100%", height:"calc(100% - 50px)", display:"flex", }}>
            {/* <Sidebar /> */}
            <Grid2 sx={{width:"100%", padding:2, background: theme.palette.grey[50],}}>
              <Grid2 sx={{background:"white", height:"100%", padding:2, borderRadius:4, maxWidth:1560, margin:'0 auto'}}><Outlet/></Grid2>
            </Grid2>
        </Grid2>
    </Grid2>
  )
}

export default MainLayout