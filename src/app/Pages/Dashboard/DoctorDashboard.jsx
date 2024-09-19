import { Grid2, IconButton, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { Data } from './data';
import { Clear, Done } from '@mui/icons-material';
import CustomTable from '../../../components/Utils/CustomTable/CustomTable';
import { FetchTableData } from '../../../components/Hooks/ApiHandler/FetchTableData';
import moment from 'moment';

const DoctorDashboard = () => {
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

const {data, isLoading, isSuccess, refetch, } = FetchTableData('appointment_list','hms/getAppointments?',page, rowsPerPage, search, setPageCount)

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
      headerName: "Scheduled Date",
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


  const rows = isSuccess ? data.
  // filter(val=>val.patient_name.toLowerCase().includes(search.toLowerCase()))
  map((val, idx)=>({
    sno: idx + 1,
    id: val._id,
    patientName : val?.patient_name,
    appointmentDate: moment(val.startTime).format('LLL')
    })) : []
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
        isLoading : isLoading
      };
console.log(data, isLoading, isSuccess)
if(isSuccess){
  console.log(moment(data[0].startTime).format('LLL'))
}
  return (
 <Fragment>
   <Typography variant='h5'>Appointment List</Typography>
   <CustomTable props={props} />
 </Fragment>
  )
}

export default DoctorDashboard