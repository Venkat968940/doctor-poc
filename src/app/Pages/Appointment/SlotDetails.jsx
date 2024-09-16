import { Language, Place } from '@mui/icons-material'
import { Avatar, Chip, Grid2, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

const SlotDetails = () => {
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
            <Typography variant="body1" fontWeight={600}>Name</Typography>
            <Typography variant="subtitle2" color="textSecondary">Specialist</Typography>
            <Typography variant="body2" fontWeight={600}>Experience</Typography>
          </Grid2>
        </Grid2>
        <Grid2 sx={{marginBlock:1}}>
          <Typography variant="body2" fontWeight={600}>Reg No.</Typography>
          <Grid2
            size={12}
            sx={{ display: "flex", alignItems: "center", marginBlock: 1 }}
          >
            <Language fontSize="small" sx={{ marginRight: 1 }} />
            <Typography variant="body2" >Languages</Typography>
          </Grid2>
          <Grid2
            size={12}
            sx={{ display: "flex", alignItems: "center", marginBlock: 1 }}
          >
            <Place fontSize="small" sx={{ marginRight: 1 }} />
            <Typography variant="body2">Location</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Typography variant="body1" fontWeight={600}>More About</Typography>
        <Typography variant="body2">Doctor Details</Typography>
      </Grid2>
    </Grid2>
    <Grid2 size={{ xs: 12, md: 6 }} sx={{ marginBlock: { xs: 2, sm: 0 } }}>
      <Tabs value={0}>
        <Tab label="Today" />
      </Tabs>
      <Grid2 container rowSpacing={1} marginBlock={2}>
        {Array.from(Array(24)).map((_, index) => (
          <Grid2 key={index} size="auto" >
            <Chip
              label="9.00AM"
              variant="outlined"
              size="small"
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