import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";

export const AdminMembersContext = createContext();

const AdminMembersContextProvider = ({ children }) => {

    const [freeMembersData, setFreeMembersData] = useState([])
    const [premiumMembersData, setPremiumMembersData] = useState([])
    const [countFreeMember, setCountFreeMember] = useState(null)
    const [countPremiumMember, setCountPremiumMember] = useState(null)
    const [loader, setLoader] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    console.log(userDetails);

    const TotalMembers = countFreeMember + countPremiumMember;

    const freeMembers = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${false}`)
            setFreeMembersData(res?.data?.data);
            setCountFreeMember(res?.data?.data.length);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    const premiumMembers = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${1}&limit=${5}&registered=${true}`)
            setPremiumMembersData(res?.data?.data);
            setCountPremiumMember(res?.data?.data.length);

        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    const GetActiveUserById = async (id) => {
        try {
            const res = await AxiosHandler.get(`profile/admin-get/${id}`)
            console.log(res?.data);
            setUserDetails(res?.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminMembersContext.Provider value={{ freeMembersData, userDetails, GetActiveUserById, TotalMembers, countPremiumMember, countFreeMember, loader, freeMembers, premiumMembersData, premiumMembers }}>
            {children}
        </AdminMembersContext.Provider>
    )
}

export default AdminMembersContextProvider;