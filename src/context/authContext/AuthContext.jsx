import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";


export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [loader, setLoader] = useState(false);
    const userDetails = Cookies.get("USER_DETAILS") ? JSON.parse(Cookies.get("USER_DETAILS")) : {};

    const [userData, setUserData] = useState({
        token: userDetails?.token || null,
        role: userDetails?.UserRole || null,
        name: userDetails?.Username || null,
        member: userDetails?.Member || null,
    });

    const [forgetEmail, setForgetEmail] = useState(null);
    const [OTPverify, setOTPVerify] = useState(false);
    const [Registered, setRegistered] = useState(null);
    const [paths, setPaths] = useState([])


    // Register new user
    const RegisterUser = async (credentials) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/auth/signup", credentials);
            const data = res?.data
            const userDetails = {
                UserRole: data?.role,
                token: data?.token ? data?.token : null,
                Username: data?.firstName,
                Member: data?.RegisterPackage?.PremiumMember,
            };
            setRegistered({ identifier: data.email ?? data.phone })
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
        try {
            const res = await AxiosHandler.post("/auth/check-user", credentials);
            return res
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "User Registration Failed");
        } finally {
            setLoader(false);
        }
    };

    // User login
    const LoginUser = async (credentials) => {
        console.log(credentials);

        setLoader(true);
        try {
            const { data } = await AxiosHandler.post("/auth/login", credentials);

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
            console.log(error);

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
        setLoader(true);
        try {
            const response = await AxiosHandler.post("/auth/sendotp", data);
            toast.success(response?.data?.message);
            setForgetEmail(data);
        } catch (error) {
            toast.error(error.response?.data?.message || "Forgot password failed");
        } finally {
            setLoader(false);
        }
    };

    // Verify OTP for password reset
    const VerifyOtp = async (data, identifier) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post(`/auth/verify/${data}`, { identifier });
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
    const verifyAndLogin = async (code, identifier) => {
        setLoader(true);
        try {
            const response = await AxiosHandler.post(`/auth/verifyAndLogin/${code}`, { identifier });
            const data = response?.data
            console.log(response);

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

            if (response.status === 200) {
                setOTPVerify(true);
            }
            toast.success(data.message);

            window.location.href = "/"
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
        console.log(data);

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
        Cookies.remove("USER_DETAILS");
        setUserData({})
        toast.success("Logged out successfully!");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    };



    return (
        <AuthContext.Provider
            value={{
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
                verifyAndLogin, CheckUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
