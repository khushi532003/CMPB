import Login from "@/authPages/Login";
import Register from "@/authPages/Register";

export const AuthRoutes = [ 
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
]