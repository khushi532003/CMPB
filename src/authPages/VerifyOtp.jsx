import { useAuthContext } from '@/context';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';

function VerifyOtp() {
    const { loader, VerifyOtp, verifyAndLogin, OTPverify, Registered, setOTPVerify, paths } = useAuthContext();
    const navigate = useNavigate();

    console.log(paths);

    const [OTP, setOTP] = useState(null);
    const { state } = useLocation();

    const verifyOTP = async () => {
        if (Registered || paths?.current[0] === "/login" || paths?.current[1] === "/login") {
            console.log('1');
            
            await verifyAndLogin(OTP, state.identifier)
        } else {
            console.log('2');


            await VerifyOtp(OTP, state.identifier)
        }
    }

    useEffect(() => {

        if (OTPverify && (paths?.current[1] === "/forget_password" || paths?.current[2] === "/forget_password")) {
            setOTPVerify(false)
            navigate('/new_password', { state: { identifier: state.identifier } })
        }
        if (OTPverify && (paths?.current[0] === "/login" || paths?.current[1] === "/login")) {
            setOTPVerify(false)
            navigate('/')
        }
    }, [OTPverify, paths])


    useEffect(() => {
        if (Registered && OTPverify) {
            navigate('/')
        }
    }, [Registered, OTPverify])

    return (
        <div>
            <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(./images/bg.jpg)" }}>
                <div className='max-w-md   shadow-lg py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                    <form>
                        <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>OTP Verification</h3>

                        <p className='bg-white py-2 my-3 w-full font-medium text-lg rounded-lg px-3'>{state?.identifier}</p>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md outline-none border  hover:border-red-400 focus:border-red-400' name='identifier' type="text" placeholder='Enter otp' onChange={(e) => setOTP(e.target.value)} />
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