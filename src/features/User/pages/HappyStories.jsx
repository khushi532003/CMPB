import Loader from '@/constant/loader';
import { useHappyStoriesContext } from '@/context';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function HappyStories() {

    const { happyStory, GetHappyStories, loader } = useHappyStoriesContext();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    useEffect(() => {
        GetHappyStories();
    }, [])

    return (
        <div>
            <div className="py-5 bg-cover bg-no-repeat" style={{ backgroundImage: "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?cs=srgb&dl=pexels-pixabay-414660.jpg&fm=jpg)" }}>
                <div className="heading flex justify-center flex-col items-center text-center">
                    <h2 className="text-5xl sm:text-7xl ">Happy Stories</h2>
                    <img src="../images/headingImg.png" alt="" className="w-64" />
                </div>

                {loader ? <Loader /> : <div className="stories py-5 px-5 ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {happyStory.map((item) => <div key={item?._id} className="relative story w-80 mx-auto py-5 ">                                                    
                            <div className="storyImg" >
                                <img className='rounded-t-full object-cover w-[400px] h-[350px]' src={item?.story.ImageURL} alt="" />
                            </div>
                            <div className="bg-white p-3">
                                <div className="storyDetails  py-3 flex flex-col items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="name capitalize font-semibold text-gray-600 py-3">{item?.Bride}</div>
                                        <img className='w-10' src="https://banner2.cleanpng.com/20240127/qgp/transparent-heart-emoji-cute-heart-icon-with-big-smiling-1710896636255.webp" alt="" />
                                        <div className="name capitalize font-semibold text-gray-600 py-3">{item?.Groom}</div>
                                    </div>
                                    <p className="text-sm">Posted by : <strong className='text-[#BB1A04]'>Admin</strong></p>
                                    <p className="text-sm">On : <strong className='text-[#BB1A04]'>{formatDate(item?.createdAt)}</strong></p>
                                    <img src="../images/headingImg.png" alt="" className="w-52" />
                                </div>
                                <div className="storyDesc text-center">
                                    <p>{item?.Content.slice(0, 60)}... </p>
                                </div>
                                <div className="w-full mt-6 text-center">
                                    <Link to={`/story/${item?._id}`}> <button className="px-6  py-2 leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Read more...</button></Link>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default HappyStories;