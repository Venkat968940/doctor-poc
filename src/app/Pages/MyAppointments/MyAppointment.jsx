import { Box, Grid2, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import ProfileCard from "../../../components/Utils/ProfileCard/ProfileCard";
import AppointmentCard from "./AppointmentCard";
import { FetchTableData } from "../../../components/Hooks/ApiHandler/FetchTableData";

const MyAppointment = () => {
  const data1 = [1, 2, 3, 4, 5];
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem('token')
  let base64Url = token.split('.')[1];
        const decoded = JSON.parse(window.atob(base64Url));
        console.log(decoded?.user?.id)
  const {data, isSuccess, isLoading} = FetchTableData('my-appointment',`hms/getAppointmentbyId?userId=${decoded?.user?.id}&`,page, rowsPerPage, search, setPageCount)
  console.log(data)
  return (
    <Fragment>
      <Typography variant="h6" fontWeight={600}>My Appointment</Typography>
      <Box
        sx={{
          height: "90%",
          marginTop: 1,
          borderRadius: 3,
          border: "1px solid #ccc",
        }}
      >
        <Grid2
          container
          sx={{
            height: "fit-content",
            maxHeight: "92%",
            overflowY: "auto",
          }}
        >
          {data1.map((val) => (
            <Grid2 key={val} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <AppointmentCard />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Fragment>
  );
};

export default MyAppointment;
