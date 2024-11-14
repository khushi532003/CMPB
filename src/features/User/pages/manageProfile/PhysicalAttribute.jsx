import { useProfileContext } from '@/context';
import { PhysicalattributeDetailsSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React from 'react';


function PhysicalAttribute({ data }) {
    const { Create, Update } = useProfileContext();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            BloodGroup: data?.BloodGroup ? data?.BloodGroup : "",
            Disablity: data?.Disablity ? data?.Disablity : "",
            Height: data?.Height ? data?.Height : "",
            skinComplexion: data?.skinComplexion ? data?.skinComplexion : "",
            weight: data?.weight ? data?.weight : "",

        },
        enableReinitialize: true,
        validationSchema: PhysicalattributeDetailsSchema,
        onSubmit: async (value) => {
            if (!data) {
                await Create("/profile/physicalattribute/create", value);
            } else {
                await Update("/profile/physicalattribute/update", value)
            }
        }
    })

    return (
        <form onSubmit={handleSubmit} >
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Physical Attribute</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                                Height
                            </label>
                            <div className="mt-2">
                                <input
                                    id="height"
                                    name="Height"
                                    placeholder='height'
                                    type="text"
                                    value={values.Height}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="given-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Height && touched.Height && <span className='text-red-500' >{errors.Height}</span>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Weight
                            </label>
                            <div className="mt-2">
                                <input
                                    id="weight"
                                    name="weight"
                                    placeholder='weight'
                                    type="text"
                                    value={values.weight}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.weight && touched.weight && <span className='text-red-500' >{errors.weight}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="skin-complexion" className="block text-sm font-medium leading-6 text-gray-900">
                                Skin Complexion
                            </label>
                            <div className="mt-2">
                                <input
                                    id="skin-complexion"
                                    name="skinComplexion"
                                    placeholder='skin-complexion'
                                    type="text"
                                    value={values.skinComplexion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.skinComplexion && touched.skinComplexion && <span className='text-red-500' >{errors.skinComplexion}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="blood-group" className="block text-sm font-medium leading-6 text-gray-900">
                                Blood Group
                            </label>
                            <div className="mt-2">
                                <input
                                    id="blood-group"
                                    name="BloodGroup"
                                    placeholder='blood-group'
                                    type="text"
                                    value={values.BloodGroup}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="family-name"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.BloodGroup && touched.BloodGroup && <span className='text-red-500' >{errors.BloodGroup}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Disability
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="Disablity"
                                    value={values.Disablity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option disabled>select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                                {errors.Disablity && touched.Disablity && <span className='text-red-500' >{errors.Disablity}</span>}
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
export default PhysicalAttribute;