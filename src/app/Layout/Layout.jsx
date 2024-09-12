import { Grid2, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../utils/Sidebar/Sidebar'
import Header from '../../utils/Header/Header'

const Layout = () => {
  return (
<Grid2 className='w-full h-dvh bg-green-300'>  
<Header />
<Toolbar variant='dense'/>
  <Grid2 className='flex w-full'>
<Sidebar />
<Grid2>
  <Outlet/>
</Grid2>
  </Grid2>
</Grid2>
  )
}

export default Layout