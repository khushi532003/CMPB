import { RegisterValues, UserIdentifier, VerifyCode } from '@/constant/AuthState';
import Loader from '@/constant/loader';
import { useAuthContext } from '@/context';
import { CheckUserSchema, Registerschema, VerifyCodeSchema } from '@/validation/AuthValidation';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useState } from 'react'
import { TfiClose } from 'react-icons/tfi';
import { toast } from 'react-toastify';

function BookingRegistration({ setToggleModal, setbuyNow, buyNow }) {

    const { loader, setUserData, RegisterUser, verifyAndLogin, CheckUser } = useAuthContext();
    const [BookingRegisterAuth, setBookingRegisterAuth] = useState(false)
    const [UserAlreadyExist, setUserAlreadyExist] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: !BookingRegisterAuth ? UserIdentifier : !UserAlreadyExist ? RegisterValues : VerifyCode,
        validationSchema: !BookingRegisterAuth ? CheckUserSchema : !UserAlreadyExist ? Registerschema : VerifyCodeSchema,
        onSubmit: async (value) => {
            let res
            if (!UserAlreadyExist && !BookingRegisterAuth) {

                res = await CheckUser(value)
                if (res?.status === 200 && res?.data?.success === true) {
                    setUserAlreadyExist(true)
                    toast.success("OTP sent successfully")
                }
            }
            try {
                if (UserAlreadyExist) {

                    const res = await verifyAndLogin(value.otp, value.identifier)
                    if (res.status === 200) {
                        const data = res?.data
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
                        if (buyNow?.event?.isBuyingEvent) {
                            setbuyNow(prevState => ({
                                ...prevState,
                                event: {
                                    ...prevState.event,
                                    buyEvent: true
                                }
                            }));
                        }
                        if (buyNow?.package?.isBuyingPackage) {
                            setbuyNow(prevState => ({
                                ...prevState,
                                package: {
                                    ...prevState.package,
                                    buyPackage: true
                                }
                            }));
                        }

                        setToggleModal(false)
                    }
                    // window.location.href = "/"

                } if (!UserAlreadyExist && BookingRegisterAuth) {
                    const res = await RegisterUser(value)
                    if (res === 200) {
                        setBookingRegisterAuth(false)
                        setUserAlreadyExist(true)
                    }
                }
            } catch (error) {
                console.log(error);
            } finally {
                if (res?.status === 200 && res?.data?.success === false) {
                    setBookingRegisterAuth(true)
                } else {
                    setUserAlreadyExist(true)
                }
            }
        }
    })

    return (
        <div className="fixed h-[100vh] top-0  flex justify-center text-center mx-auto w-full items-center z-50">
            <div className="bg-white w-[80%] mx-auto relative border border-yellow-600 rounded-lg shadow-lg text-center  bg-cover bg-no-repeat bg-center"  >
                <div onClick={() => setToggleModal(false)} className="close w-full top-6 right-5 rounded-full absolute font-bold flex justify-end text-xl">
                    <div className="bg-white p-3 rounded-full">
                        <TfiClose />
                    </div>
                </div>
                <div className="flex gap-2">
                    {!BookingRegisterAuth ? (
                        !UserAlreadyExist ? (
                            // Verify Account Form
                            <form onSubmit={handleSubmit} className="w-full sm:w-[50%] p-10 flex flex-col items-center justify-center">
                                <h3 className="flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl">Verify Account</h3>
                                <div className="mb-4 w-full">
                                    <input
                                        className="w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400"
                                        name="identifier"
                                        type="text"
                                        placeholder="Email/Phone"
                                        value={values.identifier}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white  rounded-md font-semibold items-center justify-center flex"
                                    disabled={loader}
                                >
                                    {loader ? <Loader /> : "Verify Account"}
                                </button>
                            </form>
                        ) : (
                            // OTP Verification Form
                            <form onSubmit={handleSubmit} className="w-full sm:w-[50%] p-10 flex flex-col  justify-center">
                                <h3 className="flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl">OTP Verification</h3>
                                <div className="mb-4 w-full">
                                    <label htmlFor="">{values.identifier}</label>
                                    <input
                                        className="w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400"
                                        name="otp"
                                        type="text"
                                        value={values?.otp}
                                        placeholder="Enter OTP"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex"
                                    disabled={loader}
                                >
                                    {loader ? <Loader /> : "Verify OTP"}
                                </button>
                            </form>
                        )
                    ) : (
                        // Create Account Form
                        <form onSubmit={handleSubmit} className="w-full sm:w-[50%] p-10 flex flex-col justify-center">
                            <h3 className="flex justify-center text-center items-center mb-14 font-bold text-gray-500 text-5xl">Create Your Account</h3>
                            <div className="flex justify-between items-center gap-2">
                                <div className="mb-4">
                                    <input
                                        className="w-full capitalize p-2 outline-none border hover:border-red-400 focus:border-red-400 rounded-md"
                                        value={values.firstName}
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    {errors.firstName && touched.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                                </div>
                                <div className="mb-4">
                                    <input
                                        className="w-full p-2 rounded-md capitalize outline-none border hover:border-red-400 focus:border-red-400"
                                        value={values.lastName}
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName && touched.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400"
                                    value={values.identifier}
                                    disabled={true}
                                    name="identifier"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Email/Phone"
                                    autoComplete="identifier"
                                />
                                {errors.identifier && touched.identifier && <p className="text-red-500 text-xs">{errors.identifier}</p>}
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <div className="mb-4 relative">
                                    <input
                                        className="w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400"
                                        type={showPassword ? "text" : "password"}
                                        value={values.password}
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Password"
                                    />
                                    {errors.password && touched.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                                </div>
                                <div className="mb-4 relative">
                                    <input
                                        className="w-full p-2 rounded-md outline-none border hover:border-red-400 focus:border-red-400"
                                        type={showPassword ? "text" : "password"}
                                        value={values.confirmPassword}
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Confirm Password"
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-2 bg-red-600 hover:bg-red-800 duration-300 text-white rounded-md font-bold flex items-center justify-center"
                                disabled={loader}
                            >
                                {loader ? <Loader /> : "Register"}
                            </button>
                        </form>
                    )}
                    <div
                        className="bgImg sm:w-[50%] h-full min-h-[450px] bg-cover bg-center"
                        style={{ backgroundImage: "url(./images/contactImg.webp)" }}
                    ></div>
                </div>

            </div>
        </div>
    )
}

export default BookingRegistration
