import React from 'react';


function HobbiesInterest() {
    return (
        <form>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Hobbies & Interest</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="hobbies" className="block text-sm font-medium leading-6 text-gray-900">
                                Hobbies
                            </label>
                            <div className="mt-2">
                                <input
                                    id="hobbies"
                                    name="hobbies"
                                    type="text"
                                    placeholder='hobbies'
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="interest" className="block text-sm font-medium leading-6 text-gray-900">
                                Interest
                            </label>
                            <div className="mt-2">
                                <input
                                    id="interest"
                                    name="interest"
                                    type="text"
                                    placeholder='interest'
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="music" className="block text-sm font-medium leading-6 text-gray-900">
                                Music
                            </label>
                            <div className="mt-2">
                                <input
                                    id="music"
                                    name="music"
                                    type="text"
                                    placeholder='music'
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="books" className="block text-sm font-medium leading-6 text-gray-900">
                                Books
                            </label>
                            <div className="mt-2">
                                <input
                                    id="books"
                                    name="books"
                                    type="text"
                                    placeholder='books'
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="movies" className="block text-sm font-medium leading-6 text-gray-900">
                                Movies
                            </label>
                            <div className="mt-2">
                                <input
                                    id="movies"
                                    name="movies"
                                    type="text"
                                    placeholder='movies'
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="tv-show" className="block text-sm font-medium leading-6 text-gray-900">
                                TV Show
                            </label>
                            <div className="mt-2">
                                <input
                                    id="tv-show"
                                    name="tv-show"
                                    type="text"
                                    placeholder='tv-show'
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="fitnessActivities" className="block text-sm font-medium leading-6 text-gray-900">
                                fitnessActivities
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fitnessActivities"
                                    name="fitnessActivities"
                                    type="text"
                                    placeholder='fitness Activities'
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="sports" className="block text-sm font-medium leading-6 text-gray-900">
                                Sports
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sports"
                                    name="sports"
                                    type="text"
                                    placeholder='sports'
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="cuisines" className="block text-sm font-medium leading-6 text-gray-900">
                                Cuisines
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cuisines"
                                    name="cuisines"
                                    type="text"
                                    placeholder='cuisines'
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="dress-style" className="block text-sm font-medium leading-6 text-gray-900">
                                Dress Style
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dress-style"
                                    name="dress-style"
                                    type="text"
                                    placeholder='dress-style'
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
export default HobbiesInterest;