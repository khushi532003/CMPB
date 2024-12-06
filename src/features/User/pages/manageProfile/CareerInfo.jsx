import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { CareerInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function CareerInfo({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            previousJobs: {
                designation: data?.previousJobs?.designation ?? "",
                company: data?.previousJobs?.company ?? "",
                start: data?.previousJobs?.start ?? "",
                end: data?.previousJobs?.end ?? "",
            },
            currentJob: {
                designation: data?.currentJob?.designation ?? "",
                company: data?.currentJob?.company ?? "",
                start: data?.currentJob?.start ?? "",
                end: data?.currentJob?.end ?? "",
            },
        },
        enableReinitialize: true,
        validationSchema: CareerInfoSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/carrer/create", value);
                } else {
                    await Update("/profile/carrer/update", value)
                }
            } catch (error) {
                console.log(error)
            }
            setLoader(false);
        }
    })

    return (
        <form onSubmit={handleSubmit} >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Career Information</h4>
                    <h4 className="text-base mt-5 font-semibold leading-2 text-gray-600">Previous Job</h4>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="previousJobs.designation" className="block text-sm font-medium leading-6 text-gray-900">
                                Designation123
                            </label>
                            <div className="mt-2">
                                <input
                                    id="previousJobs.designation"
                                    name="previousJobs.designation"
                                    placeholder='designation'
                                    type="text"
                                    value={values?.previousJobs?.designation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.previousJobs?.designation && touched.previousJobs?.designation && <span className='text-red-500 text-xs' >{errors.previousJobs?.designation}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="previousJobs.company" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="previousJobs.company"
                                    name="previousJobs.company"
                                    placeholder='company name'
                                    type="text"
                                    value={values?.previousJobs?.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.previousJobs?.company && touched.previousJobs?.company && <span className='text-red-500 text-xs'>{errors.previousJobs?.company}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="previousJobs.start" className="block text-sm font-medium leading-6 text-gray-900">
                                Start date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="previousJobs.start"
                                    name="previousJobs.start"
                                    type="date"
                                    value={values?.previousJobs?.start}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.previousJobs?.start && touched.previousJobs?.start && <span className='text-red-500 text-xs' >{errors.previousJobs?.start}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="previousJobs.end" className="block text-sm font-medium leading-6 text-gray-900">
                                End date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="previousJobs.end"
                                    name="previousJobs.end"
                                    placeholder='end date'
                                    type="date"
                                    value={values?.previousJobs?.end}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="end date"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.previousJobs?.end && touched.previousJobs?.end && <span className='text-red-500 text-xs' >{errors.previousJobs?.end}</span>}
                            </div>
                        </div>
                    </div>
                    <h4 className="text-base mt-5 font-semibold leading-2 text-gray-600">Current Job</h4>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="currentJob.designation" className="block text-sm font-medium leading-6 text-gray-900">
                                Designation
                            </label>
                            <div className="mt-2">
                                <input
                                    id="currentJob.designation"
                                    name="currentJob.designation"
                                    placeholder='designation'
                                    type="text"
                                    value={values?.currentJob?.designation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.currentJob?.designation && touched.currentJob?.designation && <span className='text-red-500 text-xs'>{errors.currentJob?.designation}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="currentJob.company" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="currentJob.company"
                                    name="currentJob.company"
                                    placeholder='company name'
                                    type="text"
                                    value={values?.currentJob?.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.currentJob?.company && touched.currentJob?.company && <span className='text-red-500 text-xs' >{errors.currentJob?.company}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="currentJob.start" className="block text-sm font-medium leading-6 text-gray-900">
                                Start date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="currentJob.start"
                                    name="currentJob.start"
                                    type="date"
                                    value={values?.currentJob?.start}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.currentJob?.start && touched.currentJob?.start && <span className='text-red-500 text-xs' >{errors.currentJob?.start}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="currentJob.end" className="block text-sm font-medium leading-6 text-gray-900">
                                End date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="currentJob.end"
                                    name="currentJob.end"
                                    placeholder='end date'
                                    type="text"
                                    value={values?.currentJob?.end}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.currentJob?.end && touched.currentJob?.end && <span className='text-red-500 text-xs' >{errors.currentJob?.end}</span>}
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
export default CareerInfo;