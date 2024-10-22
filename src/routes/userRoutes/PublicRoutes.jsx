import Login from "@/features/User/pages/Login";
import Register from "@/features/User/pages/Register";
import Home from "@user/pages/Home";


export const UserPublicRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
]