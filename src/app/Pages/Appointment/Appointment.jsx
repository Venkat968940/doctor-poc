import { Autocomplete, Box, Grid2, Pagination, PaginationItem, TextField, Typography, useTheme } from "@mui/material";
import React, { Fragment, useState } from "react";
import ProfileCard from "../../../components/Utils/ProfileCard/ProfileCard";
import { data } from "./data";
import { FetchTableData } from "../../../components/Hooks/ApiHandler/FetchTableData";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Appointment = () => {
  const theme = useTheme()
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

const {data, isLoading, isSuccess, refetch,} = FetchTableData('doctorList','user/getDoctors?role=Doctor&', page, rowsPerPage, search, setPageCount)

const handleChange = (event, newValue) => {
  setRowsPerPage(newValue);
};
const props = {
  pageOption : pageOption,
  page: page, setPage : setPage,
  rowsPerPage: rowsPerPage, setRowsPerPage: setRowsPerPage,
  pageCount : pageCount,
}
  return (
    <Fragment>
      <Typography variant="h6" fontWeight={600}>Schedule Appointment</Typography>
      <Box
      sx={{
        height:"90%", 
        marginTop:1,
        borderRadius:3, 
        border:"1px solid #ccc",
        display:"flex",
        flexDirection:"column"
      }}>
  <Grid2 container
        sx={{
          height: "fit-content",
          maxHeight: "92%",
          overflowY: "auto",
          // flexGrow: 1,
        }}
      >
        {isSuccess && data.map((val, idx) => (
          <Grid2 key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProfileCard value={val}/>
          </Grid2>
        ))}
   
      </Grid2>
      <Grid2
    sx={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:1,
      marginTop: "auto", 
    }}>
      <Grid2 sx={{
        display:"flex",
        alignItems:"center",
        maxHeight:"fit-content"
      }}>
        <Autocomplete 
         disablePortal
         id="page"
         size="small"
         value={rowsPerPage}
         onChange={handleChange}
         options={pageOption}
         getOptionLabel={(option) => option.toString()}
         disableClearable
         renderInput={(params) => <TextField {...params} size="small" sx={{ width: '100px' }} />}
       />
       <Typography variant="body1" ml="6px" color="GrayText">rows per page</Typography>
      </Grid2>
      <Pagination
      color="primary"
      size="small"
      count={Math.ceil(pageCount / rowsPerPage)}
      page={page + 1}
      onChange={(event, newPage) => setPage(newPage - 1)}
      boundaryCount={1}
      renderItem={(item)=>(
        <PaginationItem slots={{previous : ArrowLeft, next: ArrowRight}}
        {...item}
        sx={{
          borderRadius: "5px",
          padding: "10px",
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: "#ccc",
              color: "#000",
            },
          },
          "& .MuiSvgIcon-root": { fontSize: 28 },
        }}
        />
      )}
      />
    </Grid2>
      </Box>
    
    </Fragment>
  );
};

export default Appointment;
