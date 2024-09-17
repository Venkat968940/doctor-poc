import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import AppointmentDetails from "./AppointmentDetails";
import PaymentSuccess from "./PaymentSuccess";
import SlotDetails from "./SlotDetails";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../../components/Hooks/Snackbar/Reducers";

const DoctorProfile = ({ setOpen, docData }) => {
  const dispatch = useDispatch()
  const [confirm, setConfirm] = useState("confirm");
  const [slot, setSlot] = useState(null)
  const [flag, setFlag] = useState(null)

  const handleSlot = () =>{
if(slot || flag){
  setConfirm("booknow")
}else{
dispatch(showSnackbar({open:true, message:"Select any one slot",type:"error"}))
}
  }
  return (
    <Fragment>
      <Dialog open={true} fullWidth maxWidth="md">
        {confirm === "confirm" ? (
          <Fragment>
            <DialogContent>
              <SlotDetails data={docData} setSlot={setSlot} flag={flag} setFlag={setFlag}/>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ padding: 2 }}>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleSlot}>Confirm Slot</Button>
            </DialogActions>
          </Fragment>
        ) : confirm === "booknow" ? (
          <Fragment>
            <Divider />
            <DialogContent>
              <AppointmentDetails slot={slot} data={docData}/>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ padding: 2 }}>
              <Button size="small" variant="outlined" onClick={() => setConfirm("confirm")}>Back</Button>
              <Button size="small" variant="contained" onClick={() => setConfirm("success")}>Book Now</Button>
            </DialogActions>
          </Fragment>
        ) : (
          <PaymentSuccess slot={slot} data={docData}/>
        )}
      </Dialog>
    </Fragment>
  );
};

export default DoctorProfile;
