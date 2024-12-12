import { useAuthContext } from "@/context";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContactContext = createContext();

const AdminContactContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [contactQuery, setContactQuery] = useState([]);
    const [loader, setLoader] = useState(false);

    const GetContactQueries = async () => {
        const axiosInstance = AxiosHandler();
        setLoader(true)
        try {
            const res = await axiosInstance.get("contact/get?page=1&limit=5");
            setContactQuery(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    const DeleteQuery = async (id) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.delete(`contact/delete/${id}`);
            toast.success("Query deleted successfully");
            GetContactQueries();
        } catch (error) {
            console.log(error);
            toast.error("Query not deleted");
        }
    }



    return (
        <AdminContactContext.Provider value={{ contactQuery, loader, DeleteQuery, GetContactQueries }}>
            {children}
        </AdminContactContext.Provider>
    )
}

export default AdminContactContextProvider;