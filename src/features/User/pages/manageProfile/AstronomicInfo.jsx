import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { AstronomicInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function AstronomicInfo({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            SunSign: data?.SunSign ? data?.SunSign : "",
            MoonSign: data?.MoonSign ? data?.MoonSign : "",
            TimeOfBirth: data?.TimeOfBirth ? data?.TimeOfBirth : "",
            CityOfBirth: data?.CityOfBirth ? data?.CityOfBirth : ""
        },
        enableReinitialize: true,
        validationSchema: AstronomicInfoSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/astronomic/create", value);
                } else {
                    await Update("/profile/astronomic/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Astronomic Info</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="sun-sign" className="block text-sm font-medium leading-6 text-gray-900">
                                SunSign
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sun-sign"
                                    name="SunSign"
                                    value={values.SunSign}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='sun-sign'
                                    type="text"
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.SunSign && touched.SunSign && <p className='text-red-500 text-sm'>{errors.SunSign}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="moon-sign" className="block text-sm font-medium leading-6 text-gray-900">
                                MoonSign
                            </label>
                            <div className="mt-2">
                                <input
                                    id="moon-sign"
                                    name="MoonSign"
                                    value={values.MoonSign}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='moon-sign'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.MoonSign && touched.MoonSign && <p className='text-red-500 text-sm'>{errors.MoonSign}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="time-of-birth" className="block text-sm font-medium leading-6 text-gray-900">
                                Time of birth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="time-of-birth"
                                    name="TimeOfBirth"
                                    value={values.TimeOfBirth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='time of birth'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.TimeOfBirth && touched.TimeOfBirth && <p className='text-red-500 text-sm'>{errors.TimeOfBirth}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="time-of-birth" className="block text-sm font-medium leading-6 text-gray-900">
                                City of birth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="time-of-birth"
                                    name="CityOfBirth"
                                    value={values.CityOfBirth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='time of birth'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.CityOfBirth && touched.CityOfBirth && <p className='text-red-500 text-sm'>{errors.CityOfBirth}</p>}
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
export default AstronomicInfo;