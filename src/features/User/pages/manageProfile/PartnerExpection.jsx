import Loader from '@/constant/loader';
import { useProfileContext } from '@/context';
import { PartnerExpectionSchema } from '@/validation/ProfileValidation';
import { data } from 'autoprefixer';
import { useFormik } from 'formik';
import React, { useState } from 'react';


function PartnerExpection({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);
    const [FieldValue, setFieldValue] = useState();

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            GernalRequirement: data?.GernalRequirement ? data?.GernalRequirement : "",
            ResidenceCountry: data?.ResidenceCountry ? data?.ResidenceCountry : "",
            Height: data?.Height ? data?.Height : "",
            weight: data?.weight ? data?.weight : "",
            MaritalStatus: data?.MaritalStatus ? data?.MaritalStatus : "",
            Children: data?.Children ? data?.Children : "",
            Religion: data?.Religion ? data?.Religion : "",
            Caste: data?.Caste ? data?.Caste : "",
            SubCaste: data?.SubCaste ? data?.SubCaste : "",
            Language: data?.Language ? data?.Language : "",
            Education: data?.Education ? data?.Education : "",
            Profession: data?.Profession ? data?.Profession : "",
            SmokingAcceptable: data?.SmokingAcceptable ? data?.SmokingAcceptable : "",
            DrinkAcceptable: data?.DrinkAcceptable ? data?.DrinkAcceptable : "",
            DietAcceptable: data?.DietAcceptable ? data?.DietAcceptable : "",
            personalValue: data?.personalValue ? data?.personalValue : "",
            Manglik: data?.Manglik ? data?.Manglik : "",
            PreferredCountry: data?.PreferredCountry ? data?.PreferredCountry : "",
            PreferredState: data?.PreferredState ? data?.PreferredState : "",
            FamilyValue: data?.FamilyValue ? data?.FamilyValue : "",
            Complexion: data?.Complexion ? data?.Complexion : ""
        },
        enableReinitialize: true,
        validationSchema: PartnerExpectionSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {

                    await Create("/profile/partnerexpectation/create", value)
                } else {
                    await Update("/profile/partnerexpectation/update", value)
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
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Partner Expection</h4>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="GernalRequirement" className="block text-sm font-medium leading-6 text-gray-900">
                                General Requirement
                            </label>
                            <div className="mt-2">
                                <input
                                    id="GernalRequirement"
                                    name="GernalRequirement"
                                    value={values.GernalRequirement}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="given-name"
                                    placeholder='General Requirement'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.GernalRequirement && touched.GernalRequirement && <p className='text-red-500 text-xs'>{errors.GernalRequirement}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="ResidenceCountry" className="block text-sm font-medium leading-6 text-gray-900">
                                Residence Country
                            </label>
                            <div className="mt-2">
                                <input
                                    id="ResidenceCountry"
                                    name="ResidenceCountry"
                                    value={values.ResidenceCountry}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="family-name"
                                    placeholder='Residence Country'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.ResidenceCountry && touched.ResidenceCountry && <p className='text-red-500 text-xs'>{errors.ResidenceCountry}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Height" className="block text-sm font-medium leading-6 text-gray-900">
                                Height
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Height"
                                    name="Height"
                                    value={values.Height}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="number"
                                    autoComplete="Height"
                                    placeholder='Height'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Height && touched.Height && <p className='text-red-500 text-xs'>{errors.Height}</p>}
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
                                    value={values.weight}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="number"
                                    autoComplete="email"
                                    placeholder='Weight'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.weight && touched.weight && <p className='text-red-500 text-xs'>{errors.weight}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="MaritalStatus" className="block text-sm font-medium leading-6 text-gray-900">
                                Marital Status
                            </label>
                            <div className="mt-2">
                                <select
                                    id="MaritalStatus"
                                    name="MaritalStatus"
                                    value={values.MaritalStatus}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select</option>
                                    <option value="Unmarried">Unmarried</option>
                                    <option value="Married">Married</option>
                                    <option value="Married">divorced</option>
                                    <option value="Married">widow</option>
                                </select>
                                {errors.MaritalStatus && touched.MaritalStatus && (
                                    <span className="text-red-500 text-xs">{errors.MaritalStatus}</span>
                                )}
                            </div>
                        </div>

                        {values.MaritalStatus === "Married" && (
                            <div className="sm:col-span-3">
                                <label htmlFor="Children" className="block text-sm font-medium leading-6 text-gray-900">
                                    Children
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="Children"
                                        name="Children"
                                        value={values.Children}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="number"
                                        autoComplete="Children"
                                        placeholder='Children'
                                        className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.Children && touched.Children && <p className='text-red-500 text-xs'>{errors.Children}</p>}
                                </div>
                            </div>
                        )}

                        <div className="sm:col-span-3">
                            <label htmlFor="Religion" className="block text-sm font-medium leading-6 text-gray-900">
                                Religion
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Religion"
                                    name="Religion"
                                    value={values.Religion}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Religion'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Religion && touched.Religion && <p className='text-red-500 text-xs'>{errors.Religion}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Caste" className="block text-sm font-medium leading-6 text-gray-900">
                                Caste
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Caste"
                                    name="Caste"
                                    value={values.Caste}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Caste'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Caste && touched.Caste && <p className='text-red-500 text-xs'>{errors.Caste}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="SubCaste" className="block text-sm font-medium leading-6 text-gray-900">
                                Sub Caste
                            </label>
                            <div className="mt-2">
                                <input
                                    id="SubCaste"
                                    name="SubCaste"
                                    value={values.SubCaste}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Sub Caste'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.SubCaste && touched.SubCaste && <p className='text-red-500 text-xs'>{errors.SubCaste}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Language" className="block text-sm font-medium leading-6 text-gray-900">
                                Language
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Language"
                                    name="Language"
                                    value={values.Language}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Language'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Language && touched.Language && <p className='text-red-500 text-xs'>{errors.Language}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Education" className="block text-sm font-medium leading-6 text-gray-900">
                                Education
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Education"
                                    name="Education"
                                    value={values.Education}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Education'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Education && touched.Education && <p className='text-red-500 text-xs'>{errors.Education}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Profession" className="block text-sm font-medium leading-6 text-gray-900">
                                Profession
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Profession"
                                    name="Profession"
                                    value={values.Profession}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Profession'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Profession && touched.Profession && <p className='text-red-500 text-xs'>{errors.Profession}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="SmokingAcceptable" className="block text-sm font-medium leading-6 text-gray-900">
                                Smoking Acceptable
                            </label>
                            <div className="mt-2">
                                <select
                                    id="SmokingAcceptable"
                                    name="SmokingAcceptable"
                                    value={values.SmokingAcceptable}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                                {errors.SmokingAcceptable && touched.SmokingAcceptable && <p className='text-red-500 text-xs'>{errors.SmokingAcceptable}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="DrinkAcceptable" className="block text-sm font-medium leading-6 text-gray-900">
                                Drink Acceptable
                            </label>
                            <div className="mt-2">
                                <select
                                    id="DrinkAcceptable"
                                    name="DrinkAcceptable"
                                    value={values.DrinkAcceptable}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>

                                {errors.DrinkAcceptable && touched.DrinkAcceptable && <p className='text-red-500 text-xs'>{errors.DrinkAcceptable}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="DietAcceptable" className="block text-sm font-medium leading-6 text-gray-900">
                                Diet Acceptable
                            </label>
                            <div className="mt-2">
                                <select
                                    id="DietAcceptable"
                                    name="DietAcceptable"
                                    value={values.DietAcceptable}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                                {errors.DietAcceptable && touched.DietAcceptable && <p className='text-red-500 text-xs'>{errors.DietAcceptable}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Manglik" className="block text-sm font-medium leading-6 text-gray-900">
                                Manglik
                            </label>
                            <div className="mt-2">
                                <select
                                    id="Manglik"
                                    name="Manglik"
                                    value={values.Manglik}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                                {errors.Manglik && touched.Manglik && <p className='text-red-500 text-xs'>{errors.Manglik}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="personalValue" className="block text-sm font-medium leading-6 text-gray-900">
                                Personal Value
                            </label>
                            <div className="mt-2">
                                <input
                                    id="personalValue"
                                    name="personalValue"
                                    value={values.personalValue}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="number"
                                    autoComplete="email"
                                    placeholder='Personal Value'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.personalValue && touched.personalValue && <p className='text-red-500 text-xs'>{errors.personalValue}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="FamilyValue" className="block text-sm font-medium leading-6 text-gray-900">
                                Family Value
                            </label>
                            <div className="mt-2">
                                <input
                                    id="FamilyValue"
                                    name="FamilyValue"
                                    value={values.FamilyValue}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="number"
                                    autoComplete="email"
                                    placeholder='Family Value'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.FamilyValue && touched.FamilyValue && <p className='text-red-500 text-xs'>{errors.FamilyValue}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="daPreferredCountryte" className="block text-sm font-medium leading-6 text-gray-900">
                                Preferred Country
                            </label>
                            <div className="mt-2">
                                <input
                                    id="PreferredCountry"
                                    name="PreferredCountry"
                                    value={values.PreferredCountry}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Preferred Country'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.PreferredCountry && touched.PreferredCountry && <p className='text-red-500 text-xs'>{errors.PreferredCountry}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="PreferredState" className="block text-sm font-medium leading-6 text-gray-900">
                                Preferred State
                            </label>
                            <div className="mt-2">
                                <input
                                    id="PreferredState"
                                    name="PreferredState"
                                    value={values.PreferredState}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Preferred State'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.PreferredState && touched.PreferredState && <p className='text-red-500 text-xs'>{errors.PreferredState}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Complexion" className="block text-sm font-medium leading-6 text-gray-900">
                                Complexion
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Complexion"
                                    name="Complexion"
                                    value={values.Complexion}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    autoComplete="email"
                                    placeholder='Complexion'
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Complexion && touched.Complexion && <p className='text-red-500 text-xs'>{errors.Complexion}</p>}
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
export default PartnerExpection;