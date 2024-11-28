import Loader from "@/constant/loader";
import { useProfileContext } from "@/context";
import { PermanentAddressSchema } from "@/validation/ProfileValidation";
import { useFormik } from "formik";
import React, { useState } from "react";

function PermanentAddress({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);


    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            Country: data?.Country ? data?.Country : "",
            State: data?.State ? data?.State : "",
            City: data?.City ? data?.City : "",
            Pincode: data?.Pincode ? data?.Pincode : ""
        },
        enableReinitialize: true,
        validationSchema: PermanentAddressSchema,
        onSubmit: async (value) => {
            setLoader(true);
            try {
                if (!data) {
                    await Create("/profile/permanentaddress/create", value)
                } else {
                    await Update("/profile/permanentaddress/update", value)
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
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base font-semibold leading-7 text-gray-900">Permanent Address</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="Country"
                                    value={values.Country}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option disabled>select</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </select>
                                {errors.Country && touched.Country && <p className="text-red-500 text-sm">{errors.Country}</p>}
                            </div>
                        </div>


                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="City"
                                    value={values.City}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="city"
                                    autoComplete="address-level2"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.City && touched.City && <p className="text-red-500 text-sm">{errors.City}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className="mt-2">
                                <input
                                    id="state"
                                    name="State"
                                    value={values.State}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="state"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.State && touched.State && <p className="text-red-500 text-sm">{errors.State}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="pin-code" className="block text-sm font-medium leading-6 text-gray-900">
                                pin code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="pin-code"
                                    name="Pincode"
                                    value={values.Pincode}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="pin code"
                                    type="text"
                                    autoComplete="pin-code"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Pincode && touched.Pincode && <p className="text-red-500 text-sm">{errors.Pincode}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end py-4'>
                        <div>
                            <button type="submit" className='px-4 py-2 bg-RedTheme text-white mx-2'>{loader ? <Loader /> : "Update"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default PermanentAddress;