import Packages from "@admin/pages/Packages";
import UserDetails from "@admin/pages/UserDetails";
import UserInterests from "@admin/pages/UserInterests";
import ContectQueries from "@admin/pages/ContectQueries";
import HappyStory from "@admin/pages/HappyStory";
import Home from "@admin/pages/Home";


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
        path: "/users_details",
        element: <UserDetails />
    },
]