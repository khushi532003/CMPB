
import { createContext, useState } from "react";
import { useAuthContext } from "..";

export const MemberContext = createContext();

const MemberContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [activeUser, setActiveUser] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [loader, setLoader] = useState(false);

    const GetActiveMembers = async () => {
        const axiosInstance = AxiosHandler();
        setLoader(true)
        try {
            const res = await axiosInstance.get("/user/getActiveUser")
            setActiveUser(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    const GetActiveUserById = async (id) => {
        const axiosInstance = AxiosHandler();
        setLoader(true)
        try {
            const res = await axiosInstance.get(`/user/getUser/${id}`)
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