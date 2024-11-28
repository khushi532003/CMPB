import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { HobbiesAndInterestSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function HobbiesInterest({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            Hobbies: data?.Hobbies ? data?.Hobbies : "",
            Intrest: data?.Intrest ? data.Intrest : "",
            Music: data?.Music ? data?.Music : "",
            Books: data?.Books ? data?.Books : "",
            Movies: data?.Movies ? data?.Movies : "",
            tvShow: data?.tvShow ? data?.tvShow : "",
            Sports: data?.Sports ? data?.Sports : "",
            fitnessActivities: data?.fitnessActivities ? data?.fitnessActivities : "",
            cuisines: data?.cuisines ? data?.cuisines : "",
            dressStyle: data?.dressStyle ? data?.dressStyle : ""
        },
        enableReinitialize: true,
        validationSchema: HobbiesAndInterestSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/hoobiesandintrest/create", value)
                } else {
                    await Update("/profile/hoobiesandintrest/update", value)
                }
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoader(false);
            }
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Hobbies & Interest</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="hobbies" className="block text-sm font-medium leading-6 text-gray-900">
                                Hobbies
                            </label>
                            <div className="mt-2">
                                <input
                                    id="hobbies"
                                    name="Hobbies"
                                    value={values.Hobbies}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='hobbies'
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Hobbies && touched.Hobbies && <p className='text-red-500 text-sm'>{errors.Hobbies}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="interest" className="block text-sm font-medium leading-6 text-gray-900">
                                Interest
                            </label>
                            <div className="mt-2">
                                <input
                                    id="interest"
                                    name="Intrest"
                                    value={values.Intrest}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='interest'
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Intrest && touched.Intrest && <p className='text-red-500 text-sm'>{errors.Intrest}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="music" className="block text-sm font-medium leading-6 text-gray-900">
                                Music
                            </label>
                            <div className="mt-2">
                                <input
                                    id="music"
                                    name="Music"
                                    value={values.Music}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='music'
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Music && touched.Music && <p className='text-red-500 text-sm'>{errors.Music}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="books" className="block text-sm font-medium leading-6 text-gray-900">
                                Books
                            </label>
                            <div className="mt-2">
                                <input
                                    id="books"
                                    name="Books"
                                    value={values.Books}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='books'
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Books && touched.Books && <p className='text-red-500 text-sm'>{errors.Books}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="movies" className="block text-sm font-medium leading-6 text-gray-900">
                                Movies
                            </label>
                            <div className="mt-2">
                                <input
                                    id="movies"
                                    name="Movies"
                                    value={values.Movies}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='movies'
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Movies && touched.Movies && <p className='text-red-500 text-sm'>{errors.Movies}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="tv-show" className="block text-sm font-medium leading-6 text-gray-900">
                                TV Show
                            </label>
                            <div className="mt-2">
                                <input
                                    id="tv-show"
                                    name="tvShow"
                                    value={values.tvShow}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='tv-show'
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.tvShow && touched.tvShow && <p className='text-red-500 text-sm'>{errors.tvShow}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="fitnessActivities" className="block text-sm font-medium leading-6 text-gray-900">
                                fitnessActivities
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fitnessActivities"
                                    name="fitnessActivities"
                                    value={values.fitnessActivities}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='fitness Activities'
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.fitnessActivities && touched.fitnessActivities && <p className='text-red-500 text-sm'>{errors.fitnessActivities}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="sports" className="block text-sm font-medium leading-6 text-gray-900">
                                Sports
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sports"
                                    name="Sports"
                                    value={values.Sports}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='sports'
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Sports && touched.Sports && <p className='text-red-500 text-sm'>{errors.Sports}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="cuisines" className="block text-sm font-medium leading-6 text-gray-900">
                                Cuisines
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cuisines"
                                    name="cuisines"
                                    value={values.cuisines}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='cuisines'
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.cuisines && touched.cuisines && <p className='text-red-500 text-sm'>{errors.cuisines}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="dress-style" className="block text-sm font-medium leading-6 text-gray-900">
                                Dress Style
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dress-style"
                                    name="dressStyle"
                                    value={values.dressStyle}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder='dress-style'
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.dressStyle && touched.dressStyle && <p className='text-red-500 text-sm'>{errors.dressStyle}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end py-4'>
                        <div>
                            <button type='submit' className='px-4 py-2 bg-RedTheme text-white mx-2'>{loader ? <Loader /> : "Update"}</button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}
export default HobbiesInterest;