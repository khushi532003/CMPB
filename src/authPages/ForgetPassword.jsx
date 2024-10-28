import { useAuthContext } from '@/context';
import React from 'react';
import { Link } from "react-router-dom";
import Loader from '@/constant/loader';


function ForgetPassword() {
    const { loader } = useAuthContext();
    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundSize: "110%", width: "100%" }}>
                    <div className='w-full max-w-md bg-red-100  shadow-lg  py-16 rounded-md p-6'>
                        <form  >
                            <div className='flex justify-center items-center mb-14 text-gray-500 font-bold text-2xl'>Forget Password ?</div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border hover:border-red-400 focus:border-red-400' name='email' type="text" placeholder='email or phone' />
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