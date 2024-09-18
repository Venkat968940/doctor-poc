import { Avatar, Button, Grid2 } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useMenu } from "../../../components/Hooks/UserContext/UserContext";
import CustomPassword from "../../../components/Utils/CustomInput/CustomPassword";
import CustomTextField from "../../../components/Utils/CustomInput/CustomTextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../../components/Hooks/Snackbar/Reducers";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { setRole } = useMenu();
  const LoginValidation = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be min 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: handleLogin,
  });

  function handleLogin() {
   axios.post('user/login',{
    email: formik.values.email,
    password : formik.values.password,
   })
   .then(res=>{
    axios.defaults.headers.common['Authorization']=`Bearer ${res.data.accessToken}`
    localStorage.setItem('token', res.data.accessToken)
    dispatch(showSnackbar({open:true, type:"success", message: res?.data?.message}))    
    let base64Url = res.data.accessToken.split('.')[1];
    const decoded = JSON.parse(window.atob(base64Url));
    console.log(decoded)
    setRole(decoded?.user?.role)
    navigate("/");
   })
   .catch(err=>{
    // console.log(err.response.data.message)
    dispatch(showSnackbar({open:true, type:"error", message: err?.response?.data?.message}))    
   })
  }

  return (
    <Grid2
      sx={{
        display: "flex",
        width: "100%",
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        background: "#F6F6F6",
      }}
    >
      <Grid2
        sx={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.75);",
          border: "1px solid rgba(209, 213, 219, 0.3)",
          padding: 2,
          borderRadius: 2,
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
        }}
      >
        <Avatar sx={{ margin: "0 auto" }} />
        <Grid2>
          <CustomTextField formik={formik}
            id="email"
            multiple={false}
            placeholder="Email address"
            title="Email address"
          />
          <CustomPassword formik={formik} id="password"/>
          <Button
            onClick={formik.handleSubmit}
            fullWidth
            variant="contained"
            sx={{ marginBlock: 2 }}
          >
            Sign In
          </Button>
        </Grid2>
        {/* <Divider sx={{marginBottom:2}}>or</Divider> */}
      </Grid2>
    </Grid2>
  );
};

export default Login;
