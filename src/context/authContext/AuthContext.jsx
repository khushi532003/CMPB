import { AxiosHandler } from "@/config/Axios.config";
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();


function AuthContextProvider({ children }) {
    const [loader,setLoader] = useState(false)

    const RegisterUser = async (data)=> {
        console.log(data)
        setLoader(true)
        try {
            const res = await axios.post("https://cmpb-backend.onrender.com/api/v1/user/signup",data)
            console.log(res)
            toast.success("done")
        } catch (error) {
            console.log(error)
            toast.error(error.response.message || "User Registration Failed")
        }finally{
            setLoader(false)
        }
    }


    return (
        <AuthContext.Provider value={{ RegisterUser, loader }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;