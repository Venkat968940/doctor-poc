import { Button, Grid2 } from '@mui/material'
import React from 'react'
import PatientDashboard from './PatientDashboard'
import DoctorDashboard from './DoctorDashboard'
import AdminDashboard from './AdminDashboard'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../../../components/Hooks/Snackbar/Reducers'
import { useMenu } from '../../../components/Hooks/UserContext/UserContext'

const Dashboard = () => {
  const {role} = useMenu()
  
  return (
<Grid2>
  {role==='member' ? <PatientDashboard /> : role ==='doctor' ? <DoctorDashboard /> : role==="admin" ? <AdminDashboard /> : "Access Denied"}
</Grid2>
  )
}

export default Dashboard