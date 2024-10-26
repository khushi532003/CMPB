import ForgetPassword from "@/authPages/ForgetPassword";
import Login from "@/authPages/Login";
import Register from "@/authPages/Register";
import VerifyOtp from "@/authPages/VerifyOtp";
import NewPassword from "@/authPages/NewPassword";

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
        path: "/forgetPassword",
        element: <ForgetPassword />
    },
    {
        path: "/verifyOtp",
        element: <VerifyOtp />
    },
    {
        path: "/newPassword",
        element: <NewPassword />
    }
]