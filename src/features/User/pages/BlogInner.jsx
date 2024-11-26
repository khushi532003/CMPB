import { useBlogUserContext } from '@/context';
import React, { useEffect } from 'react'

function BlogInner() {
    const { userBlogData, GetUserBlog } = useBlogUserContext();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        GetUserBlog();
    }, []);

    return (
        <div className='w-[80%] mx-auto py-5'>
            <div className="blog py-4">
                {userBlogData?.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="blogImg flex justify-center">
                            <img src={item?.image?.URL} alt="" />
                        </div>
                        <div className="content p-4">
                            <div className="blogTitle text-center">
                                <h3 className='text-3xl'>{item?.title}</h3>
                            </div>
                            <div className="date text-center py-2">{formatDate(item?.createdAt)}</div>
                            <div className="desc">{item?.description}</div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default BlogInner
