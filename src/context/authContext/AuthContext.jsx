import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState(Cookies.get("CMPB_TOKEN"));
    const [role, setRole] = useState(Cookies.get('UserRole'));
    const [forgetEmail, setForgetEmail] = useState(null)
    const [OTPverify, setOTPVerify] = useState(null)

    const RegisterUser = async (data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/auth/signup", data)
            Cookies.set("CMPB_TOKEN", res.data.token)
            Cookies.set("UserRole", res.data.role)
            setToken(res.data.token)
            setRole(res.data.role)
            toast.success(res.data.message)
            console.log(res)
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "User Registration Failed");
        } finally {
            setLoader(false)
        };
    };

    const LoginUser = async (data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/auth/login", data)
            Cookies.set("CMPB_TOKEN", res.data.token)
            Cookies.set("UserRole", res.data.role)
            setToken(res.data.token);
            setRole(res.data.role);
            localStorage.setItem("MemberID", res?.data?.MemberID);
            toast.success(res.data.message)
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "User Login Failed");
        } finally {
            setLoader(false)
        };
    };

    const ForgetPassword = async (data) => {
        setLoader(true);

        try {
            const response = await AxiosHandler.post("/auth/sendotp", data);
            toast.success(response.data.message);
            setForgetEmail(data);
        } catch (error) {
            toast.error(error.response?.data?.message || "Forge password failed");
        } finally {
            setLoader(false);
        }
    }

    const VerifyOtp = async (data, email) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post(`/auth/verify/${data}`, { email })
            toast.success(response.data.message);
            if (response.status == 200) {
                setOTPVerify(true)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Forge password failed");
            console.log(error)
        } finally {
            setLoader(false);
        }
    }

    const newPassword = async (data) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post(`/auth/newpassword`, data)
            toast.success(response.data.message);
            console.log(response);
            window.location.href = "/";
        } catch (error) {
            toast.error(error.response?.data?.message || "Forget password failed");
            console.log(error)
        } finally {
            setLoader(false);
        }
    }

    const deactivateAccount = async () => {
        try {
            const res = await AxiosHandler.post("/deactivate-account/delete");
            toast.success("Account Deactivated");
            console.log(res);
            Logout()

        } catch (error) {
            toast.error("Failed to deactivate account");
            console.log(error);
        }
    };

    const changePassword = async (data) => {
        try {
            const res = await AxiosHandler.post("/auth/changepassword", { oldPassword: data?.oldpassword, password: data?.confirmPassword });
            console.log(res);
            toast.success(res?.data?.data?.message || "Password change successfully");
            window.location.href = "/";
        } catch (error) {
            toast.error(error?.response?.data?.messages);
        }
    };

    const Logout = () => {
        Cookies.remove("CMPB_TOKEN");
        Cookies.remove("UserRole");
        setToken(null);
        setRole(null);
        toast.success("Logged out successfully!");
        setTimeout(() => {
            window.location.href = "/"
        }, 1000);
    };

    return (
        <AuthContext.Provider value={{ RegisterUser, loader, LoginUser, token, role, Logout, ForgetPassword, VerifyOtp, forgetEmail, OTPverify, newPassword, deactivateAccount, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;