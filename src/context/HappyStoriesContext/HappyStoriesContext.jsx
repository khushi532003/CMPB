import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const HappyStoriesContext = createContext();

const HappyStoriesContextProvider = ({ children }) => {

    const [happyStory, setHappyStory] = useState([])
    const [loader, setLoader] = useState(false)

    const GetHappyStories = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get("/happystories/get")
            setHappyStory(res.data.data);
        } catch (error) {
            console.log(error);
        }finally{
            setLoader(false)
        }
    }
   
    return(
        <HappyStoriesContext.Provider value={{ happyStory, GetHappyStories, loader }}>
            {children}
        </HappyStoriesContext.Provider>
    )
}

export default HappyStoriesContextProvider;