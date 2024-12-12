
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "..";

export const ChurayePalContext = createContext();

const ChurayePalContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [videoURLData, setVideoURLData] = useState([])

    const GetVideo = async () => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("/churaye-hua-pal/get");
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