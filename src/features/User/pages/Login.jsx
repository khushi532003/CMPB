import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Login() {

    return (
        <div>
            <div>

                <div className='min-h-screen flex justify-center items-center bg-green-50'>
                    <div className='w-full max-w-md bg-white shadow-lg rounded-t-full py-16 rounded-md p-6'>
                        <form >
                            <div className='flex justify-center items-center mb-4 font-bold text-2xl'>Login </div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md' type="email" placeholder='email or phone' />
                            </div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md' type="password" placeholder='Password' />
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