import * as yup from "yup";


export const Registerschema = yup.object({
   firstName: yup.string().required("First Name is required").min(2),
   lastName: yup.string().required("Last Name is required").min(2),
   email: yup.string().required("Email is required").email("Invalid email address"),
   phone: yup.number().required("Phone Number is required").min(10),
   gender: yup.string().required("Gender  is required"),
   password: yup.string().required("Password is required").min(6).max(16),
   confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
   DOB: yup.string().required("DOB  is required")
})

export const LoginSchema = yup.object({
   email: yup.string().required("Email is required"),
   password: yup.string().required("Password is Required")
})