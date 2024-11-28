import Loader from '@/constant/loader'
import React, { useEffect, useState } from 'react'
import AddBlog from '../components/AddBlog'
import { GoPlus } from 'react-icons/go';
import { FaTrash } from 'react-icons/fa';
import { useBlogContext } from '@/AdminContext';
import { useAuthContext } from '@/context';

function Blogs() {
    const { fetchBlogData, DeleteBlog, GetBlog, loader } = useBlogContext();
    const [addBlog, setAddBlog] = useState(false);
    const { token } = useAuthContext();

    console.log(fetchBlogData);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        if (token) {
            GetBlog()
        }
    }, [token])

    return (
        <div>
            <div className="HappyStories py-4 relative">
                <div className="stories">
                    <div className="bg-white p-8 rounded-md w-full">
                        <div className=" flex items-center justify-between pb-6">
                            <div>
                                <h3 className="text-gray-600 font-semibold text-3xl">Blogs</h3>
                            </div>
                            <div onClick={() => setAddBlog(true)} className="px-4 py-1 text-white bg-RedTheme flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Blog</div>
                        </div>
                        <div>
                            {loader ? <Loader /> : <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    S.No.
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Blog Image
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Blog Title
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Date
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Blog Description
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {fetchBlogData?.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                                                    </td>

                                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                        <img className='w-14 h-14 rounded-full object-cover' src={item?.image?.URL}
                                                            alt="" />
                                                    </td>
                                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{item?.title}</p>
                                                    </td>
                                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{formatDate(item?.createdAt)}</p>
                                                    </td>
                                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                        <p className="text-gray-900 whitespace-no-wrap">{item?.description.slice(0,80)}...</p>
                                                    </td>
                                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                        <button onClick={() => DeleteBlog(item?._id)}
                                                            className="cursor-pointer bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                            <FaTrash />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>

                                    </table>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                {addBlog ? <AddBlog onClose={() => setAddBlog(false)} /> : ""}
            </div>
        </div>
    )
}

export default Blogs;