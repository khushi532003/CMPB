import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { BackgroundInfoSchema } from '@/validation/ProfileValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function BackgroundInfo({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            Religion: data?.Religion ? data?.Religion : "",
            Caste: data?.Caste ? data?.Caste : "",
            SubCast: data?.SubCast ? data?.SubCast : "",
            SelfWorth: data?.SelfWorth ? data?.SelfWorth : "",
            FamilyWorth: data?.FamilyWorth ? data?.FamilyWorth : "",
            DependentMember: data?.DependentMember ? data?.DependentMember : "",
            MotherName: data?.MotherName ? data?.MotherName : "",
            FatherName: data?.FatherName ? data?.FatherName : "",
            isMotherAlive: data?.isMotherAlive ? data?.isMotherAlive : "",
            isFatherAlive: data?.isFatherAlive ? data?.isFatherAlive : ""
        },
        enableReinitialize: true,
        validationSchema: BackgroundInfoSchema,
        onSubmit: async (value) => {
            setLoader(true);

            try {
                if (!data) {
                    await Create("/profile/background/create", value)
                } else {
                    await Update("/profile/background/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Background Info</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="MotherName" className="block text-sm font-medium leading-6 text-gray-900">
                                Mother Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="MotherName"
                                    name="MotherName"
                                    value={values.MotherName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='MotherName'
                                    type="text"
                                    autoComplete="MotherName"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.MotherName && touched.MotherName && <p className='text-red-500 text-xs'>{errors.MotherName}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="FatherName" className="block text-sm font-medium leading-6 text-gray-900">
                                cast
                            </label>
                            <div className="mt-2">
                                <input
                                    id="FatherName"
                                    name="FatherName"
                                    value={values.FatherName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='FatherName'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.FatherName && touched.FatherName && <p className='text-red-500 text-xs'>{errors.FatherName}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="isMotherAlive" className="block text-sm font-medium leading-6 text-gray-900">
                                Mother Alive Status
                            </label>
                            <div className="mt-2">
                                <select
                                    id="isMotherAlive"
                                    name="isMotherAlive"
                                    value={values.isMotherAlive}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                                {errors.isMotherAlive && touched.isMotherAlive && (
                                    <span className="text-red-500 text-xs">{errors.isMotherAlive}</span>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="isFatherAlive" className="block text-sm font-medium leading-6 text-gray-900">
                                Father Alive Status
                            </label>
                            <div className="mt-2">
                                <select
                                    id="isFatherAlive"
                                    name="isFatherAlive"
                                    value={values.isFatherAlive}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                                {errors.isFatherAlive && touched.isFatherAlive && (
                                    <span className="text-red-500 text-xs">{errors.isFatherAlive}</span>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="religion" className="block text-sm font-medium leading-6 text-gray-900">
                                Religion
                            </label>
                            <div className="mt-2">
                                <select
                                    id="religion"
                                    name="Religion"
                                    value={values.Religion}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="religion"
                                    autoComplete="country-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>select</option>
                                    <option>Hindu</option>
                                    <option>Muslim</option>
                                    <option>Sikh</option>
                                    <option>Isai</option>
                                </select>
                                {errors.Religion && touched.Religion && <p className='text-red-500 text-xs'>{errors.Religion}</p>}
                            </div>
                        </div>




                        <div className="sm:col-span-3">
                            <label htmlFor="cast" className="block text-sm font-medium leading-6 text-gray-900">
                                cast
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cast"
                                    name="Caste"
                                    value={values.Caste}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='cast'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Caste && touched.Caste && <p className='text-red-500 text-xs'>{errors.Caste}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="sub-cast" className="block text-sm font-medium leading-6 text-gray-900">
                                Sub Cast
                            </label>
                            <div className="mt-2">
                                <input
                                    id="sub-cast"
                                    name="SubCast"
                                    value={values.SubCast}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='sub-cast'
                                    type="text"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.SubCast && touched.SubCast && <p className='text-red-500 text-xs'>{errors.SubCast}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="self worth" className="block text-sm font-medium leading-6 text-gray-900">
                                SelfWorth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="self worth"
                                    name="SelfWorth"
                                    value={values.SelfWorth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='self worth'
                                    type="number"
                                    autoComplete="family-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.SelfWorth && touched.SelfWorth && <p className='text-red-500 text-xs'>{errors.SelfWorth}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                                Family Worth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="height"
                                    name="FamilyWorth"
                                    value={values.FamilyWorth}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='FamilyWorth'
                                    type="number"
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.FamilyWorth && touched.FamilyWorth && <p className='text-red-500 text-xs'>{errors.FamilyWorth}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="DependentMember" className="block text-sm font-medium leading-6 text-gray-900">
                                Dependent Member
                            </label>
                            <div className="mt-2">
                                <input
                                    id="DependentMember"
                                    name="DependentMember"
                                    value={values.DependentMember}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='DependentMember'
                                    type="number"
                                    autoComplete="given-name"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.DependentMember && touched.DependentMember && <p className='text-red-500 text-xs'>{errors.DependentMember}</p>}
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
export default BackgroundInfo;