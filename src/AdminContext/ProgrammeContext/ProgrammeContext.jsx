import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProgrammeContext = createContext();

const ProgrammeContextProvider = ({children}) =>{

    const [programmeData, setProgrammeData] = useState([])
    const [packageData, setPackageData] = useState([])
    console.log(packageData);
    

    const GetProgramme = async ()=>{
        try {
            const res = await AxiosHandler.get("events/get");
            console.log(res?.data?.data);
            setProgrammeData(res?.data?.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    const GetPackage = async ()=>{
        try {
            const res = await AxiosHandler.get("RegisterPackage/get");
            console.log(res?.data?.data);
            setPackageData(res?.data?.data);
            
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
    const createPackage = async (data)=>{
        try {
            const res = await AxiosHandler.post("RegisterPackage/create", data)
            console.log(res);
            toast.success("Package created successfully")
            GetPackage();
            
        } catch (error) {
            console.log(error);
            toast.error("Package not created")
            
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

    useEffect(()=>{
        GetPackage()
    },[])

    return(
        <ProgrammeContext.Provider value={{ createProgramme, updateProgramme, programmeData, DeleteProgramme, packageData, createPackage }}>
            {children}
        </ProgrammeContext.Provider>
    )
}

export default ProgrammeContextProvider;