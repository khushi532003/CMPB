import { useAuthContext } from '@/context';
import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';
import { useFormik } from 'formik';
import * as yup from 'yup';


function ForgetPassword() {
    const { loader, ForgetPassword, forgetEmail } = useAuthContext();
    const navigate = useNavigate()
    
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues: { email :""},
        validationSchema: yup.object({ email :yup.string().required("email is required")}),
        onSubmit:async (value) => {
            await ForgetPassword(value)
        }
    })


    useEffect(()=>{
        if(forgetEmail){
            navigate('/verify_otp', { state: { email:forgetEmail.email }})
        }
    }, [forgetEmail])

    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundSize: "110%", width: "100%" }}>
                    <div className='w-full max-w-md bg-red-100  shadow-lg  py-16 rounded-md p-6'>
                        <form onSubmit={handleSubmit} >
                            <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>Forget Password</h3>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border hover:border-red-400 focus:border-red-400' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}  type="text" placeholder='email or phone' />
                                {errors.email && touched.email && <span className='text-red-500' >{errors.email}</span>}
                            </div>

                            <button type='submit' className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Send otp"}</button>
                        </form>

                        <div className='mt-4 text-end text-blue-700 hover:underline font-semibold'>
                            <Link to="/login">Back to Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;