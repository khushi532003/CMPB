import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";

export const MemberContext = createContext();

const MemberContextProvider = ({ children }) => {

    const [activeUser, setActiveUser] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [loader, setLoader] = useState(false);


    const GetActiveMembers = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get("/user/getActiveUser")
            setActiveUser(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    const GetActiveUserById = async (id) => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get(`/user/getUser/${id}`)
            setUserDetails(res?.data?.profileDetails);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }


    return (
        <MemberContext.Provider value={{ activeUser, loader, GetActiveMembers, GetActiveUserById, userDetails }}>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberContextProvider;