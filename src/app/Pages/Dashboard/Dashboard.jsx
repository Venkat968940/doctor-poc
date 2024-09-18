import { Grid2 } from '@mui/material'
import React from 'react'
import { useMenu } from '../../../components/Hooks/UserContext/UserContext'
import AdminDashboard from './AdminDashboard'
import DoctorDashboard from './DoctorDashboard'
import PatientDashboard from './PatientDashboard'

const Dashboard = () => {
  const {role} = useMenu()
  
  return (
<Grid2>
  {role==='Patient' ? <PatientDashboard /> : role ==='Doctor' ? <DoctorDashboard /> : role==="admin" ? <AdminDashboard /> : "Access Denied"}
</Grid2>
  )
}

export default Dashboard