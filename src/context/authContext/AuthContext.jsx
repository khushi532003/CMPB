import { AxiosHandler } from "@/config/Axios.config";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();


function AuthContextProvider({ children }) {
    const [loader, setLoader] = useState(false)
    const [token, setToken] = useState(Cookies.get("token"))
    const [roal, setRoal] = useState(Cookies.get('roal'))

    const RegisterUser = async (data) => {
        setLoader(true)
        try {
            const res = await AxiosHandler.post("/user/signup", data)
            setToken(res.data.token);
            setRoal(res.data.roal)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
            toast.error(error.response.message || "User Registration Failed")
        } finally {
            setLoader(false)
        }
    }



    const LoginUser = async (data) => {
        setLoader(true)
        try {
            const res = await AxiosHandler.post("/user/login", data)
            setToken(res.data.token)
            setRoal(res.data.roal)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
            toast.error(error.response.message || "User Login Failed")
        } finally {
            setLoader(false)
        }
    }



    return (
        <AuthContext.Provider value={{ RegisterUser, loader, LoginUser, token, roal, test }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;