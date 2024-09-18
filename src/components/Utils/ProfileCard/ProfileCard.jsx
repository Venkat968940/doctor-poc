import { CurrencyRupee, Language, Star, Verified } from "@mui/icons-material";
import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import DoctorProfile from "../../../app/Pages/Appointment/DoctorProfile";

const ProfileCard = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const handleAppointment = (val) => {
    setOpen(!open);
    console.log(val);
    setData(val);
  };
  return (
    <Fragment>
      <Grid2
        container
        sx={{
          margin: 1.5,
          padding: 1.5,
          background: "white",
          borderRadius: 2,
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
          "&:hover": {
            boxShadow:
              "0 10px 15px -3px rgb(59 130 246 / 0.5), 0 4px 6px -4px rgb(59 130 246 / 0.5);",
          },
        }}
      >
        <Grid2 size="auto" sx={{ marginRight: 1 }}>
          <Avatar variant="rounded" sx={{ width: 60, height: 70 }} />
        </Grid2>
        <Grid2 size="grow">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" fontWeight={600} marginRight={1}>
              {value?.name}
            </Typography>
            <Verified color="primary" fontSize="15" />
          </Box>
          <Typography variant="subtitle2" color="textSecondary">
          {value?.doctorDetails?.specialization}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CurrencyRupee color="error" fontSize="15" />
            <Typography variant="body1" fontWeight={600} color="error">
              {value.consult_fee}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size="auto">
          <Grid2 sx={{ display: "flex", alignItems: "center" }}>
            <Star sx={{ color: "gold" }} fontSize="small" />
            <Typography fontWeight={600} variant="subtitle2">
              {value.rating}
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBlock: 1,
          }}
        >
          <Language fontSize="small" sx={{ marginRight: 1 }} />
          <Typography variant="body2">{value.languages}</Typography>
        </Grid2>
        <Grid2 size={12}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleAppointment(value)}
          >
            Book Appointment
          </Button>
        </Grid2>
      </Grid2>
      {open && <DoctorProfile docData={data} setOpen={setOpen} />}
    </Fragment>
  );
};

export default ProfileCard;
