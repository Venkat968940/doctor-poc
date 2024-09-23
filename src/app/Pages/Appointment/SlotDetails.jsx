import { Language, Place } from "@mui/icons-material";
import { Avatar, Chip, Grid2, Tab, Tabs, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { GetData } from "../../../components/Hooks/ApiHandler/GetData";

const SlotDetails = ({ data, setSlot, flag, setFlag }) => {
  const weekDays = [
    { id: 1, date: "05/10/2024" },
    { id: 2, date: "20/09/2024" },
    { id: 3, date: "21/09/2024" },
    { id: 4, date: "22/09/2024" },
  ];
  const slotTime = [
    { id: 1, startTime: "9:00 AM", endTime: "10:00 AM" },
    { id: 2, startTime: "10:00 AM", endTime: "11:00 AM" },
    { id: 3, startTime: "11:00 AM", endTime: "12:00 PM" },
    { id: 4, startTime: "12:00 PM", endTime: "1:00 PM" },
    { id: 5, startTime: "1:00 PM", endTime: "2:00 PM" },
    { id: 6, startTime: "2:00 PM", endTime: "3:00 PM" },
    { id: 7, startTime: "3:00 PM", endTime: "4:00 PM" },
    { id: 8, startTime: "4:00 PM", endTime: "5:00 PM" },
    { id: 9, startTime: "5:00 PM", endTime: "6:00 PM" },
    { id: 10, startTime: "12:55 AM", endTime: "2:00 AM" },
  ];
  
  const { data: slotData, isSuccess, isLoading,} = GetData("slotdata",`hms/getAppointmentbyId?userId=${data?._id}&page=1&limit=10`);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSlotTime = (e, i) => {
    // console.log(e, moment(i).format('YYYY-MM-DD'))
    const date = moment(i, "DD/MM/YYYY").format("YYYY-MM-DD");
    const formattedStartTime = moment(`${date} ${e.startTime}`,"YYYY-MM-DD h:mm A").toISOString();
    const formattedEndTime = moment(`${date} ${e.endTime}`,"YYYY-MM-DD h:mm A").toISOString();
    if (e.status === "Available") {
      const objData = {
        doctorId: data?._id,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
      };

      const arrData = {
        id: e.id,
        date: i,
        ...e,
      };
      setFlag(arrData);
      setSlot(objData);
    } else {
      setFlag(null);
      setSlot(null);
    }
  };

  const mappedDateData = weekDays.map((day) => {
    const slotTiming = slotTime.map((timeSlot) => {
      const isTimeBooked = isSuccess &&
        slotData?.data.some(
          (app) =>
            moment(app.startTime).format("DD/MM/YYYY") === day.date && 
            moment(app.startTime).format("h:mm A") === timeSlot.startTime && 
            moment(app.endTime).format("h:mm A") === timeSlot.endTime 
        );
  
      return {
        ...timeSlot,
        status: isTimeBooked ? "Booked" : "Available",
      };
    });
  
    return {
      ...day,
      slotTiming: slotTiming, 
    };
  });
  
console.log(mappedDateData)
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
          <Grid2 sx={{ marginBlock: 1 }}>
            <Typography variant="body2" fontWeight={600}>Reg No. {data?.doctorDetails?.licenseNumber}</Typography>
            <Grid2 size={12}
              sx={{ display: "flex", alignItems: "center", marginBlock: 1 }}
            >
              <Language fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body2">{data?.doctorDetails?.language}</Typography>
            </Grid2>
            <Grid2
              size={12}
              sx={{ display: "flex", alignItems: "center", marginBlock: 1 }}
            >
              <Place fontSize="small" sx={{ marginRight: 1 }} />
              <Typography variant="body2">{data?.doctorDetails?.location}</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Typography variant="body1" fontWeight={600}>More About</Typography>
          <Typography variant="body2">{data?.doctorDetails?.about}</Typography>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} sx={{ marginBlock: { xs: 2, sm: 0 } }}>
        <Tabs onChange={handleChange} value={value} variant="scrollable">
          {mappedDateData.map((val, idx) => (
            <Tab key={idx} value={idx} label={val.date} />
          ))}
        </Tabs>
        <Grid2 container rowSpacing={1} marginBlock={2}>
          {mappedDateData
            .filter((item, index) => index === value)
            .map((val) =>
              val.slotTiming.map((time, i) => (
                <Grid2 key={i} size="auto" onClick={() => handleSlotTime(time, val.date)}>
                  <Chip label={`${time.startTime} - ${time.endTime}`}
                    variant="filled"
                    size="small"
                    color={ flag?.id === time.id && flag?.date === val.date ? "success" : "default"}
                    disabled={time.status === "Booked"}
                    sx={{ marginInline: 1, marginBottom: 1, cursor: "pointer" }}
                  />
                </Grid2>
              ))
            )}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SlotDetails;
