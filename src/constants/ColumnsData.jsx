import { Clear, Done } from "@mui/icons-material"
import { IconButton } from "@mui/material"

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
  const actionTable = {
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
        <IconButton>
          <Done color="success" />
        </IconButton>
        <IconButton>
          <Clear color="error" />
        </IconButton>
      </div>
    )
  }

  export const DoctorData = [serialNo, patientName, appointmentDate, actionTable]