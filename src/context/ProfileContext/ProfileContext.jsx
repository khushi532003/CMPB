import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "..";

export const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
    const { AxiosHandler } = useAuthContext();
    const [profile, setProfile] = useState([]);
    const [loader, setLoader] = useState(false);
    const [packagePurchaseData, setPackagePurchaseData] = useState(null);

    const GetProfile = async () => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            const res = await axiosInstance.get("/profile/get")
            setProfile(res?.data?.profileDetails);
            setPackagePurchaseData(res?.data?.profileDetails?.user?.RegisterPackage);
        } catch (error) {
            toast.error(error?.response?.data?.message || "Fetched Data Error");
        }
        finally {
            setLoader(false);
        }
    };

    const Create = async (api, data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post(api, data)
            GetProfile();
            toast.success(res?.data?.message || "Data Created successfully")
        } catch (error) {
            toast.error(error?.response?.data?.[0]?.message || "Created Data Error")
        }
    }

    const Update = async (api, data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.put(api, data)
            GetProfile();
            toast.success(res?.data?.message || "Data Updated Successfully")
        } catch (error) {
            toast.error(error?.response?.data?.[0]?.message || "Update data error")
        }
    }

    return (
        <ProfileContext.Provider value={{ profile, packagePurchaseData, setProfile, Create, Update, GetProfile, loader }} >
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;