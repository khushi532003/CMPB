import { useAuthContext } from '@/context';
import React, { useState } from 'react'
import * as yup from 'yup';
import { useFormik } from "formik";

function ChangePassword() {
    const { changePassword } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);


    const initialValues = {
        oldpassword: "",
        newPassword: "",
        confirmPassword: ""
    };

    const validationSchema = yup.object({
        oldpassword: yup.string().min(6).max(16).required("old Password is Required"),
        newPassword: yup.string().min(6,).max(16,).required("new Password is Required"),
        confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], "passwords must match").required("confirm Password is Required")
    });


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const { values, handleSubmit, handleChange, errors, touched, handleBlur, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (value) => {
            changePassword(value);
            resetForm()
        },
    });

    return (
        <div style={{ backgroundImage: "url(./images/bg.jpg)" }}>
            <div className='py-10'>
                <div className="py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full">
                    <div className="heading flex justify-center flex-col items-center text-center">
                        <h3 className="text-5xl sm:text-7xl">Change Password</h3>
                        <img src="../images/headingImg.png" alt="" className="w-64" />
                    </div>
                    <div className="layout ">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="oldpassword">Old Password</label>
                                    <input id="oldpassword"
                                        name="oldpassword"
                                        value={values.oldpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Old Password' />
                                </div>
                                {errors.oldpassword && touched.oldpassword ? (
                                    <div className="text-red-500 py-2">{errors.oldpassword}</div>
                                ) : null}
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="newpassword">New Password</label>
                                    <input id="newPassword"
                                        name="newPassword"
                                        value={values.newPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type={showPassword ? 'text' : 'password'}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter New Password' />
                                </div>
                                {errors.newPassword && touched.newPassword ? (
                                    <div className="text-red-500 py-2">{errors.newPassword}</div>
                                ) : null}
                            </div>
                            <div className="grid grid-cols-1 py-2">
                                <div>
                                    <label className="" htmlFor="confirmpassword">Confirm Password</label>
                                    <input id="confirmPassword"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type={showPassword ? 'text' : 'password'}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Confirm Password' />
                                </div>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className="text-red-500 py-2">{errors.confirmPassword}</div>
                                ) : null}
                            </div>
                            <div className='pb-3 '>
                                <label htmlFor="showPass" >
                                    <input className='font-bold ' id='showPass' type='checkbox' onChange={togglePasswordVisibility} /><span className='cursor-pointer ml-1'>show password </span>
                                </label>
                            </div>
                            <div className="w-full mt-6">
                                <button type='submit' className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;