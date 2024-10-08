import {
  CalendarMonth,
  EventAvailable,
  Schedule,
  Verified
} from "@mui/icons-material";
import {
  Grid2,
  Typography
} from "@mui/material";
import moment from "moment";
import React from "react";
import { AppointmentTheme } from "../../../styles/CustomStyles";

const AppointmentDetails = ({ slot, data }) => {
  console.log(slot, data);
  const classes = AppointmentTheme()
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Typography variant="body1" fontWeight={600} marginBottom={1}>Appointment Info</Typography>
        <Grid2 sx={{ display: "flex", alignItems: "center", marginBottom: 0.5 }}>
          <Typography variant="body2" fontWeight={600} marginRight={1}>{data?.name}</Typography>
          <Verified color="primary" fontSize="15" />
        </Grid2>
        <Grid2 sx={{ display: "flex", alignItems: "center" }}>
          <CalendarMonth color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="body2">{moment(slot.startTime).format("DD/MM/YYYY")}</Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", alignItems: "center", marginBlock: 0.5 }}>
          <Schedule color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="body2">
            {moment(slot?.startTime).format("h:mm A")} - {moment(slot?.endTime).format("h:mm A")}
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", alignItems: "center" }}>
          <EventAvailable color="primary" sx={{ marginRight: 1 }} />
          <Typography variant="body2">WalkIn</Typography>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }} sx={{ marginBlock: { xs: 2, sm: 0 } }}>
        <Typography variant="body1" fontWeight={600} marginBottom={1}>Payment Info</Typography>
        <Grid2 className={classes.gridBtw}>
          <Typography variant="body2">Consultation Fee</Typography>
          <Typography variant="body2">{data.doctorDetails.consultationFee}</Typography>
        </Grid2>
        <Grid2 className={classes.gridBtw} sx={{marginBlock: 1}}>
          <Typography variant="body1" fontWeight={600}>Total</Typography>
          <Typography variant="body1" fontWeight={600}>{data.doctorDetails.consultationFee}</Typography>
        </Grid2>
        <Typography variant="caption">By continuing , you agree to our Terms of service & Privacy policy</Typography>
      </Grid2>
    </Grid2>
  );
};

export default AppointmentDetails;
