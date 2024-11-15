import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { BackgroundInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function BackgroundInfo({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            Religion: data?.Religion ? data?.Religion : "",
            Caste: data?.Caste ? data?.Caste : "",
            SubCast: data?.SubCast ? data?.SubCast : "",
            SelfWorth: data?.SelfWorth ? data?.SelfWorth : "",
            FamilyWorth: data?.FamilyWorth ? data?.FamilyWorth : ""
        },
        enableReinitialize: true,
        validationSchema: BackgroundInfoSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/background/create", value)
                } else {
                    await Update("/profile/background/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Background Info</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="religion" className="block text-sm font-medium leading-6 text-gray-900">
                                Religion
                            </label>
                            <div className="mt-2">
                                <select
                                    id="religion"
                                    name="Religion"
                                    value={values.Religion}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="religion"
                                    autoComplete="country-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>select</option>
                                    <option>Hindu</option>
                                    <option>Muslim</option>
                                    <option>Sikh</option>
                                    <option>Isai</option>
                                </select>
                                {errors.Religion && touched.Religion && <p className='text-red-500 text-sm'>{errors.Religion}</p>}
                            </div>
                        </div>




                        <div className="sm:col-span-3">
                            <label htmlFor="cast" className="block text-sm font-medium leading-6 text-gray-900">
                                cast
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cast"
                                    name="Caste"
                                    value={values.Caste}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='cast'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Caste && touched.Caste && <p className='text-red-500 text-sm'>{errors.Caste}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="sub-cast" className="block text-sm font-medium leading-6 text-gray-900">
                                Sub Cast
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sub-cast"
                                    name="SubCast"
                                    value={values.SubCast}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='sub-cast'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.SubCast && touched.SubCast && <p className='text-red-500 text-sm'>{errors.SubCast}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="self worth" className="block text-sm font-medium leading-6 text-gray-900">
                                SelfWorth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="self worth"
                                    name="SelfWorth"
                                    value={values.SelfWorth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='self worth'
                                    type="number"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.SelfWorth && touched.SelfWorth && <p className='text-red-500 text-sm'>{errors.SelfWorth}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                                Family Worth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="height"
                                    name="FamilyWorth"
                                    value={values.FamilyWorth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='FamilyWorth'
                                    type="number"
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.FamilyWorth && touched.FamilyWorth && <p className='text-red-500 text-sm'>{errors.FamilyWorth}</p>}
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
export default BackgroundInfo;