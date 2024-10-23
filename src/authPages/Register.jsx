import { RegisterValues } from '@/constant/AuthState';
import { useAuthContext } from '@/context';
import { Registerschema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";



function Register() {
    const { RegisterUser } = useAuthContext()

    const {values,errors,touched,handleChange,handleBlur,handleSubmit} = useFormik({
        initialValues:RegisterValues,
        validationSchema:Registerschema,
        onSubmit: (value)=>{
            console.log(value)
           RegisterUser(value)
        }
    })

    return (
        <div className={'bg-total_user4 bg-center'}>
            <div className='min-h-screen flex justify-center items-center bg-green-50'>
                <div className='w-full  max-w-md bg-white shadow-lg  py-16 rounded-md p-6'>
                    <form onSubmit={handleSubmit} >
                        <div className='flex justify-center items-center mb-4 font-bold text-2xl'>Registration </div>

                        <select className='w-full p-2 mb-4 rounded-md' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}  >
                            <option value="">Select gender</option>
                            <option value="user">Male</option>
                            <option value="admin">Female</option>
                        </select>
                        {errors.gender && touched.gender && <p className='text-red-500' >{errors.gender}</p>}
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.DOB} name='DOB' onChange={handleChange} onBlur={handleBlur}  type="date" placeholder='first name' />
                            {errors.DOB && touched.DOB && <p className='text-red-500' >{errors.DOB}</p>}
                        </div>

                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.firstName} name='firstName' onChange={handleChange} onBlur={handleBlur}  type="text" placeholder='first name' />
                            {errors.firstName && touched.firstName && <p className='text-red-500' >{errors.firstName}</p>}
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.lastName} name='lastName' onChange={handleChange} onBlur={handleBlur}  type="text" placeholder='last name' />
                            {errors.lastName && touched.lastName && <p className='text-red-500' >{errors.lastName}</p>}
                        </div>

                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} type="email" placeholder='Email' autoComplete="username" />
                            {errors.email && touched.email && <p className='text-red-500' >{errors.email}</p>}
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.phone} name='phone' onChange={handleChange} onBlur={handleBlur} type="number" placeholder='Phone ' />
                            {errors.phone && touched.phone && <p className='text-red-500' >{errors.phone}</p>}
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} type="password" placeholder='Password' autoComplete="new-password" />
                            {errors.password && touched.password && <p className='text-red-500' >{errors.password}</p>}
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' value={values.confirmPassword} name='confirmPassword' onChange={handleChange} onBlur={handleBlur} type="password" placeholder='confirm Password' autoComplete="new-password" />
                            {errors.confirmPassword && touched.confirmPassword && <p className='text-red-500' >{errors.confirmPassword}</p>}
                        </div>

                        <p className='text-center mb-4'>Alreday Registered <Link to="/login" className="font-semibold text-blue-600" > Login </Link></p>
                        <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 duration-300 text-white rounded-md font-semibold' >SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;