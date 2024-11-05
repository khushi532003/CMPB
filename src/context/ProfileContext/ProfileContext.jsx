import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const ProfileContext = createContext();


function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState([]);

    const GetProfile = async () => {
        try {
            const res = await AxiosHandler.get("/profile/get")
            setProfile(res.data.profileDetails);
            // console.log(res);
        } catch (error) {
            console.log(error)
            toast.error(error || "Something went wrong")
        };
    };

    const Create = async (api, data) => {
        try {
            const res = await AxiosHandler.post(api, data)
            toast.success(res.data.message || "Data Created successfully")
            GetProfile()
        } catch (error) {
            console.log(error)
            toast.error(error.responses.message || "Something went wrong")
        }
    }

    const Update = async (api, data) => {
        try {
            const res = await AxiosHandler.put(api, data)
            toast.success(res.data.message || "Data Updated Successfully")
            console.log(res)
            GetProfile()
        } catch (error) {
            toast.error(error.responses.message || "Something went wrong")
        }
    }




    useEffect(() => {
        GetProfile();
    }, []);


    return (
        <ProfileContext.Provider value={{ profile, Create, Update }} >
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;