import { useAuthContext } from '@/context';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from '@/constant/loader';
import Cookies from 'js-cookie';
import { BsArrowRepeat } from 'react-icons/bs';
import { toast } from 'react-toastify';

function VerifyOtp() {
    const {
        loader, VerifyOtp, setUserData, verifyAndLogin, OTPverify, Registered, setOTPVerify, paths, SendOtp,
    } = useAuthContext();

    const navigate = useNavigate();
    const [OTP, setOTP] = useState(null);
    const [resendLoading, setResendLoading] = useState(false);
    const [timer, setTimer] = useState(0);

    const { state } = useLocation();

    // Function to handle OTP verification
    const verifyOTP = async () => {
        if (Registered || paths?.current[0] === "/login" || paths?.current[1] === "/login") {
            const response = await verifyAndLogin(OTP, state.identifier)
            const data = response?.data
            const userDetails = {
                UserRole: data?.role,
                token: data?.token,
                Username: data?.firstName,
                Member: data?.RegisterPackage?.PremiumMember,
            };

            Cookies.set("USER_DETAILS", JSON.stringify(userDetails));
            setUserData({ token: data?.token, role: data?.role, name: data?.firstName, member: data?.RegisterPackage?.PremiumMember });
            localStorage.setItem("MemberID", data?.MemberID);
            localStorage.setItem("ProfileImage", data?.profileImage?.ImageURL);
            if (response.status === 200) {
                setOTPVerify(true);
            }
        } else {
            await VerifyOtp(OTP, state.identifier)
        }
    }

    // Resend OTP Handler
    const handleResendOTP = async () => {
        setResendLoading(true);
        try {
            if (!state?.identifier) {
                return;
            }
            const requestData = { identifier: state?.identifier };
            await SendOtp(requestData);
            setTimer(60);
        } catch (error) {
            console.error("Failed to resend OTP:", error);
        } finally {
            setResendLoading(false);
        }
    };

    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        if (OTPverify && (paths?.current[1] === "/forget_password" || paths?.current[2] === "/forget_password")) {
            setOTPVerify(false);
            navigate('/new_password', { state: { identifier: state?.identifier } });
        }
        if (OTPverify && (paths?.current[0] === "/login" || paths?.current[1] === "/login")) {
            setOTPVerify(false);
            navigate('/');
        }
    }, [OTPverify, paths]);

    useEffect(() => {
        if (Registered && OTPverify) {
            navigate('/');
        }
    }, [Registered, OTPverify]);

    return (
        <div>
            <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(./images/bg.jpg)" }}>
                <div className='max-w-md shadow-lg py-5 w-[95%] sm:w-[50%] bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                    <form>
                        <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>OTP Verification</h3>
                        <p className='bg-white py-2 my-3 w-full font-medium text-lg rounded-lg px-3'>{state?.identifier}</p>
                        <div className='mb-4'>
                            <input
                                className='w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400'
                                name='otp'
                                type="text"
                                placeholder='Enter OTP'
                                onChange={(e) => setOTP(e.target.value)}
                            />
                        </div>
                        <button
                            type='button'
                            onClick={verifyOTP}
                            className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex'
                            disabled={loader}
                        >
                            {loader ? <Loader /> : "Verify OTP"}
                        </button>
                    </form>
                    <div className='flex justify-between'>
                        <div className='mt-4 flex items-center gap-2 text-end text-red-800 hover:underline font-semibold'>
                            <BsArrowRepeat />
                            <button
                                type='button'
                                onClick={handleResendOTP}
                                className='flex items-center gap-2'
                                disabled={resendLoading || timer > 0}>
                                {resendLoading ? <Loader /> : timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                            </button>
                        </div>
                        <div className='mt-4 text-end text-red-800 hover:underline font-semibold'>
                            <Link to="/login">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VerifyOtp;
