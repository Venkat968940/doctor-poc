import * as Yup from "yup";

export const emailPattern = Yup.string("Enter your email").email("Enter a valid email").required("Email is required");

export const passwordPattern = Yup.string("Enter your password")
  .min(8, "Password should be min 8 characters")
  .required("Password is required");

export const LoginValidate = Yup.object({
  email: emailPattern,
  password: passwordPattern,
});