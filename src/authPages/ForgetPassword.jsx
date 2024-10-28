import { useAuthContext } from '@/context';
import React from 'react';
import { Link } from "react-router-dom";
import Loader from '@/constant/loader';


function ForgetPassword() {
    const { loader } = useAuthContext();


    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(https://www.shutterstock.com/shutterstock/photos/1881715708/display_1500/stock-vector-blush-pink-watercolor-fluid-painting-vector-design-card-dusty-rose-and-golden-marble-geode-frame-1881715708.jpg" }}>

                    <div className='max-w-md   shadow-lg py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                        <form  >
                            <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>Forget Password</h3>

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