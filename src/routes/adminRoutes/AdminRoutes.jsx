import Packages from "@admin/pages/Packages";
import UserInterests from "@admin/pages/UserInterests";
import ContectQueries from "@admin/pages/ContectQueries";
import HappyStory from "@admin/pages/HappyStory";
import Home from "@admin/pages/Home";
import FreeMembers from "@/features/admin/pages/FreeMembers";
import PremiumMembers from "@/features/admin/pages/PremiumMembers";
import ProgrameBooking from "@/features/admin/pages/ProgrameBooking";
import AddProgramme from "@/features/admin/pages/AddProgramme";
import ChurayeHuePal from "@/features/admin/pages/ChurayeHuePal";


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
        path: "/interest",
        element: <UserInterests />
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
        path: "/programme-booking",
        element: <ProgrameBooking />
    },
    {
        path: "/add-programme",
        element: <AddProgramme />
    },
]