import { Avatar, Button, Divider, Grid2, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../../components/Hooks/UserContext/UserContext";
import CustomTextField from "../../../components/Utils/CustomInput/CustomTextField";
import CustomPassword from "../../../components/Utils/CustomInput/CustomPassword";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
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
    const { email } = formik.values;
    if (email === "doctor@gmail.com") {
      setRole("doctor");
      localStorage.setItem("role", "doctor");
    } else {
      setRole("member");
      localStorage.setItem("role", "member");
    }
    localStorage.setItem("token", "stvb70w3LpLqepCW6coEfA==");
    navigate("/");
  }

  const handleSuccess = (response) => {
    console.log("Login Successful", response);
    // Use the response to send the token to your backend and verify it
  };

  const handleFailure = (error) => {
    console.log("Login Failed", error);
  };

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
        <Divider sx={{marginBottom:2}}>or</Divider>
        <GoogleOAuthProvider clientId="464802840272-n795t3jvjdln68sian71nqs78q34vm1k.apps.googleusercontent.com">
          <GoogleLogin  onSuccess={handleSuccess} onError={handleFailure}/>
        </GoogleOAuthProvider>
      </Grid2>
    </Grid2>
  );
};

export default Login;
