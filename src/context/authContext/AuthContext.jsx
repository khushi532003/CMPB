import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState(Cookies.get("CMPB_TOKEN"));
    const [role, setRole] = useState(Cookies.get("UserRole"));
    const [name, setName] = useState(Cookies.get("Username"));
    const [member, setMember] = useState(Cookies.get("Member"));
    const [forgetEmail, setForgetEmail] = useState(null);
    const [OTPverify, setOTPVerify] = useState(null);
    const [packagePaymentData, setPackagePaymentData] = useState({})
    const [Registered, setRegistered] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    // console.log(userDetails);
    
    

    // Register new user
    const RegisterUser = async (data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/auth/signup", data);
            setRegistered({ email: res?.data?.email })
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "User Registration Failed");
        } finally {
            setLoader(false);
        }
    };

    // User login
    const LoginUser = async (data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/auth/login", data);
            Cookies.set("CMPB_TOKEN", res.data.token);
            Cookies.set("UserRole", res.data.role);
            Cookies.set("Username", res.data.firstName);
            Cookies.set("Member", res?.data?.RegisterPackage?.PremiumMember);
            setToken(res.data.token);
            setRole(res.data.role);
            setName(res.data.firstName);
            setMember(res?.data?.RegisterPackage?.PremiumMember);
            console.log(res?.data?.RegisterPackage?.PremiumMember);
            localStorage.setItem("MemberID", res?.data?.MemberID);
            toast.success(res.data.message);
            setPackagePaymentData(res?.data);
            setUserDetails(res?.data);
            window.location.href = "/"
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "User Login Failed");
        } finally {
            setLoader(false);
        }
    };



    // Forget password
    const ForgetPassword = async (data) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post("/auth/sendotp", data);
            toast.success(response.data.message);
            setForgetEmail(data);
        } catch (error) {
            toast.error(error.response?.data?.message || "Forgot password failed");
        } finally {
            setLoader(false);
        }
    };

    // Verify OTP for password reset
    const VerifyOtp = async (data, email) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post(`/auth/verify/${data}`, { email });
            toast.success(response.data.message);
            if (response.status === 200) {
                setOTPVerify(true);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Forgot password failed");
            console.log(error);
        } finally {
            setLoader(false);
        }
    };

    // Set new password
    const newPassword = async (data) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post(`/auth/newpassword`, data);
            toast.success(response.data.message);
            console.log(response);
            window.location.href = "/";
        } catch (error) {
            toast.error(error.response?.data?.message || "Forget password failed");
            console.log(error);
        } finally {
            setLoader(false);
        }
    };

    // Deactivate account
    const deactivateAccount = async () => {
        try {
            const res = await AxiosHandler.post("/deactivate-account/delete");
            toast.success("Account Deactivated");
            console.log(res);
            Logout();
        } catch (error) {
            toast.error("Failed to deactivate account");
            console.log(error);
        }
    };

    // Change user password
    const changePassword = async (data) => {
        try {
            const res = await AxiosHandler.post("/auth/changepassword", {
                oldPassword: data?.oldpassword,
                password: data?.confirmPassword,
            });
            console.log(res);
            toast.success(res?.data?.data?.message || "Password changed successfully");
            window.location.href = "/";
        } catch (error) {
            toast.error(error?.response?.data?.messages);
        }
    };

    // Logout user
    const Logout = () => {
        Cookies.remove("CMPB_TOKEN");
        Cookies.remove("UserRole");
        Cookies.remove("Username"); // Remove the username cookie
        setToken(null);
        setRole(null);
        setName(null);
        setMember(null);
        toast.success("Logged out successfully!");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    };

    return (
        <AuthContext.Provider
            value={{
                RegisterUser,
                userDetails,
                member,
                loader,
                packagePaymentData,
                LoginUser,
                token,
                role,
                Logout,
                ForgetPassword,
                VerifyOtp,
                forgetEmail,
                OTPverify,
                newPassword,
                deactivateAccount,
                changePassword,
                name,
                Registered
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
