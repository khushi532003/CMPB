import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ChurayeHuePalContext = createContext();

const ChurayeHuePalContextProvider = ({ children }) => {

    const [video, setVideo] = useState([])

    const GetVideo = async () => {
        try {
            const res = await AxiosHandler.get("churaye-hua-pal/get");
            console.log("video", res?.data?.data?.[0]?.VideoURL);
            setVideo(res?.data?.data);

        } catch (error) {
            console.log(error);

        }
    }

    const CreateVideo = async (data) => {
        try {
            const res = await AxiosHandler.post("churaye-hua-pal/create", data);
            console.log(res);
            toast.success("Video Link created successfully")
            GetVideo()

        } catch (error) {
            console.log(error);
            toast.error("Video Link not created ")
        }
    }

    const DeleteVideo = async (id)=>{
        
        try {
            const res = await AxiosHandler.delete(`churaye-hua-pal/delete/${id}`);
            console.log(res);
            toast.success("Video deleted successfully")
            GetVideo();
        } catch (error) {
            console.log(error);
            toast.error("Video not deleted")   
        }
    }



    return (
        <ChurayeHuePalContext.Provider value={{ CreateVideo, video, GetVideo, DeleteVideo }}>
            {children}
        </ChurayeHuePalContext.Provider>
    )
}



export default ChurayeHuePalContextProvider;