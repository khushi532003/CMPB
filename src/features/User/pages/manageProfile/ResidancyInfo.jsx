import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { ResidancyInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function ResidancyInfo({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            ImmigrationStatus: data?.ImmigrationStatus ? data.ImmigrationStatus : "",
            birthCounty: data?.birthCounty ? data.birthCounty : "",
            residencyCounty: data?.residencyCounty ? data.residencyCounty : "",
            grownUpCountry: data?.grownUpCountry ? data.grownUpCountry : ""
        },
        enableReinitialize: true,
        validationSchema: ResidancyInfoSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/residencyinfo/create", value);
                } else {
                    await Update("/profile/residencyinfo/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Residancy Information</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="birth-county" className="block text-sm font-medium leading-6 text-gray-900">
                                Birth County
                            </label>
                            <div className="mt-2">
                                <input
                                    id="birth-county"
                                    name="birthCounty"
                                    placeholder='birth-county'
                                    type="text"
                                    value={values.birthCounty}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.birthCounty && touched.birthCounty && <span className='text-red-500' >{errors.birthCounty}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="residency-county" className="block text-sm font-medium leading-6 text-gray-900">
                                Residency County
                            </label>
                            <div className="mt-2">
                                <input
                                    id="residency-county"
                                    name="residencyCounty"
                                    placeholder='residency-county'
                                    type="text"
                                    value={values.residencyCounty}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.residencyCounty && touched.residencyCounty && <span className='text-red-500' >{errors.residencyCounty}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="grownUp-country" className="block text-sm font-medium leading-6 text-gray-900">
                                GrownUp Country
                            </label>
                            <div className="mt-2">
                                <input
                                    id="grownUp-country"
                                    name="grownUpCountry"
                                    placeholder='grownUp-country'
                                    type="text"
                                    value={values.grownUpCountry}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.grownUpCountry && touched.grownUpCountry && <span className='text-red-500' >{errors.grownUpCountry}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="immigration-status" className="block text-sm font-medium leading-6 text-gray-900">
                                Immigration Status
                            </label>
                            <div className="mt-2">
                                <input
                                    id="immigration-status"
                                    name="ImmigrationStatus"
                                    placeholder='immigration-status'
                                    type="text"
                                    value={values.ImmigrationStatus}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.ImmigrationStatus && touched.ImmigrationStatus && <span className='text-red-500' >{errors.ImmigrationStatus}</span>}
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
export default ResidancyInfo;