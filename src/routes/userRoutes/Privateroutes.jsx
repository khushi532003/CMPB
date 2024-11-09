import ChangePassword from "@user/pages/ChangePassword";
import ActiveMembers from "@user/pages/ActiveMembers";
import PurchaseHistory from "@user/pages/PurchaseHistory";
import HomeManageProfile from "@/features/User/pages/manageProfile/HomeManageProfile";
import MemberProfile from "@/features/user/pages/MemberProfile";

export const UserPrivateRoutes = [
    {
        path: "/members",
        element: <ActiveMembers />
    },
    {
        path: "/purchaseHistory",
        element: <PurchaseHistory />
    },   
    {
        path: "/changePassword",
        element: <ChangePassword />
    },
    {
        path: "/manage_profile",
        element: <HomeManageProfile />
    },
    {
        path: "/member_profile/:id",
        element: <MemberProfile />
    }
]