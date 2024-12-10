import { useAuthContext } from "@/context";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const HappyStoryContext = createContext();

const HappyStoryContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [happyStoryData, sethappyStoryData] = useState();
    const [loader, setLoader] = useState(false);
    const [disable, setDisable] = useState(false);

    const GetHappyStory = async () => {
        const axiosInstance = AxiosHandler();
        setLoader(true)
        try {
            const res = await axiosInstance.get("/happystories/admin-get")
            sethappyStoryData(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }


    const CreateHappyStory = async (data) => {
        const axiosInstance = AxiosHandler();
        setDisable(true);
        try {
            const res = await axiosInstance.post("/happystories/create", data)
            GetHappyStory();
            toast.success("Happy Story Created Successfully");
        } catch (error) {
            console.log(error)
            toast.error("Happy Story Created Failed ")
        } finally {
            setDisable(false);
        }
    }

    const DeleteHappyStory = async (id) => {
        const axiosInstance = AxiosHandler();
        setDisable(true);
        try {
            const res = await axiosInstance.delete(`/happystories/delete/${id}`)
            GetHappyStory();
            toast.success("Happy Story deleted successfully")
        } catch (error) {
            toast.error("Failed to delete story");
        } finally {
            setDisable(false);
        }
    }

    const UpdateHappyStory = async (id, data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.put(`/happystories/update/${id}`, data)
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