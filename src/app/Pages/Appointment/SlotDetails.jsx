import { Language, Place } from '@mui/icons-material'
import { Avatar, Box, Chip, Grid2, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GetData } from '../../../components/Hooks/ApiHandler/GetData'
import moment from 'moment'

const SlotDetails = ({data, setSlot, flag, setFlag}) => {
console.log(data)

const {data:slotData, isSuccess, isLoading} = GetData('slotdata',`hms/getAppointmentbyId?userId=${data?._id}&page=1&limit=10`)
  // const slotData = data?.slot_details
  const [value, setValue] = useState(0)
console.log(slotData?.data)
  const handleChange = (event , newValue) => {
    setValue(newValue)
}
console.log(flag)
  const handleSlotTime = (e, i) =>{
if(e.available===1){
  const objData = {
    date : i.slot_date,
    slot_info : e,
  }
  console.log(objData)
  setFlag(e)
  setSlot(objData)
}
else{
setFlag(null)
setSlot(null)
}
  }
  return (
    <Grid2 container>
    <Grid2 container size={{ xs: 12, md: 6 }}>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Grid2 sx={{ display: "flex" }}>
          <Avatar
            variant="rounded"
            sx={{ height: "auto", width: 80, marginRight: 1 }}
          />
          <Grid2>
            <Typography variant="body1" fontWeight={600}>{data?.name}</Typography>
            <Typography variant="subtitle2" color="textSecondary">{data?.doctorDetails?.specialization}</Typography>
            <Typography variant="body2" fontWeight={600}>Experience</Typography>
            <Typography variant="body2">{data?.doctorDetails?.experience}</Typography>
          </Grid2>
        </Grid2>
        <Grid2 sx={{marginBlock:1}}>
          <Typography variant="body2" fontWeight={600}>Reg No. {data?.doctorDetails?.licenseNumber}</Typography>
          <Grid2
            size={12}
            sx={{ display: "flex", alignItems: "center", marginBlock: 1 }}
          >
            <Language fontSize="small" sx={{ marginRight: 1 }} />
            <Typography variant="body2" >{data?.languages}</Typography>
          </Grid2>
          <Grid2
            size={12}
            sx={{ display: "flex", alignItems: "center", marginBlock: 1 }}
          >
            <Place fontSize="small" sx={{ marginRight: 1 }} />
            <Typography variant="body2">{data?.location}</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Typography variant="body1" fontWeight={600}>More About</Typography>
        <Typography variant="body2">{data?.about}</Typography>
      </Grid2>
    </Grid2>
    <Grid2 size={{ xs: 12, md: 6 }} sx={{ marginBlock: { xs: 2, sm: 0 } }}>
  
       <Tabs  onChange={handleChange} value={value} variant="scrollable" >
    {isSuccess && slotData.data.map((val,idx)=>(<Tab key={idx} value={idx} label={moment(val.startTime).format("L")} />))}
     </Tabs>
      <Grid2 container rowSpacing={1} marginBlock={2}>
        {isSuccess && slotData.data.filter((item, index)=>index===value).map((val,idx)=> (
        <Grid2 key={idx} size="auto" 
        onClick={()=> handleSlotTime(val)}
        >
        <Chip
          label={moment(val.startTime).format("LT")}
          variant="filled"
          size="small"
          color={ flag===val ? "success" :  "default"}
          disabled={val.status==="Scheduled"}
          sx={{ marginInline: 1, marginBottom: 1, cursor: "pointer" }}
        />
      </Grid2>
        ))}
      </Grid2>
    </Grid2>
  </Grid2>
  )
}

export default SlotDetails