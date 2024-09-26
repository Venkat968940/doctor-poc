import { Avatar, Button, Divider, Grid2 } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../components/Firebase/firebase";
import { AxiosInstance } from "../../../components/Hooks/Axios/AxiosInstance";
import { showSnackbar } from "../../../components/Hooks/Reducers/SnackbarReducers";
import { useMenu } from "../../../components/Hooks/UserContext/UserContext";
import CustomPassword from "../../../components/Utils/CustomInput/CustomPassword";
import CustomTextField from "../../../components/Utils/CustomInput/CustomTextField";
import { LoginValidation } from "../../../constants";
import { LoginTheme } from "../../../styles/CustomStyles";
// import { auth } from "../../../components/Firebase/firebase";

const Login = () => {
  const classes = LoginTheme()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setRole } = useMenu();
  const [user] = useAuthState(auth);
  const [flag, setFlag] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: handleSubmit, //dummy login
    // onSubmit: handleLogin, //for api call
  });

  function handleSubmit(){
    if(formik.values.email==='sakthi@gmail.com' && formik.values.password==='sakthi@123'){
      localStorage.setItem("accessToken", "accessToken");
      localStorage.setItem("refreshToken", "refreshToken");
      localStorage.setItem("role", "Doctor");
      setRole('Doctor')
      navigate("/");
    }
  }

  function handleLogin() {
    AxiosInstance
      .post("user/login", {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((res) => {
        const { accessToken, refreshToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        // Set the token for future requests
        AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
   
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
       
      console.log(auth?.currentUser)
      handleGoogleLogin(auth?.currentUser)
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

function handleGoogleLogin(user){
  const { uid} = user
AxiosInstance.post("user/google-signin",{
  uId: uid
}).then(res=>{
  const { accessToken, refreshToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        // Set the token for future requests
        AxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  dispatch(showSnackbar({ open: true, type: "success", message: res?.data?.message,}));
  let base64Url = res.data.accessToken.split(".")[1];
  const decoded = JSON.parse(window.atob(base64Url));
  setRole(decoded?.user?.role);
  navigate("/");
}).catch(err=>console.log(err))
  }

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
