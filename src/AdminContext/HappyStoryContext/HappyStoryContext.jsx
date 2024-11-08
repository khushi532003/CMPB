import { AxiosHandler } from "@/config/Axios.config";
import { useAuthContext } from "@/context";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const HappyStoryContext = createContext();

const HappyStoryContextProvider = ({ children }) => {
    const [happyStoryData, sethappyStoryData] = useState();
    const [loader, setLoader] = useState(false);
    const { token } = useAuthContext()

    const GetHappyStory = async () => {
        try {
            const res = await AxiosHandler.get("/happystories/admin-get")
            sethappyStoryData(res?.data?.data);
            toast.success("Happy story created successfully")
            console.log(res.data?.data);
        } catch (error) {
            console.log(error);
            toast.error("Happy story failed to fetch")
        }
    }


    const CreateHappyStory = async (data) => {
        setLoader(true)
        try {
            const res = await AxiosHandler.post("/happystories/create", data)

            toast.success("Happy Story Created Successfully");
        } catch (error) {
            console.log(error)
            toast.error("Happy Story Created Failed ")
        } finally {
            setLoader(false);
        }
    }

    const DeleteHappyStory = async (id) => {
        try {
            const res = await AxiosHandler.delete(`/happystories/delete/${id}`)
            GetHappyStory();
            console.log(res);
            toast.success("Happy Story deleted successfully")
        } catch (error) {
            console.log("Story delete failed")
        }
    }

    useEffect(() => {
        GetHappyStory()
    }, [])


    return (
        <HappyStoryContext.Provider value={{ happyStoryData, GetHappyStory, CreateHappyStory, loader, setLoader, DeleteHappyStory }}>
            {children}
        </HappyStoryContext.Provider>
    )
}
export default HappyStoryContextProvider;