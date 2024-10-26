import { useAuthContext } from '@/context';
import React, { useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';



function VerifyOtp() {
    const { loader } = useAuthContext();
    const {search} = useLocation();
    const naviagte = useNavigate();

    const email = useMemo(()=>{
        const query = new URLSearchParams(search)
        return query.get('email')
    },[search])

    useEffect(()=>{
        if (!email) naviagte("/forget_password")
    }, [search])


    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundSize: "110%", width: "100%" }}>

                    <div className='w-full max-w-md bg-red-100  shadow-lg  py-16 rounded-md p-6'>
                        <form  >
                            <div className='flex justify-center items-center mb-14 text-gray-500 font-bold text-2xl'>OTP Verfication</div>

                            <p className='bg-white py-2 my-3 w-full font-medium text-lg rounded-lg px-3'>exmaple@gmail.com</p>
                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border font-bold hover:border-red-400 focus:border-red-400' name='email' type="text" placeholder='Enter otp' />
                            </div>

                            <button type='submit' className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Verify otp"}</button>
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

export default VerifyOtp;