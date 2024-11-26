import HappyStories from "@user/pages/HappyStories";
import About from "@user/pages/About";
import Contact from "@user/pages/Contact";
import Home from "@user/pages/Home";
import Story from "@/features/user/pages/Story";
import Blogs from "@/features/User/pages/Blogs";
import BlogInner from "@/features/User/pages/BlogInner";

export const UserPublicRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/happyStories",
        element: <HappyStories />
    },
    {
        path: "/blogs",
        element: <Blogs />
    },
    {
        path: "/bloginner/:id",
        element: <BlogInner />
    },
    {
        path: "/story/:id",
        element: <Story />
    },
]