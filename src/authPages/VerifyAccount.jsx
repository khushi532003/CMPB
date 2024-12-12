import Loader from '@/constant/loader'
import { useAuthContext } from '@/context'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from "yup";

function VerifyAccount() {
    const { loader } = useAuthContext()

    const validation = yup.object({
        name : yup.string().trim().required("Enter your name"),
         emailPhone: yup.string().trim().required("Enter your email or phone no."),
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name : "",
            emailPhone : ""
        },
        validationSchema: validation,
        onSubmit:  (value) => {
        }
    })
  return (
      <div>
          <div>
              <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url(./images/bg.jpg)" }}>

                  <div className='max-w-md   shadow-lg py-5 w-[95%] sm:w-[50%]  bg-white mx-auto border border-yellow-600 px-10 pt-24 rounded-t-full rounded-md p-6'>
                      <form onSubmit={handleSubmit} >
                          <h3 className='flex justify-center items-center mb-14 text-gray-500 font-bold text-5xl'>Verify Account </h3>
                        
                          <div className='mb-4'>
                              <input className='w-full  p-2 outline-none border hover:border-red-400 focus:border-red-400  rounded-md' value={values.name} name='name' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Enter Name' />
                              {errors.name && touched.name && <p className='text-red-500 text-xs' >{errors.name}</p>}
                          </div>
                          <div className='mb-4'>
                              <input className='w-full p-2  rounded-md outline-none border hover:border-red-400 focus:border-red-400' value={values.emailPhone} name='emailPhone' onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Email/Phone' />
                              {errors.emailPhone && touched.emailPhone && <p className='text-red-500 text-sm' >{errors.emailPhone}</p>}
                          </div>


                          <button type='submit' className='w-full p-2 bg-RedTheme hover:bg-red-800 duration-300 text-white rounded-md font-semibold items-center justify-center flex' disabled={loader} >{loader ? <Loader /> : "Verify Account"}</button>
                      </form>
                      <div className='flex items-center justify-center pt-5'>
                          <button className='px-4 py-2 bg-RedTheme hover:bg-red-900 duration-300 rounded-md font-semibold  mb-4'><Link to="/" className="font-semibold text-white" > Back to home </Link></button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default VerifyAccount
