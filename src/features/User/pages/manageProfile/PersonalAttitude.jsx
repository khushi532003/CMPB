import React from 'react';


function PersonalAttitude() {
    return (
        <form>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Personal Attitude</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="affection" className="block text-sm font-medium leading-6 text-gray-900">
                                Affection
                            </label>
                            <div className="mt-2">
                                <input
                                    id="affection"
                                    name="affection"
                                    placeholder='affection'
                                    type="text"
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="religion-ervice" className="block text-sm font-medium leading-6 text-gray-900">
                                Religion Service
                            </label>
                            <div className="mt-2">
                                <input
                                    id="religion-ervice"
                                    name="religion-ervice"
                                    placeholder='religion-ervice'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end py-4'>
                        <div>
                            <button className='px-4 py-2 bg-RedTheme text-white mx-2'>Update</button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}
export default PersonalAttitude;