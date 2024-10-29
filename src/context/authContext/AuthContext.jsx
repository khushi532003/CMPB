import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [loader, setLoader] = useState(false);
    const [token, setToken] = useState(Cookies.get("CMPB_TOKEN"));
    const [role, setRole] = useState(Cookies.get('UserRole'));

    const RegisterUser = async (data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/user/signup", data)
            Cookies.set("CMPB_TOKEN", res.data.token)
            Cookies.set("UserRole", res.data.role)
            setToken(res.data.token)
            setRole(res.data.role)
            toast.success(res.data.message)
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
            const res = await AxiosHandler.post("/user/login", data)
            Cookies.set("CMPB_TOKEN", res.data.token)
            Cookies.set("UserRole", res.data.role)
            setToken(res.data.token)
            setRole(res.data.role)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "User Login Failed");
        } finally {
            setLoader(false)
        };
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
        <AuthContext.Provider value={{ RegisterUser, loader, LoginUser, token, role, Logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
