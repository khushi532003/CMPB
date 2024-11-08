import { AxiosHandler } from "@/config/Axios.config";
import { createContext,  useState } from "react";

export const PackageContext = createContext();

const PackageContextProvider = ({ children }) => {

    const [programme, setProgramme] = useState({});

    const GetProgramme = async () => {
        try {
            const res = await AxiosHandler.get("/events/get");
            // console.log("respos of package", res?.data?.data);
            setProgramme(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(()=>{
    //     GetProgramme()
    // },[])

    return (
        <PackageContext.Provider value={{ programme, GetProgramme }}>
            {children}
        </PackageContext.Provider>
    )
}

export default PackageContextProvider;