import ForgetPassword from "@/authPages/ForgetPassword";
import Login from "@/authPages/Login";
import Register from "@/authPages/Register";
import VerifyOtp from "@/authPages/VerifyOtp";
import NewPassword from "@/authPages/NewPassword";
import VerifyAccount from "@/authPages/VerifyAccount";

export const AuthRoutes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/forget_password",
        element: <ForgetPassword />
    },
    {
        path: "/verify_otp",
        element: <VerifyOtp />
    },
    {
        path: "/verify_account",
        element: <VerifyAccount />
    },
    {
        path: "/new_password",
        element: <NewPassword />
    }
]