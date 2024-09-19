import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Autocomplete, Grid2, Pagination, PaginationItem, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const CustomTable = ({ props }) => {
  const theme = useTheme();
  const { page,setPage, pageCount, pageOption, rowsPerPage,setRowsPerPage, isLoading, rows, columns } =
    props;

  const handleChange = (event, newValue) => {
    setRowsPerPage(newValue);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const CustomFooter=()=>(
    <Grid2
    sx={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:1
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
  )

  return (
    <Grid2>
      <Grid2
        sx={{
          display: "flex",
          justifyContent: "end",
          marginBlock: 2,
        }}
      >
        <TextField size="small" placeholder="Search" onChange={handleSearch} />
      </Grid2>
      <DataGrid
        columns={columns}
        rows={rows}
        loading={isLoading}
        density="compact"
        disableColumnMenu
        disableRowSelectionOnClick
        showColumnVerticalBorder
        slots={{footer : CustomFooter}}
        paginationModel={{ page, pageSize: rowsPerPage }}
        sx={{
          "--DataGrid-overlayHeight": "200px",
        }}
      />
    </Grid2>
  );
};

export default CustomTable;
