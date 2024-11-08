import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AdminContactContext = createContext();

const AdminContactContextProvider = ({children}) =>{

    const [contactQuery, setContactQuery] = useState([])

    const GetContactQueries = async ()=>{
        try {
            const res = await AxiosHandler.get("contact/get?page=1&limit=5");
            console.log(res?.data?.data);
            setContactQuery(res?.data?.data);
                    
        } catch (error) {
            console.log(error);            
        }
    }

    const DeleteQuery  = async (id)=>{
        try {
            const res = await AxiosHandler.delete(`contact/delete/${id}`);
            toast.success("Query deleted successfully");
            GetContactQueries();
        } catch (error) {
            console.log(error);
            toast.error("Query not deleted");            
        }
    }

  

    return(
        <AdminContactContext.Provider value={{ contactQuery, DeleteQuery }}>
            {children}
        </AdminContactContext.Provider>
    )
}

export default AdminContactContextProvider;