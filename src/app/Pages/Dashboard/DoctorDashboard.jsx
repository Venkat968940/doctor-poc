import { Grid2, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Data } from './data';
import { Clear, Done } from '@mui/icons-material';
import CustomTable from '../../../components/Utils/CustomTable/CustomTable';

const DoctorDashboard = () => {
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  const columns = [
    {
      field: "sno",
      headerName: "S.no",
      minWidth: 60,
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "patientName",
      headerName: "Patient Name",
      headerAlign: "center",
      align: "left",
      textAlign:"left",
      flex:1,
      sortable: false,
    }, 
    {
      field: "appointmentDate",
      headerName: "Mobile No.",
      headerAlign: "center",
      align: "left",
      flex:1,
      sortable: false,
    },
    {
      field: "action",
      headerName: "Action",
      maxWidth: 100,
      headerAlign: "center",
      disableExport: true,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="flex justify-center w-full">
          <IconButton  >
            <Done color='success'/>
          </IconButton>
          <IconButton >
           <Clear color='error' />
          </IconButton>
        </div>
      ),
    },
  ];


  const rows = Data.filter(val=>val.patient_name.toLowerCase().includes(search.toLowerCase())).map((val, idx)=>({
    sno: idx + 1,
    id: val.id,
    patientName : val.patient_name,
    appointmentDate: val.scheduled_date + ", " + val.scheduled_time
    }))
    const props = {
        rows: rows,
        columns: columns,
        search: search,
        setSearch: setSearch,
        page: page,
        setPage: setPage,
        rowsPerPage: rowsPerPage,
        setRowsPerPage: setRowsPerPage,
        pageCount: pageCount,
        pageOption: pageOption,
      };

  return (
   <Grid2 sx={{padding:2, backgroundColor:'white', borderRadius:3}}>
    <Typography variant='h5'>Appointment List</Typography>
    <CustomTable props={props} />
   </Grid2>
  )
}

export default DoctorDashboard