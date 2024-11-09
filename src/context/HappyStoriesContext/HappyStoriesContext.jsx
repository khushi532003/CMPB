import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const HappyStoriesContext = createContext();

const HappyStoriesContextProvider = ({ children }) => {

    const [happyStory, setHappyStory] = useState([])

    const GetHappyStories = async () => {
        try {
            const res = await AxiosHandler.get("/happystories/get")
            setHappyStory(res.data.data);
            toast.success("Data fetched successfull");
        } catch (error) {
            console.log(error);
            toast.error("Data fetched Failed");
        }
    }

    return (
        <HappyStoriesContext.Provider value={{ happyStory, GetHappyStories }}>
            {children}
        </HappyStoriesContext.Provider>
    )
}

export default HappyStoriesContextProvider;