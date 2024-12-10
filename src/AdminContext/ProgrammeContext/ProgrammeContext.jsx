import { useAuthContext } from "@/context";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProgrammeContext = createContext();

const ProgrammeContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [programmeData, setProgrammeData] = useState([]);
    const [packageData, setPackageData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [disable, setDisable] = useState(false);
    const [page, setPage] = useState(1);
    const [eventClints, setEventClints] = useState();

    const GetProgramme = async () => {
        setLoader(true);
        setDisable(true);
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get(`events/get-admin?page=${page}&limit=${5}`);
            setProgrammeData(res?.data?.data);
            setEventClints(res?.data?.data?.[0]?.ClientDetails)
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
            setDisable(false);
        }
    }

    const GetPackage = async () => {
        setLoader(true)
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("RegisterPackage/get");
            setPackageData(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    }

    const GetBookedEvent = async (id) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get(`events/UserWhoBookedEvent/${id}`);
            return res?.data?.data?.[0];
        } catch (error) {
            toast.error("ERROR ", error)
        }
    }

    const createProgramme = async (data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("/events/create", data)

            toast.success("Programme created successfully");
            GetProgramme();
        } catch (error) {
            toast.error("Programme not created")
        }
    }

    const createPackage = async (data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("RegisterPackage/create", data)

            toast.success("Package created successfully")
            GetPackage();
        } catch (error) {
            toast.error("Package not created")
        }
    }

    const UpdatePackage = async (id, data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.put(`/RegisterPackage/update/${id}`, data);
            GetPackage();
            toast.success(res?.data?.message || "Register Package Updated Successfully");
        } catch (error) {
            toast.error(error?.message || "Update package failed");
        }
    }

    const updateProgramme = async (id, data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.put(`events/update/${id}`, data);
            GetProgramme();
            toast.success("Events updated successfully")
        } catch (error) {
            console.log(error);
            toast.error("Events not updated")
        }
    }

    const DeleteProgramme = async (id) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.delete(`events/delete/${id}`);
            toast.success("Event deleted successfully");
            GetProgramme();
        } catch (error) {
            toast.error("Event not deleted");
        }
    }

    useEffect(() => {
        GetPackage()
    }, [])

    return (
        <ProgrammeContext.Provider value={{ createProgramme, loader, GetProgramme, updateProgramme, programmeData, DeleteProgramme, packageData, createPackage, UpdatePackage, GetBookedEvent, disable, setDisable, page, setPage, eventClints, setEventClints }}>
            {children}
        </ProgrammeContext.Provider>
    )
}

export default ProgrammeContextProvider;