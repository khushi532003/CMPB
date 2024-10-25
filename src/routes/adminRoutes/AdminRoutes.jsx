import HappyStory from "@admin/pages/HappyStory";
import Home from "@admin/pages/Home";


export const AdminRoute= [
    {
        path: "/admin",
        element: <Home/>
    },
    {
        path: "/happy_stories",
        element: <HappyStory />
    },
]