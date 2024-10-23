import { LoginValues } from '@/constant/AuthState';
import { useAuthContext } from '@/context';
import { LoginSchema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from "react-router-dom";


function Login() {
    const { LoginUser } = useAuthContext()
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:LoginValues,
        validationSchema:LoginSchema,
        onSubmit:(value)=>{
            LoginUser(value)
        }
    })

    return (
        <div>
            <div>
                <div className='min-h-screen flex justify-center items-center bg-gray-100'>
                    <div className='w-full max-w-md bg-white shadow-lg  py-16 rounded-md p-6'>
                        <form onSubmit={handleSubmit} >
                            <div className='flex justify-center items-center mb-4 font-bold text-2xl'>Login </div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur}  type="text" placeholder='email or phone' />
                                {errors.email && touched.email && <p className='text-red-500' >{errors.email}</p>}
                            </div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md' type="password" value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} placeholder='Password' />
                                {errors.password && touched.password && <p className='text-red-500' >{errors.password}</p>}
                            </div>

                            <p className='text-center mb-4'>don't have account <Link to="/register" className="font-semibold text-blue-600" > Register </Link></p>
                            <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 duration-300 text-white rounded-md font-semibold' >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;