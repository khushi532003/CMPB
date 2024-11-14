import * as yup from "yup";


export const Registerschema = yup.object({
   firstName: yup.string().trim().required("First Name is required").min(2),
   lastName: yup.string().trim().required("Last Name is required").min(2),
   email: yup.string().trim().required("Email is required").email("Invalid email address"),
   phone: yup.number().required("Phone Number is required").min(10),
   gender: yup.string().trim().required("Gender  is required"),
   password: yup.string().trim().required("Password is required").min(6).max(16),
   confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
   DOB: yup.string().trim().required("DOB is required").test("is-above-18", "You must be at least 18 old",
      (value) => {
         if (!value) return false;
         const today = new Date();
         const birthDate = new Date(value);
         const age = today.getFullYear() - birthDate.getFullYear();
         const monthDiff = today.getMonth() - birthDate.getMonth();
         const dayDiff = today.getDate() - birthDate.getDate();
         if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            return age - 1 >= 18;
         }
         return age >= 18;
      }
   ),

});

export const LoginSchema = yup.object({
   email: yup.string().trim().required("Email is required"),
   password: yup.string().trim().required("Password is Required")
})