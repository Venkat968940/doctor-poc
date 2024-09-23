import { Avatar, Button, Divider, Grid2 } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../../components/Hooks/UserContext/UserContext";
import CustomPassword from "../../../components/Utils/CustomInput/CustomPassword";
import CustomTextField from "../../../components/Utils/CustomInput/CustomTextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../../components/Hooks/Snackbar/Reducers";
import { LoginValidation } from "../../../constants";
import { LoginTheme } from "../../../styles/CustomStyles";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from "../../../components/Firebase/firebase";
// import { auth } from "../../../components/Firebase/firebase";

const Login = () => {
  const classes = LoginTheme()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setRole } = useMenu();
  const [user] = useAuthState(auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: handleLogin,
  });

  function handleLogin() {
    axios
      .post("user/login", {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((res) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.accessToken}`;
        localStorage.setItem("token", res.data.accessToken);
        dispatch(showSnackbar({ open: true, type: "success", message: res?.data?.message,}));
        let base64Url = res.data.accessToken.split(".")[1];
        const decoded = JSON.parse(window.atob(base64Url));
        setRole(decoded?.user?.role);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.response.data.message)
        dispatch(showSnackbar({open: true, type: "error", message: err?.response?.data?.message,}));
      });
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
console.log(user)

  return (
    <Grid2 className={classes.root} >
      <Grid2 className={classes.maincard}>
        <Avatar sx={{ margin: "0 auto" }} />
        <Grid2>
          <CustomTextField formik={formik} id="email" multiple={false} placeholder="Email address" title="Email address"/>
          <CustomPassword formik={formik} id="password" />
          <Button onClick={formik.handleSubmit} fullWidth variant="contained" sx={{ marginBlock: 2 }}>
            Sign In
          </Button>
        </Grid2>
        <Divider sx={{marginBottom:2}}>or</Divider>
        <Button variant="outlined" fullWidth onClick={signInWithGoogle}>Sign in with Google</Button>
      </Grid2>
    </Grid2>
  );
};

export default Login;
