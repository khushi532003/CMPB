import { useAuthContext } from "@/context";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const { AxiosHandler } = useAuthContext();
    const [loader, setLoader] = useState(false);
    const [fetchBlogData, setFetchBlogData] = useState([]);

    const GetBlog = async () => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            const res = await axiosInstance.get("/blog/get-admin");
            setFetchBlogData(res?.data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    const CreateBlog = async (data) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            const res = await axiosInstance.post("/blog/create", data);
            GetBlog();
            toast.success("Blog Created Successfully");
        } catch (error) {
            console.log(error);
            toast.error("Blog Created Error");
        } finally {
            setLoader(false);
        }
    }

    const DeleteBlog = async (id) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        try {
            await axiosInstance.delete(`/blog/delete/${id}`);
            GetBlog();
            toast.success("Blog Deleted Successfully")
        } catch (error) {
            console.log(error);
            toast.error("Blog Deleted failed")
        } finally {
            setLoader(false);
        }
    }

    // Edit Blog 
    const EditBlog = async (data, id) => {
        const axiosInstance = AxiosHandler();
        setLoader(true);
        console.log(id)
        try {
            const res = await axiosInstance.put(`/blog/update/${id}`, data);
            GetBlog();
            toast.success(res?.data?.message || "Blog edit successfully")
        } catch (error) {
            console.log(error);
            toast.error("Blog edit failed");
        } finally {
            setLoader(false);
        }
    }


    return (
        <BlogContext.Provider value={{ CreateBlog, loader, fetchBlogData, GetBlog, DeleteBlog, EditBlog }}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;