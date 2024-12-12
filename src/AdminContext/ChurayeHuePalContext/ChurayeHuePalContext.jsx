
import { useAuthContext } from "@/context";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ChurayeHuePalContext = createContext();

const ChurayeHuePalContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [video, setVideo] = useState([])
    const [loader, setLoader] = useState(false)

    const GetVideo = async () => {
        setLoader(true);
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("churaye-hua-pal/get");
            setVideo(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    const CreateVideo = async (data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("churaye-hua-pal/create", data);
            toast.success("Video Link created successfully")
            GetVideo();
        } catch (error) {
            console.log(error);
            toast.error("Video Link not created");
        }
    }

    const DeleteVideo = async (id) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.delete(`churaye-hua-pal/delete/${id}`);
            toast.success("Video deleted successfully");
            GetVideo();
        } catch (error) {
            console.log(error);
            toast.error("Video not deleted");
        }
    }



    return (
        <ChurayeHuePalContext.Provider value={{ CreateVideo, loader, video, GetVideo, DeleteVideo }}>
            {children}
        </ChurayeHuePalContext.Provider>
    )
}



export default ChurayeHuePalContextProvider;