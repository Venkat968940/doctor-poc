import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, TextField, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';

const CustomPassword = ({formik}) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
 <Fragment >
    <Typography variant='body1' marginBlock={1}>Password</Typography>
    <TextField 
       id="password"
       {...formik.getFieldProps("password")}
       type={showPassword ? "text" : "password"}
       placeholder="Password *"
       fullWidth
       size="small"
       autoComplete="new-password"
       slotProps={{
        input:{
            endAdornment: (
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff/>}
                </IconButton>
              ),
        }
       }}
       error={formik.touched.password && Boolean(formik.errors.password)}
       helperText={formik.touched.password && formik.errors.password}
    />
 </Fragment>
  )
}

export default CustomPassword