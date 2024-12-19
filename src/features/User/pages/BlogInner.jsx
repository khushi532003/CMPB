import { useBlogUserContext } from '@/context';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import DOMPurify from 'dompurify';

function BlogInner() {
    const { userBlogData, GetUserBlog } = useBlogUserContext();
    const [filterData, setFilterData] = useState(null);
    const { slug } = useParams();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        const filterBlog = userBlogData?.filter((item) => (
            item?.slug === slug
        ))[0];
        setFilterData(filterBlog);
    }, [userBlogData, slug]);


    useEffect(() => {
        GetUserBlog();
    }, []);

    // Sanitize and parse the description if available
    const sanitizedDescription = filterData?.description
        ? DOMPurify.sanitize(filterData?.description, {
            ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "p", "ul", "ol", "li", "br"],
            ALLOWED_ATTR: ["href", "target", "rel"],
        })
        : "No description available";

    return (
        <div className='w-[80%] mx-auto py-5'>
            <div className="blog py-4">
                {filterData && (
                    <div>
                        <div className="blogImg flex justify-center">
                            <img src={filterData?.image?.URL} alt={filterData?.alt || "Blog Image"} />
                        </div>
                        <div className="content p-4">
                            <div className="blogTitle text-center">
                                <h3 className='text-3xl'>{filterData?.title || "Untitled"}</h3>
                            </div>
                            <div className="date text-center py-2"> | {formatDate(filterData?.createdAt)} | </div>
                            <div className="desc" dangerouslySetInnerHTML={{ __html: filterData?.description }}>
                                
                                {/* Apply HTMLReactParser to render sanitized HTML */}
                                {/* {HTMLReactParser(sanitizedDescription) || "No description available"} */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogInner;
