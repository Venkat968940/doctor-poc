import { Clear, Done } from "@mui/icons-material"
import { Grid2, IconButton } from "@mui/material"

const serialNo ={
    field: "sno",
    headerName: "S.no",
    minWidth: 60,
    headerAlign: "center",
    align: "center",
    sortable: false,
}

const patientName = {
    field: "patientName",
    headerName: "Patient Name",
    headerAlign: "center",
    align: "left",
    textAlign: "left",
    flex: 1,
    sortable: false,
}

const appointmentDate =   {
    field: "appointmentDate",
    headerName: "Scheduled Date",
    headerAlign: "center",
    align: "left",
    flex: 1,
    sortable: false,
  }
  const actionTable =(handleAction)=> ({
    field: "action",
    headerName: "Action",
    width: 120,
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => (
      <Grid2>
        <IconButton onClick={()=> handleAction(params.row.id,"success")} sx={{marginRight:1}}><Done color="success" /></IconButton>
        <IconButton onClick={()=> handleAction(params.row.id,"delete")}><Clear color="error" /></IconButton>
      </Grid2>
    )
  })

  export const DoctorData  = (handleAction) => [serialNo, patientName, appointmentDate, actionTable(handleAction)]