import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";


export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [loader, setLoader] = useState(false);
    const userDetails = Cookies.get("USER_DETAILS") ? JSON.parse(Cookies.get("USER_DETAILS")) : {};

    const [userData, setUserData] = useState({
        token: userDetails?.token ?? (localStorage.getItem("token") ?? null),
        role: userDetails?.UserRole || null,
        name: userDetails?.Username || null,
        member: userDetails?.Member || null,
    });

    const [forgetEmail, setForgetEmail] = useState(null);
    const [OTPverify, setOTPVerify] = useState(false);
    const [Registered, setRegistered] = useState(null);
    const [paths, setPaths] = useState([]);


    const AxiosHandler = () => {
        function ApiCall() {
            return axios.create({
                baseURL: import.meta.env.VITE_APP_API_URL,
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${userData?.token}`
                }
            });
        }

        return ApiCall();
    }

    // Register new user
    const RegisterUser = async (credentials) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);

        try {
            const res = await axiosInstance.post("/auth/signup", credentials);
            const data = res?.data
            const userDetails = {
                UserRole: data?.role,
                token: data?.token ? data?.token : null,
                Username: data?.firstName,
                Member: data?.RegisterPackage?.PremiumMember,
            };
            setRegistered({ identifier: credentials?.identifier })
            toast.success(data.message);
            return res.status
        } catch (error) {
            console.log(error);

            toast.error(error.response?.data?.message || "User Registration Failed");
        } finally {
            setLoader(false);
        }
    };

    const CheckUser = async (credentials) => {
        setLoader(true);
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("/auth/check-user", credentials);
            return res
        } catch (error) {
            toast.error(error.response?.data?.message || "User Registration Failed");
        } finally {
            setLoader(false);
        }
    };

    // User login
    const LoginUser = async (credentials) => {
        const axiosInstance = AxiosHandler();

        setLoader(true);
        try {
            const { data } = await axiosInstance.post("/auth/login", credentials);

            const userDetails = {
                UserRole: data?.role,
                token: data?.token,
                Username: data?.firstName,
                Member: data?.RegisterPackage?.PremiumMember,
            };

            Cookies.set("USER_DETAILS", JSON.stringify(userDetails));
            setUserData({ token: data?.token, role: data?.role, name: data?.firstName, member: data?.RegisterPackage?.PremiumMember });
            localStorage.setItem("MemberID", data?.MemberID);
            localStorage.setItem("ProfileImage", data?.profileImage?.ImageURL);
            toast.success(data?.message);
            // window.location.href = "/"
        } catch (error) {

            if (error.status === 302) {
                return error.status
            }
            toast.error(error.response?.data?.message || "User Login Failed");
        } finally {
            setLoader(false);
        }
    };


    // Forget password
    const ForgetPassword = async (data) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            const response = await axiosInstance.post("/auth/sendotp", data);
            toast.success(response?.data?.message);
            setForgetEmail(data);
        } catch (error) {
            toast.error(error.response?.data?.message || "Forgot password failed");
        } finally {
            setLoader(false);
        }
    };

    // Resend otp 
    const SendOtp = async (data) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            const response = await axiosInstance.post(`/auth/sendotp`, data);
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error("Failed to send OTP");
            console.error("SendOtp error:", error);
        } finally {
            setLoader(false);
        }
    };


    // Verify OTP for password reset
    const VerifyOtp = async (data, identifier) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            const response = await axiosInstance.post(`/auth/verify/${data}`, { identifier });
            toast.success(response.data.message);
            if (response.status === 200) {
                setOTPVerify(true);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    };

    const verifyAndLogin = async (code, identifier) => {
        setLoader(true);
        const axiosInstance = AxiosHandler();
        try {
            const response = await axiosInstance.post(`/auth/verifyAndLogin/${code}`, { identifier });
            return response;

        } catch (error) {
            toast.error(error.response?.data?.message || "Forgot password failed");
        } finally {
            setLoader(false);
        }
    };

    // Set new password
    const newPassword = async (data) => {
        setLoader(true);
        const axiosInstance = AxiosHandler();

        try {
            const response = await axiosInstance.post(`/auth/newpassword`, data);
            toast.success(response.data.message);
            window.location.href = "/";
        } catch (error) {
            toast.error(error.response?.data?.message || "Forget password failed");
        } finally {
            setLoader(false);
        }
    };

    // Deactivate account
    const deactivateAccount = async () => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("/deactivate-account/delete");
            toast.success("Account Deactivated");
            Logout();
        } catch (error) {
            toast.error("Failed to deactivate account");
        }
    };

    // Change user password
    const changePassword = async (data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("/auth/changepassword", {
                oldPassword: data?.oldpassword,
                password: data?.confirmPassword,
            });
            toast.success(res?.data?.data?.message || "Password changed successfully");
            window.location.href = "/";
        } catch (error) {
            toast.error(error?.response?.data?.messages);
        }
    };

    // Logout user
    const Logout = () => {
        Cookies.remove("USER_DETAILS");

        localStorage.removeItem("MemberID")
        setUserData({})
        toast.success("Logged out successfully!");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    };



    return (
        <AuthContext.Provider
            value={{
                AxiosHandler,
                paths, setPaths, setOTPVerify,
                RegisterUser,
                loader,
                LoginUser,
                Logout,
                ForgetPassword,
                VerifyOtp,
                forgetEmail,
                OTPverify,
                newPassword,
                deactivateAccount,
                changePassword,
                Registered,
                userData,
                verifyAndLogin, CheckUser,
                setUserData, SendOtp
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
