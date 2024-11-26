import { AxiosHandler } from "@/config/Axios.config";
import { createContext, useState } from "react";

export const BlogUserContext = createContext();

const BlogUserContextProvider = ({ children }) => {
    const [userBlogData, setUserBlogData] = useState(null);


    const GetUserBlog = async () => {
        try {
            const res = await AxiosHandler.get("blog/get");
            setUserBlogData(res?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <BlogUserContext.Provider value={{ userBlogData, GetUserBlog }}>
            {children}
        </BlogUserContext.Provider>
    )
}
export default BlogUserContextProvider;