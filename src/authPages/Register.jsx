import React, { useState } from 'react';
import { RegisterValues } from '@/constant/AuthState';
import { useAuthContext } from '@/context';
import { Registerschema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';
import { useEffect } from 'react';



function Register() {
    const { RegisterUser, loader, forgetEmail, Registered } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: RegisterValues,
        validationSchema: Registerschema,
        onSubmit: async (value) => {
            await RegisterUser(value)

            console.log("still here");

        }
    })
    useEffect(() => {
        if (forgetEmail) {
            console.log("here");

            navigate('/verify_otp', { state: { email: forgetEmail.email } })
        }


    }, [forgetEmail])
    useEffect(() => {
        if (Registered) {
            console.log("here 1");

            navigate('/verify_otp', { state: { email: Registered.email } })
        }


    }, [Registered])


    return (
        <div >
            <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(https://www.shutterstock.com/shutterstock/photos/1881715708/display_1500/stock-vector-blush-pink-watercolor-fluid-painting-vector-design-card-dusty-rose-and-golden-marble-geode-frame-1881715708.jpg" }}>

                <div className='m-4 max-w-xl  py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full shadow-lg rounded-md p-6'>
                    <form onSubmit={handleSubmit} >
                        <h3 className='flex justify-center items-center mb-14 font-bold text-gray-500 text-5xl'>Create Your Account </h3>

                        <select className='w-full p-2  text-gray-600  rounded-md  outline-none border hover:border-red-400 focus:border-red-400' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}  >
                            <option disabled value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && touched.gender && <p className='text-red-500 text-sm' >{errors.gender}</p>}
                        <div className='mb-4 mt-4'>

                            <input className='w-full p-2 text-gray-600 rounded-md   outline-none border hover:border-red-400 focus:border-red-400' value={values.DOB} name='DOB' onChange={handleChange} onBlur={handleBlur} type="date" placeholder='first name' />
                            {errors.DOB && touched.DOB && <p className='text-red-500 text-sm' >{errors.DOB}</p>}
                        </div>

                        <div className='flex justify-between items-center '>
                            <div className='mb-4'>
                                <input className='w-full p-2 outline-none border hover:border-red-400 focus:border-red-400  rounded-md' value={values.firstName} name='firstName' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='first name' />
                                {errors.firstName && touched.firstName && <p className='text-red-500 text-sm' >{errors.firstName}</p>}
                            </div>
                            <div className='mb-4'>
                                <input className='w-full p-2 rounded-md  outline-none border hover:border-red-400 focus:border-red-400' value={values.lastName} name='lastName' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='last name' />
                                {errors.lastName && touched.lastName && <p className='text-red-500 text-sm' >{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md  outline-none border hover:border-red-400 focus:border-red-400' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} type="email" placeholder='Email' autoComplete="username" />
                                {errors.email && touched.email && <p className='text-red-500 text-sm' >{errors.email}</p>}
                            </div>
                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md  outline-none border hover:border-red-400 focus:border-red-400' value={values.phone} name='phone' onChange={handleChange} onBlur={handleBlur} type="text" maxLength="12" placeholder='Phone ' />
                                {errors.phone && touched.phone && <p className='text-red-500 text-sm' >{errors.phone}</p>}
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

                                {errors.password && touched.password && (
                                    <p className='text-red-500 text-sm'>{errors.password}</p>
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

                                {errors.confirmPassword && touched.confirmPassword && (
                                    <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>
                        <div className='pb-3 '>
                            <label htmlFor="showPass" >
                                <input className='font-bold ' id='showPass' type='checkbox' onChange={togglePasswordVisibility} /><span className='cursor-pointer ml-1'>show password </span>
                            </label>
                        </div>

                        <button type='submit' className='w-full  p-2 bg-RedTheme hover:bg-red-800 duration-300 text-white rounded-md font-bold flex items-center justify-center' disabled={loader} >{loader ? <Loader /> : "Register"}</button>
                    </form>

                    <p className='text-center mt-4 mb-8 font-semibold text-gray-500 '>Alreday Registered <Link to="/login" className="font-semibold text-blue-600 hover:underline ml-2" > Login </Link></p>

                    <div className='flex items-center justify-center'>
                        <button className='px-4 py-2 bg-RedTheme hover:bg-red-800 duration-300 rounded-md font-semibold  mb-4'><Link to="/" className="font-semibold text-white" > Back to home </Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;