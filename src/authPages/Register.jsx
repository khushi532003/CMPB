
import React, { useState } from 'react';
import { RegisterValues } from '@/constant/AuthState';
import { useAuthContext } from '@/context';
import { Registerschema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import Loader from '@/constant/loader';
import { FaEye, FaEyeSlash } from 'react-icons/fa';




function Register() {
    const { RegisterUser, loader } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: RegisterValues,
        validationSchema: Registerschema,
        onSubmit: (value) => {
            console.log(value)
            RegisterUser(value)
        }
    })

    return (
        <div >
            <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundSize: "110%", width: "100%" }}>

                <div className='w-full m-4 max-w-xl  bg-red-100 shadow-lg  py-16 rounded-md p-6'>
                    <form onSubmit={handleSubmit} >
                        <div className='flex justify-center items-center mb-14 font-bold text-gray-500 text-2xl'>Create Your Account </div>

                        <select className='w-full p-2  text-gray-600 mb-4 rounded-md  outline-none border hover:border-red-400 focus:border-red-400' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}  >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && touched.gender && <p className='text-red-500' >{errors.gender}</p>}
                        <div className='mb-4'>
                            <input className='w-full p-2 text-gray-600 rounded-md   outline-none border hover:border-red-400 focus:border-red-400' value={values.DOB} name='DOB' onChange={handleChange} onBlur={handleBlur} type="date" placeholder='first name' />
                            {errors.DOB && touched.DOB && <p className='text-red-500' >{errors.DOB}</p>}
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='mb-4'>
                                <input className='w-full p-2   outline-none border hover:border-red-400 focus:border-red-400  rounded-md' value={values.firstName} name='firstName' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='first name' />
                                {errors.firstName && touched.firstName && <p className='text-red-500' >{errors.firstName}</p>}
                            </div>
                            <div className='mb-4'>
                                <input className='w-full p-2 ml-4 rounded-md  outline-none border hover:border-red-400 focus:border-red-400' value={values.lastName} name='lastName' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='last name' />
                                {errors.lastName && touched.lastName && <p className='text-red-500' >{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md  outline-none border hover:border-red-400 focus:border-red-400' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} type="email" placeholder='Email' autoComplete="username" />
                                {errors.email && touched.email && <p className='text-red-500' >{errors.email}</p>}
                            </div>
                            <div className='mb-4'>
                                <input className='w-full p-2 ml-4 rounded-md  outline-none border hover:border-red-400 focus:border-red-400' value={values.phone} name='phone' onChange={handleChange} onBlur={handleBlur} type="string" maxLength="12" placeholder='Phone ' />
                                {errors.phone && touched.phone && <p className='text-red-500' >{errors.phone}</p>}
                            </div>
                        </div>

                        <div className='flex justify-between items-center '>
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
                                    className='absolute right-3 top-3 cursor-pointer duration-300'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {errors.password && touched.password && (
                                    <p className='text-red-500'>{errors.password}</p>
                                )}
                            </div>

                            <div className='mb-4 relative'>
                                <input
                                    className='w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400'
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='confirmPassword'
                                />
                                <span
                                    className='absolute right-3 top-3 cursor-pointer duration-300'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <p className='text-red-500'>{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>

                        <p className='text-center mb-4 font-semibold text-gray-500 '>Alreday Registered <Link to="/login" className="font-semibold text-blue-600 hover:underline ml-2" > Login </Link></p>
                        <button type='submit' className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-bold flex items-center justify-center' >{loader ? <Loader /> : "Register"}</button>
                    </form>

                    <div className='mt-6'>
                        <p className='flex items-center justify-center mb-3 font-semibold text-gray-500'>or join with google</p>
                        <Link className='flex items-center justify-center text-xl '><s className='p-2 bg-red-500 rounded-full text-white hover:bg-red-800 duration-300' ><CgMail /></s></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;