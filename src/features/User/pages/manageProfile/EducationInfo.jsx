import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { EducationSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function EducationInfo({data}) {
    const { Create, Update } = useProfileContext();
    const [loader,setLoader] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            start: data?.start ? data.start : "",
            insitution: data?.insitution ? data.insitution : "",
            end: data?.end ? data.end : "",
            Degree: data?.Degree ? data.Degree : "",
        }, 
        enableReinitialize: true,
        validationSchema: EducationSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/education/create", value);
                } else {
                    await Update("/profile/education/update", value)
                }  
            } catch (error) {
             console.log(error);   
            }
           finally{
            setLoader(false);
           }
        }
    })

    return (
        <form onSubmit={handleSubmit} >
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Education</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
                                Degree
                            </label>
                            <div className="mt-2">
                                <input
                                    id="degree"
                                    name="Degree"
                                    type="text"
                                    value={values.Degree}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='degree'
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Degree && touched.Degree && <span className='text-red-500' >{errors.Degree}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="institution" className="block text-sm font-medium leading-6 text-gray-900">
                                Institution
                            </label>
                            <div className="mt-2">
                                <input
                                    id="institution"
                                    name="insitution"
                                    placeholder='institution'
                                    value={values.insitution}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.insitution && touched.insitution && <span className='text-red-500' >{errors.insitution}</span>}

                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Start date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="date"
                                    name="start"
                                    type="date"
                                    value={values.start}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='start date'
                                    autoComplete="date"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    placeholder='end date'
                                    autoComplete="date"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.end && touched.end && <span className='text-red-500' >{errors.end}</span>}
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
export default EducationInfo;