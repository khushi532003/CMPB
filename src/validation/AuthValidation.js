import * as yup from "yup";

export const Registerschema = yup.object({
   firstName: yup.string().trim().required("First Name is required").min(2),
   lastName: yup.string().trim().required("Last Name is required").min(2),
   identifier: yup.string().required("Email/Phone is required"),
   password: yup.string().trim().required("Password is required").min(6).max(16),
   confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], "Passwords must match").required("Password is required"),

});

export const LoginSchema = yup.object({
   identifier: yup.string().trim().required("Email/Phone is required"),
   password: yup.string().trim().required("Password is Required")
})

export const CheckUserSchema = yup.object({
   identifier: yup.string().trim().required("Email/Phone is required"),
})
export const VerifyCodeSchema = yup.object({
   identifier: yup.string().trim().required("Email/Phone is required"),
   code: yup.string().trim().min(4).max(4)
})