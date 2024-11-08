import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProgrammeContext = createContext();

const ProgrammeContextProvider = ({children}) =>{

    const [programmeData, setProgrammeData] = useState([])

    const GetProgramme = async ()=>{
        try {
            const res = await AxiosHandler.get("events/get");
            // console.log(res?.data?.data);
            setProgrammeData(res?.data?.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const createProgramme = async (data)=>{
        try {
            const res = await AxiosHandler.post("/events/create", data)
            console.log(res);
            toast.success("Programme created successfully")
            GetProgramme();
            
        } catch (error) {
            console.log(error);
            toast.error("Programme not created")
            
        }
    }

    const updateProgramme = async (id, data) =>{
        try {
            const res = await AxiosHandler.put(`events/update/${id}`, data);
            console.log(res);
            toast.success("Programme updated successfully")
            
        } catch (error) {
            console.log(error);
            toast.error("Programme not updated")
            
        }
    }

    const DeleteProgramme = async (id)=>{
        try {
            const res = await AxiosHandler.delete(`events/delete/${id}`);
            toast.success("Event deleted successfully");
            GetProgramme();
        } catch (error) {
            console.log(error);
            toast.error("Event not deleted");
        }
    }

    useEffect(()=>{
        GetProgramme()
    },[])

    return(
        <ProgrammeContext.Provider value={{ createProgramme, updateProgramme, programmeData, DeleteProgramme }}>
            {children}
        </ProgrammeContext.Provider>
    )
}

export default ProgrammeContextProvider;