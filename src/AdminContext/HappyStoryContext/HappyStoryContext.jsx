import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const HappyStoryContext = createContext();

const HappyStoryContextProvider = ({ children }) => {
    const [happyStoryData, sethappyStoryData] = useState();

    const GetHappyStory = async () => {
        try {
            const res = await AxiosHandler.get("/happystories/admin-get")
            sethappyStoryData(res?.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }


    const CreateHappyStory = async (data) => {
        try {
            const res = await AxiosHandler.post("/happystories/create", data)
            console.log(res.data)
            toast.success("Happy Story Created Successfully")
        } catch (error) {
            console.log(error)
            toast.error("Happy Story Created Failed")
        }
    }


    return (
        <HappyStoryContext.Provider value={{ happyStoryData, GetHappyStory, CreateHappyStory }}>
            {children}
        </HappyStoryContext.Provider>
    )
}
export default HappyStoryContextProvider;