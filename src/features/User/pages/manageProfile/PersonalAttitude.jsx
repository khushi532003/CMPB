import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { PersonalAttitudeSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function PersonalAttitude({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            Affection: data?.Affection ? data?.Affection : "",
            religionService: data?.religionService ? data?.religionService?.[0] : ""
        },
        enableReinitialize: true,
        validationSchema: PersonalAttitudeSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/personalattitude/create", value);
                } else {
                    await Update("/profile/personalattitude/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Personal Attitude</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="affection" className="block text-sm font-medium leading-6 text-gray-900">
                                Affection
                            </label>
                            <div className="mt-2">
                                <input
                                    id="affection"
                                    name="Affection"
                                    value={values.Affection}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='affection'
                                    type="text"
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Affection && touched.Affection && <p className='text-red-500 text-sm'>{errors.Affection}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="religion-ervice" className="block text-sm font-medium leading-6 text-gray-900">
                                Religion Service
                            </label>
                            <div className="mt-2">
                                <input
                                    id="religion-ervice"
                                    name="religionService"
                                    value={values.religionService}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='religion-ervice'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.religionService && touched.religionService && <p className='text-red-500 text-sm'>{errors.religionService}</p>}
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
export default PersonalAttitude;