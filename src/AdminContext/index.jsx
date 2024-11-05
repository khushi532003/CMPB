import { useContext } from "react";
import { AdminMembersContext } from "./MembersContext/AdminMembersContext";

export { default as AdminMembersContextProvider } from "./MembersContext/AdminMembersContext";

export const useAdminMemberContext = ()=> useContext(AdminMembersContext)