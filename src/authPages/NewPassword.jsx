import { useAuthContext } from '@/context';
import React, { useEffect, useMemo, useState } from 'react';
import Loader from '@/constant/loader';
import { useLocation, useNavigate } from 'react-router-dom';

function NewPassword() {
    const { loader } = useAuthContext();
    const { search } = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { verify, email } = useMemo(() => {
        const query = new URLSearchParams(search);
        return { verify:query.get('verify'), email: query.get('email') }
    }, [search]);

    useEffect(() => {
        if (!verify || !email) navigate("/forget_password") ;
    }, [search]);


    return (
        <div>
            <div>
                <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400    bg-center bg-cover bg-no-repeat' style={{ backgroundSize: "110%", width: "100%" }}>

                    <div className='w-full max-w-md bg-red-100  shadow-lg  py-16 rounded-md p-6'>
                        <form  >
                            <div className='flex justify-center items-center mb-14 text-gray-500 font-bold text-2xl'>Create New Password</div>

                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border font-bold hover:border-red-400 focus:border-red-400' name='email' type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            </div>
                            <div className='mb-4'>
                                <input className='w-full p-2  rounded-md outline-none border font-bold hover:border-red-400 focus:border-red-400' name='email' type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' />
                            </div>
                            <div className='pb-3 '>
                                <label htmlFor="showPass" >
                                    <input className='font-bold ' id='showPass' type='checkbox' onChange={togglePasswordVisibility} /><span className='cursor-pointer ml-1 '>show password </span>
                                </label>
                            </div>

                            <button type='submit' className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Submit"}</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword;