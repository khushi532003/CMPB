import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { PhysicalattributeDetailsSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function PhysicalAttribute({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            BloodGroup: data?.BloodGroup ? data?.BloodGroup : "",
            Disablity: data?.Disablity ? data?.Disablity : "",
            Height: data?.Height ? data?.Height : "",
            skinComplexion: data?.skinComplexion ? data?.skinComplexion : "",
            weight: data?.weight ? data?.weight : "",
            DisablityType: data?.DisablityType ? data?.DisablityType : ""
        },
        enableReinitialize: true,
        validationSchema: PhysicalattributeDetailsSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/physicalattribute/create", value);
                } else {
                    await Update("/profile/physicalattribute/update", value)
                }
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Physical Attribute</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">  Height</label>
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
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                {errors.Height && touched.Height && <span className='text-red-500 text-xs' >{errors.Height}</span>}
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
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.weight && touched.weight && <span className='text-red-500 text-xs' >{errors.weight}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="skinComplexion" className="block text-sm font-medium leading-6 text-gray-900">
                                Skin Complexion
                            </label>
                            <div className="mt-2">
                                <select
                                    id="skinComplexion"
                                    name="skinComplexion"
                                    value={values.skinComplexion}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>select</option>
                                    <option>Fair skin</option>
                                    <option>Extremely fair skin</option>
                                    <option>Medium skin</option>
                                    <option>Olive skin</option>
                                    <option>Brown skin</option>
                                </select>
                                {errors.skinComplexion && touched.skinComplexion && <p className="text-red-500 text-xs">{errors.skinComplexion}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="blood-group" className="block text-sm font-medium leading-6 text-gray-900">
                                Blood Group
                            </label>
                            <div className="mt-2">
                                <select
                                    id="blood-group"
                                    name="BloodGroup"
                                    value={values.BloodGroup}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>select</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                                {errors.BloodGroup && touched.BloodGroup && <p className="text-red-500 text-xs">{errors?.BloodGroup}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="disability" className="block text-sm font-medium leading-6 text-gray-900">
                                Disability
                            </label>
                            <div className="mt-2">
                                <select
                                    id="disability"
                                    name="Disablity"
                                    value={values.Disablity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {errors.Disablity && touched.Disablity && (
                                    <span className="text-red-500 text-xs">{errors.Disablity}</span>
                                )}
                            </div>
                        </div>

                        {values.Disablity === "Yes" && (
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="DisablityType"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Describe your disability
                                </label>
                                <textarea
                                    id="DisablityType"
                                    name="DisablityType"
                                    placeholder='Describe about your Disability...'
                                    value={values.DisablityType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="mt-2 px-2 py-1 block w-full h-24 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                                />
                                {errors.DisablityType && touched.DisablityType && (
                                    <span className="text-red-500 text-xs">{errors.DisablityType}</span>
                                )}
                            </div>
                        )}
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
export default PhysicalAttribute;