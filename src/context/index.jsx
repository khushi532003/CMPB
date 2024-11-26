import { useContext } from "react";
import { AuthContext } from "@/context/authContext/AuthContext";
import { ContactContext } from "./ContactContext/ContactContext";
import { PackageContext } from "./packageContext/PackageContext";
import { ProfileContext } from "./ProfileContext/ProfileContext";
import { HappyStoriesContext } from "./HappyStoriesContext/HappyStoriesContext";
import { MemberContext } from "./MembersContext/MembersContext";
import { ChurayePalContext } from "./ChurayePalContext/ChurayePalContext";

export { default as AuthContextPRovider } from "@/context/authContext/AuthContext";
export { default as ContactContextProvider } from "@/context/ContactContext/ContactContext";
export { default as PackageContextProvider } from "@/context/packageContext/PackageContext";
export { default as ProfileContextProvider } from "@/context/ProfileContext/ProfileContext";
export { default as HappyStoriesContextProvider } from "@/context/HappyStoriesContext/HappyStoriesContext";
export { default as MemberContextProvider } from "@/context/MembersContext/MembersContext";
export { default as ChurayePalContextProvider } from "@/context/ChurayePalContext/ChurayePalContext";

export const useAuthContext = () => useContext(AuthContext);
export const useContactContext = () => useContext(ContactContext);
export const usePackageContext = () => useContext(PackageContext);
export const useProfileContext = () => useContext(ProfileContext);
export const useHappyStoriesContext = () => useContext(HappyStoriesContext);
export const useMembersContext = () => useContext(MemberContext);
export const useChurayePalContext = () => useContext(ChurayePalContext);