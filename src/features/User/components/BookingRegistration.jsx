import { RegisterValues } from '@/constant/AuthState';
import Loader from '@/constant/loader';
import { useAuthContext } from '@/context';
import { Registerschema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


function BookingRegistration({ toggleModal, setToggleModal }) {

    const { RegisterUser, loader, forgetEmail, Registered, VerifyOtp, verifyAndLogin, OTPverify, CheckUser, setOTPVerify, paths } = useAuthContext();
    const [BookingRegisterAuth, setBookingRegisterAuth] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [OTP, setOTP] = useState(null);
    const { state } = useLocation();


    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: RegisterValues,
        validationSchema: Registerschema,
        onSubmit: async (value) => {
            const res = await CheckUser(value)

        }
    })
    // useEffect(() => {
    //     if (forgetEmail) {
    //         navigate('/verify_otp', { state: { identifier: forgetEmail.identifier } })
    //     }
    // }, [forgetEmail])
    // useEffect(() => {
    //     if (Registered) {
    //         navigate('/verify_otp', { state: { identifier: Registered.identifier } })
    //     }
    // }, [Registered])



    // console.log(paths);


    const verifyOTP = async () => {
        await verifyAndLogin(OTP, state.identifier)

        // if (Registered || paths?.current[0] === "/login" || paths?.current[1] === "/login") {
        //     console.log('1');

        //     await verifyAndLogin(OTP, state.identifier)
        // } else {
        //     console.log('2');


        //     await VerifyOtp(OTP, state.identifier)
        // }
    }

    // useEffect(() => {

    //     if (OTPverify && (paths?.current[1] === "/forget_password" || paths?.current[2] === "/forget_password")) {
    //         setOTPVerify(false)
    //         navigate('/new_password', { state: { identifier: state.identifier } })
    //     }
    //     if (OTPverify && (paths?.current[0] === "/login" || paths?.current[1] === "/login")) {
    //         setOTPVerify(false)
    //         navigate('/')
    //     }
    // }, [OTPverify, paths])


    // useEffect(() => {
    //     if (Registered && OTPverify) {
    //         navigate('/')
    //     }
    // }, [Registered, OTPverify])


    return (
        <div className="fixed h-[100vh]  top-0  flex justify-center text-center mx-auto w-full items-center z-50">
            <div className="bg-white w-[80%] mx-auto border border-yellow-600  rounded-lg shadow-lg  text-center  bg-cover bg-no-repeat bg-center"  >


                {/* Register form  */}

                <div className="flex gap-2">
                    {/* - */}
                    {/* <form className='w-[50%] p-10 flex flex-col items-center justify-center' >
                        <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>OTP Verification</h3>

                        <p className='bg-white py-2 my-3 w-full font-medium text-lg rounded-lg px-3'>{state?.identifier}</p>
                        <div className='mb-4 w-full'>
                            <input className='w-[450px] p-2  rounded-md outline-none border  hover:border-red-400 focus:border-red-400' name='identifier' type="text" placeholder='Enter otp' onChange={(e) => setOTP(e.target.value)} />
                        </div>

                        <button type='submit' onClick={verifyOTP} className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Verify otp"}</button>
                    </form> */}
                    <form className='w-[50%] p-10 flex flex-col items-center justify-center' >
                        <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>Verify Account</h3>

                        {/* <p className='bg-white py-2 my-3 w-full font-medium text-lg rounded-lg px-3'>{state?.identifier}</p> */}
                        <div className='mb-4 w-full'>
                            <input className='w-full p-2  rounded-md outline-none border  hover:border-red-400 focus:border-red-400' name='identifier' type="text" placeholder='Email/Phone' onChange={(e) => setOTP(e.target.value)} />
                        </div>

                        <button type='submit' onClick={verifyOTP} className='w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Verify Account"}</button>
                    </form>
                    <div className="bgImg w-[50%] h-full min-h-[450px] bg-cover bg-center" style={{ backgroundImage: "url(./images/contactImg.webp)" }} >
                        {/* <img src="http://localhost:3000/images/contactImg.webp" alt="" /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookingRegistration
