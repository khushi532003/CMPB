import { useBlogUserContext } from '@/context';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function BlogInner() {
    const { userBlogData, GetUserBlog } = useBlogUserContext();
    const [filterData, setFilterData] = useState(null);
    const { id } = useParams();
    console.log(filterData)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        const filterBlog = userBlogData?.filter((item) => (
            item?._id === id
        ))[0]
        setFilterData(filterBlog)
    }, [userBlogData])

    useEffect(() => {
        GetUserBlog();
    }, []);

    return (
        <div className='w-[80%] mx-auto py-5'>
            <div className="blog py-4">
                {filterData &&
                    <div>
                        <div className="blogImg flex justify-center">
                            <img src={filterData?.image?.URL} alt={filterData?.alt} />
                        </div>
                        <div className="content p-4">
                            <div className="blogTitle text-center">
                                <h3 className='text-3xl'>{filterData?.title}</h3>
                            </div>
                            <div className="date text-center py-2"> | {formatDate(filterData?.createdAt)} | </div>
                            <div className="desc">{filterData?.description}</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogInner;