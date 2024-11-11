import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";

export const AdminMembersContext = createContext();

const AdminMembersContextProvider = ({ children }) => {

    const [freeMembersData, setFreeMembersData] = useState([])
    const [premiumMembersData, setPremiumMembersData] = useState([])
    const [loader, setLoader] = useState(false)

    const freeMembers = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${false}`)
            setFreeMembersData(res?.data?.data);
            console.log(res?.data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoader(false)
        }
    }

    const premiumMembers = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${true}`)
            setPremiumMembersData(res?.data?.data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoader(false)
        }
    }



    return (
        <AdminMembersContext.Provider value={{ freeMembersData, loader, freeMembers, premiumMembersData, premiumMembers }}>
            {children}
        </AdminMembersContext.Provider>
    )
}

export default AdminMembersContextProvider;