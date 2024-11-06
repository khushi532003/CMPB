import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";

export const AdminMembersContext = createContext();

const AdminMembersContextProvider = ({ children }) => {

    const [freeMembersData, setFreeMembersData] = useState([])
    const [premiumMembersData, setPremiumMembersData] = useState([])


    const freeMembers = async () => {
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${false}`)
            setFreeMembersData(res?.data?.data);
            console.log(res?.data);
        } catch (error) {
            console.log(error);
        }
    }

    const premiumMembers = async () => {
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${true}`)
            setPremiumMembersData(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <AdminMembersContext.Provider value={{ freeMembersData, freeMembers, premiumMembersData, premiumMembers }}>
            {children}
        </AdminMembersContext.Provider>
    )
}

export default AdminMembersContextProvider;