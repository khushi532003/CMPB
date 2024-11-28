import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { LanguageInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function Languages({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { errors, values, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            motherTounge: data?.motherTounge ? data?.motherTounge : "",
            knownLanguage: data?.knownLanguage ? data?.knownLanguage?.[0] : ""
        },
        enableReinitialize: true,
        validationSchema: LanguageInfoSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/languages/create", value)
                } else {
                    await Update("/profile/languages/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Languages</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="mother-tounge" className="block text-sm font-medium leading-6 text-gray-900">
                                Mother Tounge
                            </label>
                            <div className="mt-2">
                                <input
                                    id="mother-tounge"
                                    name="motherTounge"
                                    value={values.motherTounge}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='mother-tounge'
                                    type="text"
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.motherTounge && touched.motherTounge && <p className='text-red-500 text-sm'>{errors.motherTounge}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="known-language" className="block text-sm font-medium leading-6 text-gray-900">
                                Known Language
                            </label>
                            <div className="mt-2">
                                <input
                                    id="known-language"
                                    name="knownLanguage"
                                    value={values?.knownLanguage}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='known-language'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.knownLanguage && touched.knownLanguage && <p className='text-red-500 text-sm'>{errors.knownLanguage}</p>}
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
export default Languages;