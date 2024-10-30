import React from 'react'

function HappyStories() {
    return (
        <div>
            <div className="py-5 bg-cover bg-no-repeat" style={{ backgroundImage: "url(https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?cs=srgb&dl=pexels-pixabay-414660.jpg&fm=jpg)" }}>
                <div className="heading flex justify-center flex-col items-center text-center">
                    <h2 className="text-6xl sm:text-8xl ">Happy Stories</h2>
                    <img src="../images/headingImg.png" alt="" className="w-64" />
                </div>

                <div className="stories py-5 px-5 ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="relative story w-80 mx-auto py-5 ">
                            {/* <div className="frame absolute">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/020/027/842/small_2x/luxury-gold-leaf-frame-border-floral-ornament-for-background-wedding-invitation-thank-you-card-logo-greeting-card-free-png.png" alt="" />
                            </div> */}

                            <div className="storyImg">
                                <img className='rounded-t-full ' src="https://i.pinimg.com/originals/3b/27/61/3b27610827c3f68fc906e1d312943bdd.jpg" alt="" />

                            </div>
                            <div className="bg-white p-3">
                                <div className="storyDetails  py-3 flex flex-col items-center">
                                    <div className="flex items-center gap-2">

                                        <div className="name font-semibold text-gray-600 py-3">Riya Verma</div>
                                        <img className='w-10' src="https://banner2.cleanpng.com/20240127/qgp/transparent-heart-emoji-cute-heart-icon-with-big-smiling-1710896636255.webp" alt="" />
                                        <div className="name font-semibold text-gray-600 py-3">Vicky Verma</div>
                                    </div>
                                    <p className="text-sm">Posted by : <strong className='text-[#BB1A04]'>Shreya Mehra</strong></p>
                                    <p className="text-sm">On : <strong className='text-[#BB1A04]'>9 Oct 2023</strong></p>

                                    <img src="../images/headingImg.png" alt="" className="w-52" />
                                </div>
                                <div className="storyDesc text-center">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam quas, soluta, dolore veniam dicta eum ad delectus eveniet saepe quae culpa sequi </p>
                                </div>
                                <div className="w-full mt-6 text-center">
                                    <button className="px-6  py-2 leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Read more...</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative story w-80 mx-auto py-5 ">
                            {/* <div className="frame absolute">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/020/027/842/small_2x/luxury-gold-leaf-frame-border-floral-ornament-for-background-wedding-invitation-thank-you-card-logo-greeting-card-free-png.png" alt="" />
                            </div> */}

                            <div className="storyImg">
                                <img className='rounded-t-full ' src="https://i.pinimg.com/originals/3b/27/61/3b27610827c3f68fc906e1d312943bdd.jpg" alt="" />

                            </div>
                            <div className="bg-white p-3">
                                <div className="storyDetails  py-3 flex flex-col items-center">
                                    <div className="flex items-center gap-2">

                                        <div className="name font-semibold text-gray-600 py-3">Riya Verma</div>
                                        <img className='w-10' src="https://banner2.cleanpng.com/20240127/qgp/transparent-heart-emoji-cute-heart-icon-with-big-smiling-1710896636255.webp" alt="" />
                                        <div className="name font-semibold text-gray-600 py-3">Vicky Verma</div>
                                    </div>
                                    <p className="text-sm">Posted by : <strong className='text-[#BB1A04]'>Shreya Mehra</strong></p>
                                    <p className="text-sm">On : <strong className='text-[#BB1A04]'>9 Oct 2023</strong></p>

                                    <img src="../images/headingImg.png" alt="" className="w-52" />
                                </div>
                                <div className="storyDesc text-center">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam quas, soluta, dolore veniam dicta eum ad delectus eveniet saepe quae culpa sequi </p>
                                </div>
                                <div className="w-full mt-6 text-center">
                                    <button className="px-6  py-2 leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Read more...</button>
                                </div>
                            </div>
                        </div>
                        <div className="relative story w-80 mx-auto py-5 ">
                            {/* <div className="frame absolute">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/020/027/842/small_2x/luxury-gold-leaf-frame-border-floral-ornament-for-background-wedding-invitation-thank-you-card-logo-greeting-card-free-png.png" alt="" />
                            </div> */}

                            <div className="storyImg">
                                <img className='rounded-t-full ' src="https://i.pinimg.com/originals/3b/27/61/3b27610827c3f68fc906e1d312943bdd.jpg" alt="" />

                            </div>
                            <div className="bg-white p-3">
                                <div className="storyDetails  py-3 flex flex-col items-center">
                                    <div className="flex items-center gap-2">

                                        <div className="name font-semibold text-gray-600 py-3">Riya Verma</div>
                                        <img className='w-10' src="https://banner2.cleanpng.com/20240127/qgp/transparent-heart-emoji-cute-heart-icon-with-big-smiling-1710896636255.webp" alt="" />
                                        <div className="name font-semibold text-gray-600 py-3">Vicky Verma</div>
                                    </div>
                                    <p className="text-sm">Posted by : <strong className='text-[#BB1A04]'>Shreya Mehra</strong></p>
                                    <p className="text-sm">On : <strong className='text-[#BB1A04]'>9 Oct 2023</strong></p>

                                    <img src="../images/headingImg.png" alt="" className="w-52" />
                                </div>
                                <div className="storyDesc text-center">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam quas, soluta, dolore veniam dicta eum ad delectus eveniet saepe quae culpa sequi </p>
                                </div>
                                <div className="w-full mt-6 text-center">
                                    <button className="px-6  py-2 leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Read more...</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HappyStories
