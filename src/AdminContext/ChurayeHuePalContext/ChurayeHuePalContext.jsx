import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ChurayeHuePalContext = createContext();

const ChurayeHuePalContextProvider = ({ children }) => {

    const [video, setVideo] = useState([])
    const [loader, setLoader] = useState(false)

    const GetVideo = async () => {
        setLoader(true);
        try {
            const res = await AxiosHandler.get("churaye-hua-pal/get");
            setVideo(res?.data?.data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoader(false);
        }
    }

    const CreateVideo = async (data) => {
        try {
            const res = await AxiosHandler.post("churaye-hua-pal/create", data);
            toast.success("Video Link created successfully")
            GetVideo();
        } catch (error) {
            console.log(error);
            toast.error("Video Link not created");
        }
    }

    const DeleteVideo = async (id)=>{
        
        try {
            const res = await AxiosHandler.delete(`churaye-hua-pal/delete/${id}`);
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