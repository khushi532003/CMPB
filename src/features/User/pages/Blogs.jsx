import { useBlogUserContext } from "@/context";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import DOMPurify from "dompurify";

function Blogs() {
    const { userBlogData, GetUserBlog } = useBlogUserContext();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    console.log(userBlogData);
    

    useEffect(() => {
        GetUserBlog();
    }, []);

    return (
        <div className="w-[80%] mx-auto py-5">
            <div className="heading flex justify-center flex-col items-center text-center">
                <h1 className="text-5xl sm:text-7xl">Blogs</h1>
            </div>
            <div className="blogs grid sm:grid-cols-2 grid-cols-1 gap-3 py-4">
                {userBlogData?.map((item, i) => {
                    const rawDescription = item?.description || "No description available";

                    const sanitizedHTML = DOMPurify.sanitize(rawDescription, {
                        ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "p", "ul", "ol", "li", "br"],
                        ALLOWED_ATTR: ["href", "target", "rel"],
                    });


                    return (
                        <React.Fragment key={i}>
                            <Link to={`/bloginner/${item?.slug}`}>
                                <div className="blog py-4">
                                    <div className="content p-4">
                                        <div className="blogImg flex justify-center">
                                            <img src={item?.image?.URL || 'default-image.jpg'} alt={item?.alt} />
                                        </div>
                                        <div className="content p-4">
                                            <div className="blogTitle text-center">
                                                <h3 className="text-3xl">{item?.title || "Untitled"}</h3>
                                            </div>
                                            <div className="date text-center py-2"> | {formatDate(item?.createdAt)} | </div>
                                            <div className="desc">
                                                {HTMLReactParser(sanitizedHTML.slice(0, 200)) || "No description available"}...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default Blogs;
