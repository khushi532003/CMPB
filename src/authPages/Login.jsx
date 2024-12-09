import { LoginValues } from '@/constant/AuthState';
import { useAuthContext } from '@/context';
import { LoginSchema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';
// import { GoogleLogin } from '@react-oauth/google';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {

    const { loader, LoginUser, ForgetPassword } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: LoginValues,
        validationSchema: LoginSchema,
        onSubmit: async (value) => {
            const res = await LoginUser(value)
            if (res === 302) {
                ForgetPassword({ identifier: value?.identifier })
                navigate("/verify_otp", { state: { identifier: value?.identifier } })
            }

        }
    })

    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(./images/bg.jpg)" }}>

                    <div className='max-w-md   shadow-lg py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                        <form onSubmit={handleSubmit} >
                            <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>Login </h3>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border hover:border-red-400 focus:border-red-400' value={values.identifier} name='identifier' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Email or Phone' />
                                {errors.identifier && touched.identifier && <p className='text-red-500 text-sm' >{errors.identifier}</p>}
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
                                    <p className='text-red-500 text-sm'>{errors.password}</p>
                                )}
                            </div>

                            <p className='text-end font-semibold text-gray-500 mb-4'> <Link to="/forget_password" className="font-semibold text-blue-600 hover:underline ml-2 " > Forget password ? </Link></p>

                            <button type='submit' className='w-full p-2 bg-RedTheme hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Login"}</button>
                        </form>

                        {/* <div className='my-6'>
                            <GoogleLogin onSuccess={handleGoogle} onError={handleGoogle} />
                        </div> */}

                        <p className=' py-4 text-center font-semibold text-gray-500 mb-4'>Don't have an account ?<Link to="/register" className="font-semibold text-blue-600 hover:underline ml-2 " > Register </Link></p>

                        <div className='flex items-center justify-center'>
                            <button className='px-4 py-2 bg-RedTheme hover:bg-red-900 duration-300 rounded-md font-semibold  mb-4'><Link to="/" className="font-semibold text-white" > Back to home </Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;