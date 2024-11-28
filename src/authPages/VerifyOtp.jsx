import { useAuthContext } from '@/context';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';

function VerifyOtp() {
    const { loader, VerifyOtp, OTPverify, Registered } = useAuthContext();
    const navigate = useNavigate();
    const [OTP, setOTP] = useState(null);
    const { state } = useLocation();

    const verifyOTP = async () => {
        await VerifyOtp(OTP, state.email)
    }

    useEffect(() => {
        if (OTPverify && !Registered) {
            navigate('/new_password', { state: { email: state.email } })
        }
    }, [OTPverify, Registered])

    useEffect(() => {
        if (Registered && OTPverify) {
            navigate('/login')
        }
    }, [Registered, OTPverify])

    return (
        <div>
            <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(./images/bg.jpg)" }}>
                <div className='max-w-md   shadow-lg py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                    <form>
                        <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>OTP Verification</h3>

                        <p className='bg-white py-2 my-3 w-full font-medium text-lg rounded-lg px-3'>{state?.email}</p>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md outline-none border font-bold hover:border-red-400 focus:border-red-400' name='email' type="text" placeholder='Enter otp' onChange={(e) => setOTP(e.target.value)} />
                        </div>

                        <button type='button' onClick={verifyOTP} className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Verify otp"}</button>
                    </form>

                    <div className='mt-4 text-end text-blue-700 hover:underline font-semibold'>
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp;