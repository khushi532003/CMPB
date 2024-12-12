import Loader from "@/constant/loader";
import { useProfileContext } from "@/context";
import React, { useState, useEffect } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

function PermanentAddress({ data }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);
    const [countryid, setCountryid] = useState(0);
    const [countryName, setCountryName] = useState(data?.Country, null);
    const [stateName, setStateName] = useState(data?.State, null);
    const [cityName, setCityName] = useState(data?.City, null);
    const [Pincode, setPincode] = useState(data?.Pincode, null)

    const [countriesList, setCountriesList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);


    useEffect(() => {
        GetCountries().then((result) => setCountriesList(result));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = {
            Country: countryName,
            State: stateName,
            City: cityName,
            Pincode: Pincode
        };
        setLoader(true);
        try {
            if (!data) {
                await Create("/profile/permanentaddress/create", newData);
            } else {
                await Update("/profile/permanentaddress/update", newData)
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoader(false);
        }
    };

    return (
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h4 className="text-base  font-semibold leading-7 text-gray-900">Present Address</h4>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">


                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    className="px-2 block w-full  border-0 py-2.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={async (e) => {
                                        const country = countriesList[e.target.value];
                                        setCountryid(country?.id)
                                        setCountryName(country?.name || "");
                                        if (country) {
                                            const state = await GetState(country.id);
                                            setStateList(state);
                                        }
                                    }}
                                    value={countryName}
                                >
                                    <option value="">{countryName ?? data?.Country ?? "Select a country"}</option>
                                    {countriesList.map((item, index) => (
                                        <option key={index} value={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className="mt-2">
                                <select
                                    id="state"
                                    name="state"
                                    className="px-2 block w-full  border-0 py-2.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={async (e) => {
                                        const state = stateList[e.target.value];
                                        setStateName(state?.name || "");
                                        if (state) {
                                            const city = await GetCity(countryid, state.id)
                                            setCityList(city)
                                        }
                                    }}
                                    value={stateName}
                                >
                                    <option value="">{stateName ?? data?.State ?? "Select a state"}</option>
                                    {stateList.map((item, index) => (
                                        <option key={index} value={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <select
                                    id="city"
                                    name="city"
                                    className="px-2 block w-full  border-0 py-2.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => {
                                        const city = cityList[e.target.value];
                                        setCityName(city?.name || "");
                                    }}
                                    value={cityName}
                                >
                                    <option value="">{cityName ?? data?.City ?? "Select a city"}</option>
                                    {cityList?.map((item, index) => (
                                        <option key={index} value={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="Pincode" className="block text-sm font-medium leading-6 text-gray-900">
                                Pincode
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Pincode"
                                    name="Pincode"
                                    type="text"
                                    placeholder="enter pincode"
                                    className="block px-2 w-full  border-0 py-1.5 text-gray-900 shadow-sm capitalize ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={Pincode ?? data?.Pincode ?? ""}
                                    onChange={(e) =>
                                        setPincode(e.target.value)}
                                    maxLength={6} required />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end py-4'>
                        <div>
                            <button type='submit' onClick={handleSubmit} className='px-4 py-2 bg-RedTheme text-white mx-2'>{loader ? <Loader /> : "Update"}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default PermanentAddress;