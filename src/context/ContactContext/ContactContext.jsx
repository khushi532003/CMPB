
import { createContext } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "..";

export const ContactContext = createContext()

const ContactContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const createContact = async (data) => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.post("/contact/create", data)
            toast.success("Message sent successfully !")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ContactContext.Provider value={{ createContact }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;