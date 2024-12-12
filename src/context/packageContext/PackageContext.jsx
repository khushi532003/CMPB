import { createContext, useState } from "react";
import { useAuthContext } from "..";

export const PackageContext = createContext();

const PackageContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [programme, setProgramme] = useState({});
    const [packageData, setPackageData] = useState({});
    const [eventPurchaseData, setEventPurchaseData] = useState(null);

    const GetProgramme = async () => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("/events/get");
            setProgramme(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const GetEventPurchaseData = async () => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("events/getBookedEvent");
            setEventPurchaseData(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const GetPackage = async () => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("/RegisterPackage/get");
            setPackageData(res?.data?.data);
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <PackageContext.Provider value={{ programme, eventPurchaseData, GetEventPurchaseData, GetProgramme, packageData, GetPackage }}>
            {children}
        </PackageContext.Provider>
    )
}

export default PackageContextProvider;