import Loader from "@/constant/loader";
import { useProfileContext } from "@/context";
import { PresentAddressSchema } from "@/validation/ProfileValidation";
import { useFormik } from "formik";
import React, { useState } from "react";

function PresentAddress({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);
    const [selectedState, setSelectedState] = useState("");

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    ]

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            Country: data?.Country ? data?.Country : "",
            State: data?.State ? data?.State : "",
            City: data?.City ? data?.City : "",
            Pincode: data?.Pincode ? data?.Pincode : "",
            ResidencyType: data?.ResidencyType ? data?.ResidencyType : "",
            ResidencySince: data?.ResidencySince ? data?.ResidencySince : ""
        },
        enableReinitialize: true,
        validationSchema: PresentAddressSchema,
        onSubmit: async (value) => {
            setLoader(true)
            try {
                if (!data) {
                    await Create("/profile/presentaddress/create", value)
                } else {
                    await Update("/profile/presentaddress/update", value)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoader(false);
            }
        }
    })


    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base font-semibold leading-7 text-gray-900">Present Address</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="ResidencyType" className="block text-sm font-medium leading-6 text-gray-900">
                                Residency Type
                            </label>
                            <div className="mt-2">
                                <select
                                    id="ResidencyType"
                                    name="ResidencyType"
                                    value={values.ResidencyType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="country-name"
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option disabled>Select</option>
                                    <option value="own">Own</option>
                                    <option value="rented">Rented</option>
                                </select>
                                {errors.ResidencyType && touched.ResidencyType && <p className="text-red-500 text-xs">{errors.ResidencyType}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="ResidencySince" className="block text-sm font-medium leading-6 text-gray-900">
                                Residency Since in Years
                            </label>
                            <div className="mt-2">
                                <input
                                    id="ResidencySince"
                                    name="ResidencySince"
                                    value={values.ResidencySince}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="ResidencySince"
                                    type="number"
                                    // autoComplete="address-level1"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.ResidencySince && touched.ResidencySince && <p className="text-red-500 text-xs">{errors.ResidencySince}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Country"
                                    name="Country"
                                    value={values.Country}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Country && touched.Country && <p className="text-red-500 text-xs">{errors.Country}</p>}
                            </div>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="State" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className="mt-2">
                                <select
                                    id="State"
                                    name="State"
                                    value={values.State}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={""}>select</option>
                                    {states.map((state, index) => (
                                        <option key={index}>{state}</option>
                                    ))}
                                </select>
                                {errors.State && touched.State && <p className="text-red-500 text-xs">{errors.State}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3 sm:col-start-1">
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
                                {errors.City && touched.City && <p className="text-red-500 text-xs">{errors.City}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="pin-code" className="block text-sm font-medium leading-6 text-gray-900">
                                Pin code
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
                                {errors.Pincode && touched.Pincode && <p className="text-red-500 text-xs">{errors.Pincode}</p>}
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
export default PresentAddress;