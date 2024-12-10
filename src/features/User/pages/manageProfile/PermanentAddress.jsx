import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Loader from "@/constant/loader";
import { useProfileContext } from "@/context";
import { PermanentAddressSchema } from "@/validation/ProfileValidation";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function PermanentAddress({ data2 }) {
    const { Create, Update } = useProfileContext();
    const [loader, setLoader] = useState(false);
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [data, setData] = useState({
        country: "",
        state: "",
        city: "",
        pincode: ""
    })


    const { values, errors, touched, handleChange, handleBlur, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            country: "india" ?? "",
            state: "delji" ?? "",
            city: "abc" ?? "",
            pincode: "110033" ?? ""
        },
        validationSchema: PermanentAddressSchema,
        onSubmit: async (value) => {
            console.log(value);

        }


    })



    // const handleSubmitData = (event) => {
    //     setFlag(false)
    //     event.preventDefault();
    // };

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor='country'>Country *</label>
            <CountrySelect

                // onChange={(e) => {
                //     setData({ ...data, country: e.name });
                //     setCountryid(e.id);
                // }
                // }
                onChange={(e) => {
                    setCountryid(e.id);
                    setFieldValue("country", e.name);
                }}
                onBlur={handleBlur}
                placeHolder="Select Country"
            />
            {errors.country && touched.country && (
                <p className='text-red-500 text-sm'>{errors.country}</p>
            )}

            <label htmlFor='state'>State *</label>
            <StateSelect
                countryid={countryid}
                // onChange={(e) => {
                //     setData({ ...data, state: e.name });
                //     setstateid(e.id)
                // }}
                onChange={(e) => {
                    setstateid(e.id);
                    setFieldValue("state", e.name);  // Manually set Formik's value for state
                }}
                // onBlur={handleBlur}
                placeHolder="Select State"
            />
            {errors.state && touched.state && (
                <p className='text-red-500 text-sm'>{errors.state}</p>
            )}

            <label htmlFor='city'>City *</label>
            <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => setFieldValue("city", e.name)}
                onBlur={handleBlur}
                id="city"
                placeHolder="Select City"
            />
            {errors.city && touched.city && (
                <p className='text-red-500 text-sm'>{errors.city}</p>
            )}

            <label htmlFor='pincode'>Pincode *</label>
            <input
                // onChange={(e) => setData({ ...data, pincode: e.target.value })} 
                onChange={handleChange}
                onBlur={handleBlur}
                type='text' id='pincode' defaultValue={data2 ? data2?.pincode : ""} name='pincode' placeholder='Enter pincode Code' maxLength={6} required />
            {errors.pincode && touched.pincode && (
                <p className='text-red-500 text-sm'>{errors.pincode}</p>
            )}
            <button type='submit' className='w-full p-2 bg-RedTheme hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex'  >{loader ? <Loader /> : "Login"}</button>




        </form>
    );
}

export default PermanentAddress;
