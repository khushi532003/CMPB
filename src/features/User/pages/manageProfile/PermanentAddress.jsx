import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Country, State, City } from "country-state-city";
import Loader from "@/constant/loader";
import { useProfileContext } from "@/context";
import { PermanentAddressSchema } from "@/validation/ProfileValidation";

function PermanentAddress({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);
    const [countries, setCountries] = useState([data?.Country]);
    const [states, setStates] = useState([data?.State]);
    const [cities, setCities] = useState([data?.City]);

    const { values, errors, touched, handleSubmit, handleBlur, handleChange, setFieldValue } = useFormik({
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
                    await Create("/profile/permanentaddress/create", value);
                } else {
                    await Update("/profile/permanentaddress/update", value);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoader(false);
            }
        },
    });

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    // Load states when country changes
    useEffect(() => {
        if (values.Country) {
            const selectedCountry = countries.find((country) => country.isoCode === values.Country);
            if (selectedCountry) {
                setStates(State.getStatesOfCountry(selectedCountry.isoCode));
                // Reset City when country changes
                setCities([]);
                setFieldValue("State", ""); // Reset state
                setFieldValue("City", ""); // Reset city
            }
        }
    }, [values.Country, countries]);

    // Load cities when state changes
    useEffect(() => {
        if (values.State) {
            const selectedState = states.find((state) => state.isoCode === values.State);
            if (selectedState) {
                setCities(City.getCitiesOfState(selectedState.countryCode, selectedState.isoCode));
                setFieldValue("City", ""); // Reset city
            }
        }
    }, [values.State, states]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base font-semibold leading-7 text-gray-900">
                        Permanent Address
                    </h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        {/* Country Dropdown */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="country"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="Country"
                                    value={values.Country}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    {countries.map((country) => (
                                        <option key={country.isoCode} value={country.isoCode}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.Country && touched.Country && (
                                    <p className="text-red-500 text-xs">{errors.Country}</p>
                                )}
                            </div>
                        </div>

                        {/* State Dropdown */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="state"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                State
                            </label>
                            <div className="mt-2">
                                <select
                                    id="state"
                                    name="State"
                                    value={values.State}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    disabled={!values.Country}
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    {states.map((state) => (
                                        <option key={state.isoCode} value={state.isoCode}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.State && touched.State && (
                                    <p className="text-red-500 text-xs">{errors.State}</p>
                                )}
                            </div>
                        </div>

                        {/* City Dropdown */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                City
                            </label>
                            <div className="mt-2">
                                <select
                                    id="city"
                                    name="City"
                                    value={values.City}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className="px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    disabled={!values.State}
                                >
                                    <option value="" disabled>
                                        Select
                                    </option>
                                    {cities.map((city) => (
                                        <option key={city.name} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.City && touched.City && (
                                    <p className="text-red-500 text-xs">{errors.City}</p>
                                )}
                            </div>
                        </div>

                        {/* Pin Code */}
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="pin-code"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Pin Code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="pin-code"
                                    name="Pincode"
                                    value={values.Pincode}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Pin Code"
                                    type="text"
                                    className="block px-2 w-full border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.Pincode && touched.Pincode && (
                                    <p className="text-red-500 text-xs">{errors.Pincode}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end py-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-RedTheme text-white mx-2"
                            disabled={loader}
                        >
                            {loader ? <Loader /> : "Update"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PermanentAddress;
