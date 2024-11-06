import { AxiosHandler } from "@/config/Axios.config";
import { createContext } from "react";
import { toast } from "react-toastify";

export const ProgrammeContext = createContext();

const ProgrammeContextProvider = ({children}) =>{

    const createProgramme = async (data)=>{
        try {
            const res = await AxiosHandler.post("/events/create", data)
            console.log(res);
            toast.success("Programme created successfully")
            
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
    return(
        <ProgrammeContext.Provider value={{ createProgramme, updateProgramme }}>
            {children}
        </ProgrammeContext.Provider>
    )
}

export default ProgrammeContextProvider;