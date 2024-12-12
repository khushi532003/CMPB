import { createContext, useState } from "react";
import { useAuthContext } from "..";

export const HappyStoriesContext = createContext();

const HappyStoriesContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [happyStory, setHappyStory] = useState([]);
    const [loader, setLoader] = useState(false);

    const GetHappyStories = async () => {
        const axiosInstance = AxiosHandler();
        setLoader(true)
        try {
            const res = await AxiosHandler.get("/happystories/get")
            setHappyStory(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    return (
        <HappyStoriesContext.Provider value={{ happyStory, GetHappyStories, loader }}>
            {children}
        </HappyStoriesContext.Provider>
    )
}

export default HappyStoriesContextProvider;