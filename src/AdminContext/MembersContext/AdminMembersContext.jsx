import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";

export const AdminMembersContext = createContext();

const AdminMembersContextProvider = ({ children }) => {

    const [freeMembersData, setFreeMembersData] = useState([])


    const freeMembers = async () => {
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${false}`)

            setFreeMembersData(res?.data?.data);


        } catch (error) {

            console.log(error);
        }

    }



    return (
        <AdminMembersContext.Provider value={{ freeMembersData, freeMembers }}>
            {children}
        </AdminMembersContext.Provider>
    )
}

export default AdminMembersContextProvider;