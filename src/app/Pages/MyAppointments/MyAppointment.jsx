import {
  Box,
  Grid2,
  Typography
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { FetchTableData } from "../../../components/Hooks/ApiHandler/FetchTableData";
import { CustomizedPagination } from "../../../components/Utils/CustomizedPagination/CustomizedPagination";
import { AppointmentTheme } from "../../../styles/CustomStyles";
import AppointmentCard from "./AppointmentCard";

const MyAppointment = () => {
  const classes = AppointmentTheme();
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");
  let base64Url = token.split(".")[1];
  const decoded = JSON.parse(window.atob(base64Url));
  console.log(decoded?.user?.id);
  const { data, isSuccess, isLoading } = FetchTableData("my-appointment", `hms/getAppointments?`, page, rowsPerPage, search, setPageCount);

  const props = {
    rowsPerPage: rowsPerPage,
    setRowsPerPage: setRowsPerPage,
    page: page,
    setPage: setPage,
    pageCount: pageCount,
    pageOption: pageOption,
  };

  return (
    <Fragment>
      <Typography variant="h6" fontWeight={600} marginBottom={1}>My Appointment</Typography>
      <Box className={classes.root}>
        <Grid2 container className={classes.gridRoot}>
          {isSuccess && data.map((val, idx) => (
              <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <AppointmentCard info={val} />
              </Grid2>
            ))}
        </Grid2>
        <CustomizedPagination props={props} />
      </Box>
    </Fragment>
  );
};

export default MyAppointment;
