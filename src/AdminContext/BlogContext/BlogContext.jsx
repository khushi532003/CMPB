import { AxiosHandler } from "@/config/Axios.config";
import { useAuthContext } from "@/context";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    const { token } = useAuthContext();
    const [fetchBlogData, setFetchBlogData] = useState([]);


    const GetBlog = async () => {
        setLoader(true);
        try {
            const res = await AxiosHandler.get("/blog/get-admin");
            setFetchBlogData(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }



    const CreateBlog = async (data) => {
        setLoader(true);
        try {
            const res = await AxiosHandler.post("/blog/create", data);
            GetBlog();
            toast.success("Blog Created Successfully");
            window.location.href = "/blogs";
            console.log(res?.data);
        } catch (error) {
            console.log(error);
            toast.error("Blog Created Error");
        } finally {
            setLoader(false);
        }
    }

    const DeleteBlog = async (id) => {
        setLoader(true);
        try {
            await AxiosHandler.delete(`/blog/delete/${id}`);
            GetBlog();
            toast.success("Blog Deleted Successfully")
        } catch (error) {
            console.log(error);
            toast.error("Blog Deleted failed")
        } finally {
            setLoader(false);
        }
    }


    return (
        <BlogContext.Provider value={{ CreateBlog, loader, fetchBlogData, GetBlog, DeleteBlog }}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;