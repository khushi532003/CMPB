import { useProfileContext } from '@/context';
import { CareerInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React from 'react';


function CareerInfo({ data }) {

    const { Create, Update } = useProfileContext();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            designation: data?.designation ? data.designation : "",
            company: data?.company ? data.company : "",
            start: data?.start ? data.start : "",
            end: data?.end ? data.end : ""
        }, 
        enableReinitialize: true,
        validationSchema: CareerInfoSchema,
        onSubmit: async (value) => {
            if (!data) {
                await Create("/profile/carrer/create", value);
            } else {
                await Update("/profile/carrer/update", value)
            }
        }
    })


    return (
        <form onSubmit={handleSubmit} >
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Career Information</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                                Designation
                            </label>
                            <div className="mt-2">
                                <input
                                    id="designation"
                                    name="designation"
                                    placeholder='designation'
                                    type="text"
                                    value={values.designation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.designation && touched.designation && <span className='text-red-500' >{errors.designation}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="company-name"
                                    name="company"
                                    placeholder='company name'
                                    type="text"
                                    value={values.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.company && touched.company && <span className='text-red-500' >{errors.company}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="start-date" className="block text-sm font-medium leading-6 text-gray-900">
                                Start date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="start-date"
                                    name="start"
                                    type="date"
                                    value={values.start}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.start && touched.start && <span className='text-red-500' >{errors.start}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="end-date" className="block text-sm font-medium leading-6 text-gray-900">
                                End date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="end-date"
                                    name="end"
                                    type="date"
                                    value={values.end}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="email"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.end && touched.end && <span className='text-red-500' >{errors.end}</span>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end py-4'>
                        <div>
                            <button type='submit' className='px-4 py-2 bg-RedTheme text-white mx-2'>Update</button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}
export default CareerInfo;