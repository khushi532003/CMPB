import { useContext } from "react";
import { AdminMembersContext } from "./MembersContext/AdminMembersContext";
import { ProgrammeContext } from "./ProgrammeContext/ProgrammeContext";
import { ChurayeHuePalContext } from "./ChurayeHuePalContext/ChurayeHuePalContext";
import { HappyStoryContext } from "./HappyStoryContext/HappyStoryContext";
import { AdminContactContext } from "./AdminContactContext/AdminContactContext";
import { BlogContext } from "./BlogContext/BlogContext";

export { default as AdminMembersContextProvider } from "./MembersContext/AdminMembersContext";
export { default as ProgrammeContextProvider } from "./ProgrammeContext/ProgrammeContext";
export { default as ChurayeHuePalContextProvider } from "./ChurayeHuePalContext/ChurayeHuePalContext";
export { default as HappyStoryContextProvider } from "./HappyStoryContext/HappyStoryContext";
export { default as AdminContactContextProvider } from "./AdminContactContext/AdminContactContext";
export { default as BlogContextProvider } from "./BlogContext/BlogContext";

export const useAdminMemberContext = () => useContext(AdminMembersContext);
export const useProgrammeContext = () => useContext(ProgrammeContext);
export const useChurayeHuePalContext = () => useContext(ChurayeHuePalContext);
export const useHappyStroyContext = () => useContext(HappyStoryContext);
export const useAdminContactContext = () => useContext(AdminContactContext);
export const useBlogContext = () => useContext(BlogContext);