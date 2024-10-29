import { useContext } from "react";
import { AuthContext } from "@/context/authContext/AuthContext";
import { ContactContext } from "./ContactContext/ContactContext";


export { default as AuthContextPRovider } from "@/context/authContext/AuthContext";
export { default as ContactContextProvider } from "@/context/ContactContext/ContactContext";




export const useAuthContext = () => useContext(AuthContext);
export const useContactContext = () => useContext(ContactContext);