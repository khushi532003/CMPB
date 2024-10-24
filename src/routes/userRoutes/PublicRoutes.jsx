import HappyStories from "@user/pages/HappyStories";
import About from "@user/pages/About";
import Contact from "@user/pages/Contact";
import Home from "@user/pages/Home";


export const UserPublicRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/happyStories",
        element: <HappyStories/>
    },
]