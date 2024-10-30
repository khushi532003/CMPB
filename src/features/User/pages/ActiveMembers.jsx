import React from 'react'

function ActiveMembers() {
    return (
        <div>
            <div className="activeMemebers py-8 mt-20">
                <div className="flex gap-3 w-[90%] mx-auto">
                    <div className="filter hidden sm:block w-[30%] border border-gray-400 p-4">
                        <h4 className='text-xl'>FILTER SEARCH</h4>
                        <form action="">
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="username">Age From</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />
                                </div>
                                <div>
                                    <label className="" htmlFor="username">To</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="username">Member ID</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Marital Status</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Unmarried</option>
                                        <option>Married</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Religion</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Hindu</option>
                                        <option>Sikh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Caste</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Sharma</option>
                                        <option>Kumar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Sub Caste</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Sharma</option>
                                        <option>Kumar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Mother Toungue</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Hindi</option>
                                        <option>English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="username">Profession</label>
                                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">Country</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>India</option>
                                        <option>Europe</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">State</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="passwordConfirmation">City</label>
                                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]">
                                        <option>Hindi</option>
                                        <option>English</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full mt-6">
                                <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="members w-full sm:w-[70%] border border-gray-400 p-4">
                        <div className="heading flex justify-center flex-col py-3">
                            <h2 className="text-6xl">Active Members</h2>
                            <img src="../images/headingImg.png" alt="" className="w-64" />
                        </div>

                        <div className="member relative border my-2 border-yellow-600 rounded-md">
                            <div className="block sm:flex items-center gap-6 p-3">
                                <div className="profileImg pb-5 sm:pb-0">
                                    <img className='w-52 rounded-full' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
                                </div>
                                <div className="profileDetails">
                                    <div className="memberType absolute right-2 top-2 rounded-sm px-3 py-1 bg-[#BB1A04] text-white">Free</div>
                                    <h3 className='text-3xl'> Shreya Mehra</h3>
                                    <div className="id py-3"> <strong>MEMBER ID : </strong> 12656362</div>
                                    <div className="w-full mt-6">
                                        <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="member relative border my-2 border-yellow-600 rounded-md">
                            <div className="block sm:flex items-center gap-6 p-3">
                                <div className="profileImg pb-5 sm:pb-0">
                                    <img className='w-52 rounded-full' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
                                </div>
                                <div className="profileDetails">
                                    <div className="memberType absolute right-2 top-2 rounded-sm px-3 py-1 bg-[#BB1A04] text-white">Free</div>
                                    <h3 className='text-3xl'> Shreya Mehra</h3>
                                    <div className="id py-3"> <strong>MEMBER ID : </strong> 12656362</div>
                                    <div className="w-full mt-6">
                                        <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="member relative border my-2 border-yellow-600 rounded-md">
                            <div className="block sm:flex items-center gap-6 p-3">
                                <div className="profileImg pb-5 sm:pb-0">
                                    <img className='w-52 rounded-full' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
                                </div>
                                <div className="profileDetails">
                                    <div className="memberType absolute right-2 top-2 rounded-sm px-3 py-1 bg-[#BB1A04] text-white">Free</div>
                                    <h3 className='text-3xl'> Shreya Mehra</h3>
                                    <div className="id py-3"> <strong>MEMBER ID : </strong> 12656362</div>
                                    <div className="w-full mt-6">
                                        <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="member relative border my-2 border-yellow-600 rounded-md">
                            <div className="block sm:flex items-center gap-6 p-3">
                                <div className="profileImg pb-5 sm:pb-0">
                                    <img className='w-52 rounded-full' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
                                </div>
                                <div className="profileDetails">
                                    <div className="memberType absolute right-2 top-2 rounded-sm px-3 py-1 bg-[#BB1A04] text-white">Free</div>
                                    <h3 className='text-3xl'> Shreya Mehra</h3>
                                    <div className="id py-3"> <strong>MEMBER ID : </strong> 12656362</div>
                                    <div className="w-full mt-6">
                                        <button className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveMembers;