import { LoginValues } from '@/constant/AuthState';
import { useAuthContext } from '@/context';
import { LoginSchema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Loader from '@/constant/loader';
import { GoogleLogin } from '@react-oauth/google';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



function Login() {

    const { loader, LoginUser } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: LoginValues,
        validationSchema: LoginSchema,
        onSubmit: async (value) => {
            await LoginUser(value)
        }
    })

    const handleGoogle = async (auth) => {
        try {
            console.log(auth)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundSize: "110%", width: "100%" }}>

                    <div className='w-full max-w-md bg-red-100  shadow-lg  py-16 rounded-md p-6'>
                        <form onSubmit={handleSubmit} >
                            <div className='flex justify-center items-center mb-14 text-gray-500 font-bold text-2xl'>Login </div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border hover:border-red-400 focus:border-red-400' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='email or phone' />
                                {errors.email && touched.email && <p className='text-red-500' >{errors.email}</p>}
                            </div>

                            <div className='mb-4 relative'>
                                <input
                                    className='w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400'
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Password'
                                />
                                <span
                                    className='absolute right-3 top-3 cursor-pointer'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {errors.password && touched.password && (
                                    <p className='text-red-500'>{errors.password}</p>
                                )}
                            </div>

                            <p className='text-end font-semibold text-gray-500 mb-4'> <Link to="/forgetPassword" className="font-semibold text-blue-600 hover:underline ml-2 " > Forget password </Link></p>


                            <button type='submit' className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Login"}</button>
                        </form>
                        <div className='my-6'>
                            <GoogleLogin onSuccess={handleGoogle} onError={handleGoogle} />
                        </div>
                        <p className='text-center font-semibold text-gray-500 mb-4'>don't have account <Link to="/register" className="font-semibold text-blue-600 hover:underline ml-2 " > Register </Link></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;