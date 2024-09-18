import { Box, Grid2, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import ProfileCard from "../../../components/Utils/ProfileCard/ProfileCard";
import { data } from "./data";
import { FetchTableData } from "../../../components/Hooks/ApiHandler/FetchTableData";

const Appointment = () => {
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

const {data, isLoading, isSuccess, refetch,} = FetchTableData('doctorList','user/getDoctors?role=Doctor&', page, rowsPerPage, search, setPageCount)

console.log(data)
  return (
    <Fragment>
      <Typography variant="h6" fontWeight={600}>Schedule Appointment</Typography>
      <Box
      sx={{
        height:"90%", 
        marginTop:1,
        borderRadius:3, 
        border:"1px solid #ccc",
      }}>
  <Grid2 container
        sx={{
          height: "fit-content",
          maxHeight: "92%",
          overflowY: "auto",
        }}
      >
        {isSuccess && data.map((val, idx) => (
          <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProfileCard value={val}/>
          </Grid2>
        ))}
      </Grid2>
      </Box>
    
    </Fragment>
  );
};

export default Appointment;
