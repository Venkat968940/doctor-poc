import {
  Grid2,
  TextField
} from "@mui/material";
import { DataGrid, GridCsvExportMenuItem, GridPrintExportMenuItem, GridToolbarContainer, GridToolbarExportContainer } from "@mui/x-data-grid";
import React, { memo } from "react";
import { CustomizedPagination } from "../CustomizedPagination/CustomizedPagination";

const CustomTable = ({ props }) => {
  const { page, rowsPerPage, isLoading, rows, columns } = props;


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const CustomToolbar = () =>(
     <GridToolbarContainer>
      <GridToolbarExportContainer><GridCsvExportMenuItem /><GridPrintExportMenuItem /></GridToolbarExportContainer>
    </GridToolbarContainer>
  )

  const CustomFooter = () => <CustomizedPagination props={props} />;

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
        disableRowSelectionOnClick={true}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnResize
        showColumnVerticalBorder={true}
        slots={{toolbar: CustomToolbar, footer: CustomFooter }}
        paginationModel={{ page, pageSize: rowsPerPage }}
        sx={{
          "--DataGrid-overlayHeight": "200px",
          borderRadius:2
        }}
      />
    </Grid2>
  );
};

export default memo(CustomTable);
