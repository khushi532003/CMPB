import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";

export const PackageContext = createContext();

const PackageContextProvider = ({ children }) => {

    const [programme, setProgramme] = useState({});
    const [packageData, setPackageData] = useState({});
    const [eventPurchaseData, setEventPurchaseData] = useState(null);

    const GetProgramme = async () => {
        try {
            const res = await AxiosHandler.get("/events/get");
            setProgramme(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const GetEventPurchaseData = async () => {
        try {
            const res = await AxiosHandler.get("events/getBookedEvent");
            setEventPurchaseData(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const GetPackage = async () => {
        try {
            const res = await AxiosHandler.get("/RegisterPackage/get");
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