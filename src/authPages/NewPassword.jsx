import { useAuthContext } from '@/context';
import React, { useState } from 'react';
import Loader from '@/constant/loader';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";


function NewPassword() {
    const { loader, newPassword } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const { state } = useLocation()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            identifier: state.identifier, newPassword: "", confirmPassword:""
        },
        validationSchema: yup.object({
            identifier: yup.string().required("Email/Phone is required"),
            newPassword: yup.string().required("password is required"),
            confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], "Passwords must match").required("Confirm Password is required"),
        }),
        onSubmit: async (value) => {
            await newPassword(value)
        }
    })




    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(./images/bg.jpg)" }}>

                    <div className='max-w-md   shadow-lg py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                        <form onSubmit={handleSubmit} >
                            <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>Create New Password</h3>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border font-bold hover:border-red-400 focus:border-red-400' name='newPassword' value={values.newPassword} onChange={handleChange} onBlur={handleBlur} type={showPassword ? 'text' : 'password'} placeholder='Password' />
                                {errors.newPassword && touched.newPassword && <span className='text-red-500'>{errors.newPassword}</span>}
                            </div>
                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border font-bold hover:border-red-400 focus:border-red-400' name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' />
                                {errors.confirmPassword && touched.confirmPassword && <span className='text-red-500'>{errors.confirmPassword}</span>}
                            </div>
                            <div className='pb-3 '>
                                <label htmlFor="showPass" >
                                    <input className='font-bold ' id='showPass' type='checkbox' onChange={togglePasswordVisibility} /><span className='cursor-pointer ml-1 '>show password </span>
                                </label>
                            </div>

                            <button type='submit' className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Submit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword;