import { AxiosHandler } from "@/config/Axios.config";
import { createContext,  useState } from "react";

export const PackageContext = createContext();

const PackageContextProvider = ({ children }) => {

    const [programme, setProgramme] = useState({});
    const [packageData, setPackageData] = useState({});

    const GetProgramme = async () => {
        try {
            const res = await AxiosHandler.get("/events/get");
            setProgramme(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const GetPackage = async () => {
        try {
            const res = await AxiosHandler.get("/RegisterPackage/get");
            console.log("respos of package", res?.data?.data);
            setPackageData(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(()=>{
    //     GetProgramme()
    // },[])

    return (
        <PackageContext.Provider value={{ programme, GetProgramme, packageData, GetPackage }}>
            {children}
        </PackageContext.Provider>
    )
}

export default PackageContextProvider;