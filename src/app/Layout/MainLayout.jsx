import { Grid2, Toolbar, useTheme } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { MainLayoutTheme } from '../../styles/CustomStyles'

const MainLayout = () => {
  const theme = useTheme()
  const classes = MainLayoutTheme()
  return (
    <Grid2 className={classes.root}>
        <Header/>
        <Toolbar variant='dense'/>
        <Grid2 className={classes.gridLayout}>
            {/* <Sidebar /> */}
            <Grid2 sx={{width:"100%", padding:2, background: theme.palette.grey[50],}}>
              <Grid2 sx={{background:"white", height:"100%", padding:2, borderRadius:4, maxWidth:1560, margin:'0 auto'}}><Outlet/></Grid2>
            </Grid2>
        </Grid2>
    </Grid2>
  )
}

export default MainLayout