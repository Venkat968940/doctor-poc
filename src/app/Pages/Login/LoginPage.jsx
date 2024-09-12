import { Avatar, Button, Grid2 } from "@mui/material";
import React from "react";
import CustomTextfield from "../../../utils/CustomInputs/CustomTextfield";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomPassword from "../../../utils/CustomInputs/CustomPassword";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../../hooks/userContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setRole } = useMenu()
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
    onSubmit: (values) => handleLogin(values),
  });

  function handleLogin(values) {
    console.log(values);
    const { email } = values;
    if (email === "admin@gmail.com") {
      localStorage.setItem("token", "stvb70w3LpLqepCW6coEfA==");
      navigate("/home");
      setRole('admin')
      localStorage.setItem('role', 'admin')
    }
    else{
      localStorage.setItem("token", "stvb70w3LpLqepCW6coEfA==");
      navigate("/");
      setRole('member')
      localStorage.setItem('role', 'member')
    }
  }
  return (
    <Grid2
      className="flex w-full h-dvh justify-center items-center"
      sx={{ backgroundColor: "#F6F6F6" }}
    >
      <Grid2
        className="p-3 rounded-xl shadow-md "
        sx={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.75);",
          border: "1px solid rgba(209, 213, 219, 0.3)",
        }}
      >
        <Avatar sx={{ margin: "0 auto", width: 100, height: 100 }} />
        <Grid2 sx={{ maxWidth: "fit-content" }}>
          <CustomTextfield formik={formik} id="email" multiple={false} placeholder="Email address" title="Email address"/>
          <CustomPassword formik={formik} />
          <Button onClick={formik.handleSubmit} fullWidth variant="contained" 
          sx={{ marginBlock: 2 }}
          >
            Sign In
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default LoginPage;
