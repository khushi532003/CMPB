import ContectQueries from "@admin/pages/ContectQueries";
import HappyStory from "@admin/pages/HappyStory";
import Home from "@admin/pages/Home";
import FreeMembers from "@/features/admin/pages/FreeMembers";
import PremiumMembers from "@/features/admin/pages/PremiumMembers";
import ProgrameBooking from "@/features/admin/pages/ProgrameBooking";
import ChurayeHuePal from "@/features/admin/pages/ChurayeHuePal";
import Packages from "@/features/admin/pages/Packages";
import ViewUserDetails from "@/features/admin/pages/ViewUserDetails";


export const AdminRoute= [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/happy_stories",
        element: <HappyStory />
    },
    {
        path: "/contact_queries",
        element: <ContectQueries />
    },
    {
        path: "/packages",
        element: <Packages />
    },
    
    {
        path: "/churaye_hue_pal",
        element: <ChurayeHuePal />
    },
    {
        path: "/freemembers",
        element: <FreeMembers />
    },
    {
        path: "/premiummembers",
        element: <PremiumMembers />
    },
    {
        path: "/programme-booking/:id",
        element: <ProgrameBooking />
    },
    {
        path: "/view-details/:id",
        element: <ViewUserDetails />
    },
   
]