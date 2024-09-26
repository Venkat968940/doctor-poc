import { Typography } from "@mui/material";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { FetchTableData } from "../../../components/Hooks/ApiHandler/FetchTableData";
import CustomTable from "../../../components/Utils/CustomTable/CustomTable";
import { AppointmentData, DoctorTableData } from "../../../constants";

const DoctorDashboard = () => {
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  // const { data, isLoading, isSuccess, refetch } = FetchTableData("appointment_list", "hms/getAppointments?", page, rowsPerPage, search, setPageCount);

  const handleAction = (id, actionType) => {
    if (actionType === "success") {
      // Perform success action, e.g., mark appointment as completed
      console.log(`Success action on appointment ID: ${id}`);
    } else if (actionType === "delete") {
      // Perform delete action, e.g., remove the appointment
      console.log(`Delete action on appointment ID: ${id}`);
    }
    // // Optionally, refetch the data if needed
    // refetch();
  };

  const columns = DoctorTableData(handleAction)

  // Through API Call means
  // const rows = isSuccess
  //   ? data
  //       // filter(val=>val.patient_name.toLowerCase().includes(search.toLowerCase()))
  //       .map((val, idx) => ({
  //         sno: idx + 1,
  //         id: val._id,
  //         patientName: val?.patient_name,
  //         appointmentDate: `${moment(val.startTime).format("MMM D, YYYY h:mm A")} - ${moment(val.endTime).format("h:mm A")}`,
  //       }))
  //   : [];
  const rows = AppointmentData
      // filter(val=>val.patient_name.toLowerCase().includes(search.toLowerCase()))
      .map((val, idx) => ({
        sno: idx + 1,
        id: val._id,
        patientName: val?.patient_name,
        appointmentDate: `${moment(val.startTime).format("MMM D, YYYY h:mm A")} - ${moment(val.endTime).format("h:mm A")}`,
      }));

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
    isLoading: false,
  };
  
  
  return (
    <Fragment>
      <Typography variant="h5">Appointment List</Typography>
      <CustomTable props={props} />
    </Fragment>
  );
};

export default DoctorDashboard;
