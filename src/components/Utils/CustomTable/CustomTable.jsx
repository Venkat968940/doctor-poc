import { Grid2, TextField, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const CustomTable = ({ props }) => {
  const theme = useTheme();
  const { page, pageCount, pageOption, rowsPerPage, isLoading, rows, columns } =
    props;

  const handleChange = (event, newValue) => {
    props.setRowsPerPage(newValue);
  };

  const handleSearch = (e) => {
    props.setSearch(e.target.value);
  };

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
        // loading={isLoading}
        density="compact"
        disableColumnMenu
        disableRowSelectionOnClick
        showColumnVerticalBorder
        // slots={{ footer: CustomFooter }}
        // paginationModel={{ page, pageSize: rowsPerPage }}
        sx={{
          "--DataGrid-overlayHeight": "200px",
        }}
      />
    </Grid2>
  );
};

export default CustomTable;
