import ActiveMembers from "@/features/user/pages/ActiveMembers";
import DeleteAccount from "@/features/user/pages/DeleteAccount";
import MyInterest from "@/features/user/pages/MyInterest";
import PurchaseHistory from "@/features/user/pages/PurchaseHistory";

export const UserPrivateRoutes = [
    {
        path : "/members",
        element : <ActiveMembers/>
    },
    {
        path : "/myInterests",
        element : <MyInterest/>
    },
    {
        path : "/purchaseHistory",
        element : <PurchaseHistory/>
    },
    {
        path : "/deleteAccount",
        element : <DeleteAccount/>
    },
]