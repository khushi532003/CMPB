import { useContext } from "react";
import { AuthContext } from "@/context/authContext/AuthContext";
import { ContactContext } from "./ContactContext/ContactContext";
import { PackageContext } from "./packageContext/PackageContext";
import { ProfileContext } from "./ProfileContext/ProfileContext";


export { default as AuthContextPRovider } from "@/context/authContext/AuthContext";
export { default as ContactContextProvider } from "@/context/ContactContext/ContactContext";
export { default as PackageContextProvider } from "@/context/packageContext/PackageContext";
export { default as ProfileContextProvider } from "@/context/ProfileContext/ProfileContext";




export const useAuthContext = () => useContext(AuthContext);
export const useContactContext = () => useContext(ContactContext);
export const usePackageContext = () => useContext(PackageContext);
export const useProfileContext = () => useContext(ProfileContext);
