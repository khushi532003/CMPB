import { createContext, useState } from "react";
import { useAuthContext } from "..";

export const BlogUserContext = createContext();

const BlogUserContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [userBlogData, setUserBlogData] = useState(null);


    const GetUserBlog = async () => {
        const axiosInstance = AxiosHandler();
        try {
            const res = await axiosInstance.get("blog/get");
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