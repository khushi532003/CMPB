import { useHappyStoriesContext } from '@/context';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Story() {
    const { happyStory } = useHappyStoriesContext();
    const [story, setStory] = useState("")
    const { id } = useParams()

    const formatDate = (dateString) => {
        if (!dateString) return "Date not available"; // Handle undefined or null
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid date"; // Handle invalid date
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };
 

    useEffect(() => {
        const filterBlog = happyStory.find((item) => item._id === id);
        setStory(filterBlog);
    }, [happyStory, id]);

    return (
        <div className='w-[80%] mx-auto'>
            <div className="py-5">
                <div className="Image ">
                    <img className='h-[300px] w-full object-cover' src={story?.story?.ImageURL} alt="" />
                </div>
                <div className="couples flex items-center flex-col">
                    <div className="flex items-center justify-center gap-2 py-3">

                        <div className="name capitalize font-semibold text-gray-600 py-3">{story?.Bride}</div>
                        <img className='w-10' src="https://banner2.cleanpng.com/20240127/qgp/transparent-heart-emoji-cute-heart-icon-with-big-smiling-1710896636255.webp" alt="" />
                        <div className="name capitalize font-semibold text-gray-600 py-3">{story?.Groom}</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="text-sm">Posted by : <strong className='text-[#BB1A04]'>Admin</strong></div>
                        <div className="text-sm">On : <strong className='text-[#BB1A04]'>{formatDate(story?.createdAt)}</strong></div>
                    </div>
                    <img src="../images/headingImg.png" alt="" className="w-52" />
                </div>

                <div className="desc py-3 text-gray-800">
                    {story?.Content}
                </div>
            </div>
        </div>
    )
}

export default Story;