import { useProgrammeContext } from '@/AdminContext'
import { useFormik } from 'formik'
import React from 'react'
import { TfiClose } from 'react-icons/tfi'
import * as yup from "yup"


function RegistrationAmtForm({ onClose, RegEvent }) {

    const { createPackage, UpdatePackage } = useProgrammeContext();

    const validation = yup.object({
        amount: yup.number().min(100).required("Amount is required")
    })

    const { touched, values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: {
            amount: RegEvent ? RegEvent?.amount : ""
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            try {
                if (RegEvent?.regNew) {
                    await createPackage(value)
                }
                else {
                    await UpdatePackage(RegEvent?._id, value)
                }
            } catch (error) {
                console.log(error)
            }
            finally {
                onClose();
            }
        }
    })


    return (
        <div className=' absolute top-0 flex justify-center items-center h-[100vh]  w-full '>
            <form onSubmit={handleSubmit} className='w-[70%] mx-auto bg-white shadow z-10 px-4 py-5 rounded-md' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>

                <div className="heading flex justify-between py-4  items-start ">
                    <h4 className="text-4xl">{RegEvent?.regNew ? "Add Amount" : "Update Amount"}</h4>
                    <div onClick={onClose} className="close relative top-2 right-2 text-xl">
                        <TfiClose />
                    </div>
                </div>

                <div className="grid grid-cols-1 py-2">
                    <div>
                        <label className="" htmlFor="amount">Amount</label>
                        <input id="amount" type="text" name='amount' value={values.amount} onChange={handleChange} onBlur={handleBlur} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Amount' />
                        {touched.amount && errors.amount && <p className='py-2 text-red-600'>{errors.amount}</p>}
                    </div>
                </div>


                <div className="w-full mt-6">
                    <button type='submit' className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-RedTheme rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Add Amount</button>
                </div>


            </form>
        </div>
    )
}

export default RegistrationAmtForm
