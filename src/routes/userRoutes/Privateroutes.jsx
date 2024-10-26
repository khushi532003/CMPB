import ChangePassword from "@user/pages/ChangePassword";
import ActiveMembers from "@user/pages/ActiveMembers";
import DeleteAccount from "@user/pages/DeleteAccount";
import MyInterest from "@user/pages/MyInterest";
import PurchaseHistory from "@user/pages/PurchaseHistory";

export const UserPrivateRoutes = [
    {
        path: "/members",
        element: <ActiveMembers />
    },
    {
        path: "/myInterests",
        element: <MyInterest />
    },
    {
        path: "/purchaseHistory",
        element: <PurchaseHistory />
    },
    {
        path: "/deleteAccount",
        element: <DeleteAccount />
    },
    {
        path: "/changePassword",
        element: <ChangePassword />
    },
    
]