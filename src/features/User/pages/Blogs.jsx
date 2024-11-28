import { useAuthContext, useBlogUserContext } from '@/context';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Blogs() {
    const { userBlogData, GetUserBlog } = useBlogUserContext();

    console.log(userBlogData);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        GetUserBlog();
    }, [])

    return (
        <div className="w-[80%] mx-auto py-5">
            <div className="heading flex justify-center flex-col items-center text-center">
                <h2 className="text-5xl sm:text-7xl">Blogs</h2>
                <img src="../images/headingImg.png" alt="" className="w-64" />
            </div>
            <div className="blogs grid sm:grid-cols-2 grid-cols-1 gap-3 py-4 ">
                {userBlogData?.map((item, i) => (
                    <React.Fragment key={i}>
                        <Link to={`/bloginner/${item?._id}`}>
                            <div className="blog py-4">
                                <div className="blogImg flex justify-center">
                                    <img src={item?.image?.URL} alt="" />
                                </div>
                                <div className="content p-4">
                                    <div className="blogTitle text-center">
                                        <h3 className='text-3xl'>{item?.title}</h3>
                                    </div>
                                    <div className="date text-center py-2"> | {formatDate(item?.createdAt)} | </div>
                                    <div className="desc">{item?.description.slice(0,240)}...</div>
                                </div>
                            </div>
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Blogs;