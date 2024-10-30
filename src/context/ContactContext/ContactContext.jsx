import { AxiosHandler } from "@/config/Axios.config";
import { createContext } from "react";
import { toast } from "react-toastify";

export const ContactContext = createContext()

const ContactContextProvider = ({children})=>{

    const createContact = async (data)=>{
            try {
                console.log(data);                
                const res = await AxiosHandler.post("/contact/create", data)
                toast.success("Message sent successfully !")
                console.log(res.data);                
            } catch (error) {
                console.log(error);                
            }
    }
    return(
        <ContactContext.Provider value={{ createContact }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;