import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const HappyStoryContext = createContext();

const HappyStoryContextProvider = ({ children }) => {
    const [happyStoryData, sethappyStoryData] = useState();
    const [loader, setLoader] = useState(false);

    const GetHappyStory = async () => {
        setLoader(true)
        try {
            const res = await AxiosHandler.get("/happystories/admin-get")
            sethappyStoryData(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }


    const CreateHappyStory = async (data) => {
        try {
            const res = await AxiosHandler.post("/happystories/create", data)
            GetHappyStory();
            toast.success("Happy Story Created Successfully");
            window.location.href = "/happy_stories";
        } catch (error) {
            console.log(error)
            toast.error("Happy Story Created Failed ")
        }
    }

    const DeleteHappyStory = async (id) => {
        try {
            const res = await AxiosHandler.delete(`/happystories/delete/${id}`)
            GetHappyStory();
            toast.success("Happy Story deleted successfully")
        } catch (error) {
            console.log("Story delete failed");
            toast.error("Story Deleted");
        }
    }

    const UpdateHappyStory = async (id, data) => {
        try {
            const res = await AxiosHandler.put(`/happystories/update/${id}`, data)
            GetHappyStory();
            toast.success("Story update successfully");
        } catch (error) {
            console.log(error);
            toast.error("update story failed");
        }
    }


    return (
        <HappyStoryContext.Provider value={{ happyStoryData, GetHappyStory, CreateHappyStory, loader, setLoader, DeleteHappyStory, UpdateHappyStory }}>
            {children}
        </HappyStoryContext.Provider>
    )
}
export default HappyStoryContextProvider;