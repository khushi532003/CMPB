import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState([]);
    const [loader, setLoader] = useState(false);


    const GetProfile = async () => {
        setLoader(true);
        try {
            const res = await AxiosHandler.get("/profile/get")
            setProfile(res?.data?.profileDetails);
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoader(false);
        }
    };


    const Create = async (api, data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post(api, data)
            GetProfile();
            console.log("Create",res)
            toast.success(res?.data?.message || "Data Created successfully")
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.[0]?.message || "Something went wrong")
        } finally {
            setLoader(false);
        }
    }

    const Update = async (api, data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.put(api, data)
            console.log("Update",res);
            
            GetProfile();
            toast.success(res?.data?.message || "Data Updated Successfully")
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.[0]?.message || "Something went wrong")
        }
        finally {
            setLoader(false);
        }
    }


    return (
        <ProfileContext.Provider value={{ profile, setProfile, Create, Update, GetProfile, loader }} >
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;