import About from "@/features/User/pages/About";
import Contact from "@/features/User/pages/Contact";
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
]