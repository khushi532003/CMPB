import { useProgrammeContext } from '@/AdminContext'
import { useFormik } from 'formik'
import React from 'react'
import { TfiClose } from 'react-icons/tfi'
import * as yup from "yup"

function ProgrammeForm({ onClose, Event }) {

    const { createProgramme, updateProgramme } = useProgrammeContext();

    const validation = yup.object({
        availableDates: yup.string().required("Date is required"),
        venues: yup.string().required("Venue is required"),
        state: yup.string().required("State is required"),
        amount: yup.string().required("Amount is required"),
        eventName: yup.string().required("Event Name is required"),
        description: yup.string().min(10).max(50).required("Description is required")
    })

    const { values, errors, handleBlur, handleChange, handleSubmit, resetForm, touched } = useFormik({
        initialValues: {
            availableDates: Event ? Event?.availableDates : "",
            venues: Event ? Event?.venues : "",
            state: Event ? Event?.state : "",
            amount: Event ? Event?.amount : "",
            eventName: Event ? Event?.eventName : "",
            description: Event ? Event?.description : ""
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: async (value) => {
            try {
                Event?.new ? await createProgramme(value) : await updateProgramme(Event?._id, value);
            } catch (error) {
                console.log(error);
            } finally {
                onClose();
            }
        }
    })


    return (
        <div>
            <div className='addProgramme absolute top-0 flex justify-center items-center h-[100vh]  w-full '>
                <form onSubmit={handleSubmit} className='w-[70%] mx-auto bg-white shadow z-10 px-4 py-5 rounded-md' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>

                    <div className="heading flex justify-between py-4  items-start ">
                        <h4 className="text-4xl">{Event?.new ? "Add Event" : "Update Event"}</h4>
                        <div onClick={onClose} className="close relative top-2 right-2 text-xl">
                            <TfiClose />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 py-2 gap-2">
                        <div>
                            <label className="" htmlFor="availableDates">Date</label>
                            <input id="availableDates" value={values?.availableDates} name='availableDates' onChange={handleChange} onBlur={handleBlur} type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Date' />
                            {touched.availableDates && errors.availableDates && <p className='py-2 text-red-500 text-sm ps-3'>{errors.availableDates}</p>}
                        </div>

                        <div>
                            <label className="" htmlFor="venues">Venue</label>
                            <input id="venues" value={values?.venues} name='venues' onChange={handleChange} onBlur={handleBlur} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter Venue' />
                            {touched.venues && errors.venues && <p className='py-2 text-red-500 text-sm ps-3'>{errors.venues}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 py-2">
                        <div>
                            <label className="" htmlFor="state">State</label>
                            <input id="state" value={values.state} name='state' onChange={handleChange} onBlur={handleBlur} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Enter State' />
                            {touched.state && errors.state && <p className='py-2 text-red-500 text-sm ps-3'>{errors.state}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-2 gap-2">
                        <div>
                            <label className="" htmlFor="amount">Amount</label>
                            <input id="amount" value={values.amount} name='amount' onChange={handleChange} onBlur={handleBlur} type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Add Amount' />
                            {touched.amount && errors.amount && <p className='py-2 text-red-500 text-sm ps-3'>{errors.amount}</p>}
                        </div>
                        <div>
                            <label className="" htmlFor="eventName">Event Name</label>
                            <input id="eventName" value={values.eventName} name='eventName' onChange={handleChange} onBlur={handleBlur} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Add Event Name' />
                            {touched.eventName && errors.eventName && <p className='py-2 text-red-500 text-sm ps-3'>{errors.eventName}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 py-2 ">
                        <div>
                            <label className="" htmlFor="description">Description</label>
                            <textarea rows={5} value={values.description} id="description" name='description' onChange={handleChange} onBlur={handleBlur} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-[#BB1A04]" placeholder='Describe Story' />
                            {touched.description && errors.description && <p className='py-2 text-red-500 text-sm ps-3'>{errors.description}</p>}
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <button type='submit' className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#BB1A04] rounded-md hover:bg-[#bb0404] focus:outline-none focus:bg-gray-600">Add Programme</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProgrammeForm
