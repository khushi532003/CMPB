import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";

export const HappyStoriesContext = createContext();

const HappyStoriesContextProvider = ({children})=>{

    const [happyStory, setHappyStory] = useState([])

    const GetHappyStories = async ()=>{
        try {
            const res = await AxiosHandler.get("/happystories/get")
            console.log(res.data.data);
            setHappyStory(res.data.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        GetHappyStories()
    },[])
    return(
        <HappyStoriesContext.Provider value={{ happyStory }}>
            {children}
        </HappyStoriesContext.Provider>
    )
}

export default HappyStoriesContextProvider;