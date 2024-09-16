import { Button, Dialog, DialogActions, DialogContent, Divider } from '@mui/material'
import React, { Fragment, useState } from 'react'
import AppointmentDetails from './AppointmentDetails'
import PaymentSuccess from './PaymentSuccess'
import SlotDetails from './SlotDetails'

const DoctorProfile = ({setOpen}) => {
    const [confirm, setConfirm] = useState('confirm')

  return (
<Fragment>
<Dialog open={true} fullWidth maxWidth="md" >
{confirm==='confirm' ? 
    <Fragment>
<DialogContent >
<SlotDetails />
</DialogContent>
<Divider />
<DialogActions sx={{padding:2}}>
    <Button variant='outlined' onClick={()=>setOpen(false)}>Cancel</Button>
    <Button variant='contained' onClick={()=> setConfirm('booknow')}>Confirm Slot</Button>
</DialogActions>
</Fragment>
: confirm==='booknow' ?
<Fragment>
<Divider />
<DialogContent >
<AppointmentDetails />
</DialogContent>
<Divider />
<DialogActions sx={{padding:2}}>
    <Button size='small' variant='outlined' onClick={()=>setConfirm('confirm')}>Back</Button>
    <Button size='small' variant='contained' onClick={()=> setConfirm('success')}>Book Now</Button>
</DialogActions>
</Fragment>
: <PaymentSuccess />
}
    </Dialog>
</Fragment>
  )
}

export default DoctorProfile