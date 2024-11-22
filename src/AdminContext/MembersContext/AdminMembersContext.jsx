import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";

export const AdminMembersContext = createContext();

const AdminMembersContextProvider = ({ children }) => {

    const [freeMembersData, setFreeMembersData] = useState([]);
    const [premiumMembersData, setPremiumMembersData] = useState([]);
    const [countFreeMember, setCountFreeMember] = useState(null);
    const [countPremiumMember, setCountPremiumMember] = useState(null);
    const [loader, setLoader] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [page, setPage] = useState(1);
    const [disable, setDisable] = useState(false);
    const [totalEventUser, setTotalEventuser] = useState([]);


    const TotalMembers = countFreeMember + countPremiumMember;

    const freeMembers = async () => {
        setLoader(true);
        setDisable(true);
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${page}&limit=5&registered=${false}`)
            setFreeMembersData(res?.data?.data);
            setCountFreeMember(res?.data?.data?.length);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
            setDisable(false);
        }
    }

    const premiumMembers = async () => {
        setLoader(true);
        setDisable(true);
        try {
            const res = await AxiosHandler.get(`/user/getAllUserAdmin?page=${page}&limit=5&registered=${true}`)
            setPremiumMembersData(res?.data?.data);
            setCountPremiumMember(res?.data?.data?.length);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
            setDisable(false);
        }
    }

    const GetActiveUserById = async (id) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.get(`profile/admin-get/${id}`)
            setUserDetails(res?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    const TotalEventBookedUser = async () => {
        setLoader(true);
        try {
            const res = await AxiosHandler.get("dashboard/totalEventUser")
            setTotalEventuser(res?.data?.Users);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <AdminMembersContext.Provider value={{ freeMembersData, userDetails, GetActiveUserById, TotalMembers, countPremiumMember, countFreeMember, loader, freeMembers, premiumMembersData, premiumMembers, setPage, page, setDisable, disable, totalEventUser, TotalEventBookedUser }}>
            {children}
        </AdminMembersContext.Provider>
    )
}

export default AdminMembersContextProvider;