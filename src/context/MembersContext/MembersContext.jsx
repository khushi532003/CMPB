import { AxiosHandler } from "@/config/Axios.config";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MemberContext = createContext();

const MemberContextProvider = ({children}) =>{

    const [activeUser, setActiveUser] = useState([])
    const [userDetails, setUserDetails] = useState({})

    const GetActiveMembers = async ()=>{
        try {
            const res = await AxiosHandler.get("/user/getActiveUser")
            setActiveUser(res.data.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const GetActiveUserById = async (id)=>{
        try {
            const res = await AxiosHandler.get(`/user/getUser/${id}`)
            console.log(res?.data?.profileDetails);
            setUserDetails(res?.data?.profileDetails);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        GetActiveMembers()
    },[])


    return(
        <MemberContext.Provider value={{ activeUser, GetActiveUserById, userDetails }}>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberContextProvider;