import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";

export const ChurayePalContext = createContext();

const ChurayePalContextProvider = ({ children }) => {
    const [videoURLData, setVideoURLData] = useState([])

    const GetVideo = async () => {
        try {
            const res = await AxiosHandler.get("/churaye-hua-pal/get");
            setVideoURLData(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetVideo()
    }, [])

    return (
        <ChurayePalContext.Provider value={{ videoURLData }}>
            {children}
        </ChurayePalContext.Provider>
    )
}

export default ChurayePalContextProvider;