import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { BasicDetailsSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function BasicInfo({ data }) {
    const { Update } = useProfileContext();
    const [loader, setLoader] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: data?.firstName ? data?.firstName : "",
            lastName: data?.lastName ? data?.lastName : "",
            gender: data?.gender ? data?.gender : "",
            DOB: data?.DOB ? data?.DOB : ""
        },
        enableReinitialize: true,
        validationSchema: BasicDetailsSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                await Update("/user/update", value)

            } catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
    })


    return (
        <form onSubmit={handleSubmit} >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Personal Information</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='first name'
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.firstName && touched.firstName && <span className='text-red-500' >{errors.firstName}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="lastName"
                                    placeholder='last name'
                                    type="text"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.lastName && touched.lastName && <span className='text-red-500' >{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Date of birth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="date"
                                    name="DOB"
                                    type="date"
                                    value={values.DOB}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="DOB"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.DOB && touched.DOB && <span className='text-red-500' >{errors.DOB}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                Gender
                            </label>
                            <div className="mt-2">
                                <select
                                    id="gender"
                                    name="gender"
                                    placeholder="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="gender"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option disabled >select</option>
                                    <option value="male">Male</option>
                                    <option value="female" >Female</option>
                                </select>
                                {errors.gender && touched.gender && <span className='text-red-500' >{errors.gender}</span>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end py-4'>
                        <div>
                            <button type='submit' className='px-4 py-2 bg-RedTheme text-white mx-2'>{loader?<Loader/>:"Update"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default BasicInfo;