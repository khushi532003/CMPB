import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Register() {


    return (
        <div>
            <div className='min-h-screen flex justify-center items-center bg-green-50'>
                <div className='w-full  max-w-md bg-white shadow-lg rounded-t-full py-16 rounded-md p-6'>
                    <form >
                        <div className='flex justify-center items-center mb-4 font-bold text-2xl'>Registration </div>

                        <select className='w-full p-2 mb-4 rounded-md'>
                            <option value="">Select gender</option>
                            <option value="user">Male</option>
                            <option value="admin">Female</option>
                        </select>

                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' type="text" placeholder='first name' />
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' type="text" placeholder='last name' />
                        </div>

                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' type="email" placeholder='Email' />
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' type="text" placeholder='Phone ' />
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' type="password" placeholder='Password' />
                        </div>
                        <div className='mb-4'>
                            <input className='w-full p-2  rounded-md' type="password" placeholder='confirm Password' />
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