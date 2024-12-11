import { useContactContext } from '@/context';
import { useFormik } from 'formik'
import React from 'react'
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { BsFillSendFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import * as yup from "yup";

function Contact() {

    const { createContact } = useContactContext();

    const validation = yup.object({
        name: yup.string().required("Name is required"),
        phone: yup.string().min(10).max(12).required("Phone Number is required"),
        email: yup.string().email().required("Email is required"),
        message: yup.string().required("Message is required"),
    })
    const { touched, errors, handleBlur, handleChange, handleSubmit, values, resetForm } = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },
        validationSchema: validation,
        onSubmit: (data) => {
            createContact(data);
            resetForm()
        }
    })
    return (
        <div>
            {/* Banner section start  */}
            <section className="mainBanner">
                <img src="../images/banner.webp" alt="Chat Mangni Pat Byah" className='w-full object-cover' />
            </section>
            {/* Banner section end  */}

            {/* Contact section start  */}
            <section className="contact py-5">
                <div
                    className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]  max-w-6xl mx-auto bg-white mt-4 before:absolute before:right-0 before:w-[300px] ">
                    <div>
                        <h1 className="text-gray-800 text-5xl sm:text-7xl font-extrabold">Get In Touch </h1>
                        <img src="../images/headingImg.png" alt="contact-heading-icon" className="w-64" />
                        <p className="text-sm text-gray-500 mt-4 leading-relaxed">We aim to minimize the cases of divorce in India. Your elder Brother Paras Bhai ji is here, to find a compatible partner for you. A strong future starts from here, take a step and connect today. </p>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4 mt-8">
                                <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' placeholder="Name"
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#BB1A04]  outline-none" />
                                {touched.name && errors.name && <p className='py-2 text-red-400'>{errors.name}</p>}

                                <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.phone} name='phone' placeholder="Phone No."
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#BB1A04] outline-none" />
                                {touched.phone && errors.phone && <p className='py-2 text-red-400'>{errors.phone}</p>}

                                <input type="email" onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' placeholder="Email"
                                    className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#BB1A04] outline-none" />
                                {touched.email && errors.email && <p className='py-2 text-red-400'>{errors.email}</p>}

                                <textarea placeholder="Write Message" onChange={handleChange} onBlur={handleBlur} value={values.message} name='message'
                                    className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#BB1A04] outline-none"></textarea>

                                {touched.message && errors.message && <p className='py-2 text-red-400'>{errors.message}</p>}
                            </div>

                            <button type="submit"
                                className="mt-8 flex gap-2 items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-RedTheme hover:bg-RedTheme text-white">
                                <BsFillSendFill />
                                Send Message
                            </button>
                        </form>

                        <ul className="mt-4 flex flex-wrap justify-center gap-6">
                            <li className="flex items-center text-[#BB1A04]">
                                <IoMdMail />
                                <Link to="/" className="text-sm ml-4">
                                    <strong>chatmangnipatbyahteam@gmail.com</strong>
                                </Link>
                            </li>
                            <li className="flex items-center text-[#BB1A04]">
                                <IoMdCall />
                                <Link to="" className="text-sm ml-4">
                                    <strong>+91 9870101514</strong>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="z-10 hidden sm:block relative h-full max-md:min-h-[350px] bg-cover bg-center" style={{ backgroundImage: "url(./images/contactImg.webp)" }}></div>
                </div>
            </section>
            {/* Contact section end  */}
        </div>
    )
}

export default Contact;